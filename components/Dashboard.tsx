'use client'

import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function Dashboard() {
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="dashboard">
      <div className="header">
        <h1>Dashboard</h1>
        <div className="nav-links">
          <Link href="/dashboard" className="nav-link active">
            Dashboard
          </Link>
          <Link href="/profile" className="nav-link">
            Profile
          </Link>
          <button onClick={handleSignOut} className="button button-secondary">
            Sign Out
          </button>
        </div>
      </div>
      
      <div>
        <h2>Welcome back!</h2>
        <p>You are successfully logged in to your dashboard.</p>
        
        <div className="mt-4">
          <h3>Quick Stats:</h3>
          <div className="profile-info">
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{user?.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Account Type:</span>
              <span className="info-value">
                {user?.app_metadata?.providers?.includes('google') ? 'Google Account' :
                 user?.app_metadata?.providers?.includes('github') ? 'GitHub Account' : 
                 'Email Account'}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Member Since:</span>
              <span className="info-value">
                {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3>Quick Actions:</h3>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Link href="/profile" className="button">
              Manage Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}