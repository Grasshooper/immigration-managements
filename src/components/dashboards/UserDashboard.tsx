import React from 'react'
import { FileText, Clock, CheckCircle } from 'lucide-react'

const UserDashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          icon={FileText}
          title="Active Applications"
          value="2"
          color="bg-blue-500"
        />
        <DashboardCard
          icon={Clock}
          title="Pending Documents"
          value="3"
          color="bg-yellow-500"
        />
        <DashboardCard
          icon={CheckCircle}
          title="Completed Applications"
          value="1"
          color="bg-green-500"
        />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Application Status</h2>
        {/* Add a list or table of application statuses here */}
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

export default UserDashboard