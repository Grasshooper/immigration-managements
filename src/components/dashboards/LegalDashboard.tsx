import React, { useState } from 'react'
import { FileText, Clock, CheckCircle, MessageSquare, AlertTriangle } from 'lucide-react'
import CaseManagement from '../legal/CaseManagement'
import DocumentManagement from '../legal/DocumentManagement'
import LegalWorkflow from '../legal/LegalWorkflow'
import Communication from '../legal/Communication'
import ComplianceManagement from '../legal/ComplianceManagement'

const LegalDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Legal Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        <DashboardCard
          icon={FileText}
          title="Active Cases"
          value="42"
          color="bg-blue-500"
        />
        <DashboardCard
          icon={Clock}
          title="Pending Reviews"
          value="15"
          color="bg-yellow-500"
        />
        <DashboardCard
          icon={CheckCircle}
          title="Completed Cases"
          value="78"
          color="bg-green-500"
        />
        <DashboardCard
          icon={MessageSquare}
          title="Unread Messages"
          value="7"
          color="bg-purple-500"
        />
        <DashboardCard
          icon={AlertTriangle}
          title="Urgent Cases"
          value="3"
          color="bg-red-500"
        />
      </div>
      <div className="mb-6">
        <nav className="flex space-x-4">
          {['Overview', 'Case Management', 'Document Management', 'Legal Workflow', 'Communication', 'Compliance'].map((tab) => (
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
        {activeTab === 'overview' && <LegalOverview />}
        {activeTab === 'case-management' && <CaseManagement />}
        {activeTab === 'document-management' && <DocumentManagement />}
        {activeTab === 'legal-workflow' && <LegalWorkflow />}
        {activeTab === 'communication' && <Communication />}
        {activeTab === 'compliance' && <ComplianceManagement />}
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

const LegalOverview: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Legal Overview</h2>
      <p>Welcome to the Legal Dashboard. Here you can manage cases, review documents, track workflows, communicate with clients, and ensure compliance with immigration laws.</p>
      {/* Add more overview content here */}
    </div>
  )
}

export default LegalDashboard