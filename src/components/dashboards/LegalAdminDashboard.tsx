import React from 'react'
import { Users, FileText, AlertCircle } from 'lucide-react'

const LegalAdminDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Legal Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          icon={Users}
          title="Legal Team Members"
          value="12"
          color="bg-purple-500"
        />
        <DashboardCard
          icon={FileText}
          title="Active Cases"
          value="87"
          color="bg-blue-500"
        />
        <DashboardCard
          icon={AlertCircle}
          title="Escalated Issues"
          value="5"
          color="bg-red-500"
        />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Team Performance</h2>
        {/* Add a table or chart of team performance metrics here */}
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

export default LegalAdminDashboard