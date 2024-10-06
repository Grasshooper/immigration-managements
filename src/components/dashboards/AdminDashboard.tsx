import React from 'react'
import { Users, FileText, AlertCircle, Settings, Bell } from 'lucide-react'
import UserManagement from '../admin/UserManagement'
import GlobalSettings from '../admin/GlobalSettings'
import AuditReporting from '../admin/AuditReporting'
import SecurityManagement from '../admin/SecurityManagement'
import NotificationCenter from '../admin/NotificationCenter'

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('overview')

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        <DashboardCard
          icon={Users}
          title="Total Users"
          value="1,234"
          color="bg-blue-500"
        />
        <DashboardCard
          icon={FileText}
          title="Active Cases"
          value="567"
          color="bg-green-500"
        />
        <DashboardCard
          icon={AlertCircle}
          title="Pending Approvals"
          value="89"
          color="bg-yellow-500"
        />
        <DashboardCard
          icon={Settings}
          title="System Health"
          value="98%"
          color="bg-purple-500"
        />
        <DashboardCard
          icon={Bell}
          title="New Notifications"
          value="12"
          color="bg-red-500"
        />
      </div>
      <div className="mb-6">
        <nav className="flex space-x-4">
          {['Overview', 'User Management', 'Global Settings', 'Audit & Reporting', 'Security', 'Notifications'].map((tab) => (
            <button
              key={tab}
              className={`px-3 py-2 rounded-md ${
                activeTab === tab.toLowerCase().replace(' ', '-')
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        {activeTab === 'overview' && <AdminOverview />}
        {activeTab === 'user-management' && <UserManagement />}
        {activeTab === 'global-settings' && <GlobalSettings />}
        {activeTab === 'audit-&-reporting' && <AuditReporting />}
        {activeTab === 'security' && <SecurityManagement />}
        {activeTab === 'notifications' && <NotificationCenter />}
      </div>
    </div>
  )
}

interface DashboardCardProps {
  icon: React.ElementType
  title: string
  value: string
  color: string
}

const DashboardCard: React.FC<DashboardCardProps> = ({ icon: Icon, title, value, color }) => {
  return (
    <div className={`${color} rounded-lg shadow-md p-6 text-white`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <Icon className="h-10 w-10 opacity-75" />
      </div>
    </div>
  )
}

const AdminOverview: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">System Overview</h2>
      <p>Welcome to the Admin Dashboard. Here you can manage users, configure global settings, view reports, manage security, and handle notifications.</p>
      {/* Add more overview content here */}
    </div>
  )
}

export default AdminDashboard