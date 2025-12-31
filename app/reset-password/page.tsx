'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

// Simple reset password page without useSearchParams to avoid build issues
export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  
  const { updatePassword } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    try {
      const { error } = await updatePassword(password)
      if (error) {
        setError(error.message)
      } else {
        setMessage('Password updated successfully! Redirecting to dashboard...')
        setTimeout(() => {
          router.push('/dashboard')
        }, 2000)
      }
    } catch (err) {
      setError('Failed to update password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>Reset Your Password</h1>
      <p style={{ marginBottom: '1rem', color: '#6b7280' }}>
        Enter your new password below.
      </p>
      
      <form onSubmit={handleSubmit} className="form">
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input"
          minLength={6}
        />
        
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="input"
          minLength={6}
        />
        
        <button
          type="submit"
          disabled={loading}
          className="button"
        >
          {loading ? 'Updating...' : 'Update Password'}
        </button>
      </form>

      {error && <div className="error">{error}</div>}
      {message && <div className="success">{message}</div>}
      
      <div className="text-center mt-4">
        <button
          type="button"
          onClick={() => router.push('/login')}
          className="link"
        >
          Back to Login
        </button>
      </div>
    </div>
  )
}