'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function UserProfile() {
  const { user, updatePassword, signOut } = useAuth()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    try {
      const { error } = await updatePassword(newPassword)
      if (error) {
        setError(error.message)
      } else {
        setMessage('Password updated successfully!')
        setNewPassword('')
        setConfirmPassword('')
      }
    } catch (err) {
      setError('Failed to update password')
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="profile-container">
      <div className="header">
        <h1>User Profile</h1>
        <div className="nav-links">
          <Link href="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link href="/profile" className="nav-link active">
            Profile
          </Link>
          <button onClick={handleSignOut} className="button button-secondary">
            Sign Out
          </button>
        </div>
      </div>

      {/* User Information */}
      <div className="profile-section">
        <h2>Account Information</h2>
        <div className="profile-info">
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">{user?.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">User ID:</span>
            <span className="info-value">{user?.id}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Account Created:</span>
            <span className="info-value">
              {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Last Sign In:</span>
            <span className="info-value">
              {user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString() : 'N/A'}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">Email Confirmed:</span>
            <span className="info-value">
              {user?.email_confirmed_at ? 'Yes' : 'No'}
            </span>
          </div>
        </div>
      </div>

      {/* Password Update */}
      <div className="profile-section">
        <h2>Change Password</h2>
        <form onSubmit={handlePasswordUpdate} className="form">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
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
      </div>

      {/* Account Actions */}
      <div className="profile-section">
        <h2>Account Actions</h2>
        <div className="profile-info">
          <div className="info-item">
            <span className="info-label">Authentication Providers:</span>
            <span className="info-value">
              {user?.app_metadata?.providers?.join(', ') || 'Email'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}