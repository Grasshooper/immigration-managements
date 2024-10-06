import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Sidebar from './Sidebar'
import AdminDashboard from './dashboards/AdminDashboard'
import LegalDashboard from './dashboards/LegalDashboard'
import UserDashboard from './dashboards/UserDashboard'
import LegalAdminDashboard from './dashboards/LegalAdminDashboard'

const Dashboard: React.FC = () => {
  const { user } = useUser()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  // You'll need to implement a way to determine the user's role
  // This is just a placeholder example
  const userRole = user.publicMetadata.role as 'admin' | 'legal' | 'user' | 'legalAdmin'

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <Routes>
          <Route
            path="/"
            element={
              userRole === 'admin' ? (
                <AdminDashboard />
              ) : userRole === 'legal' ? (
                <LegalDashboard />
              ) : userRole === 'user' ? (
                <UserDashboard />
              ) : userRole === 'legalAdmin' ? (
                <LegalAdminDashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          {/* Add more routes for specific features */}
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard