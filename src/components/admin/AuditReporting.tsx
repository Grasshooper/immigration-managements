import React, { useState } from 'react'
import { BarChart, FileText, Download } from 'lucide-react'

const AuditReporting: React.FC = () => {
  const [reportType, setReportType] = useState('userActivity')

  const generateReport = () => {
    // Here you would typically generate and download the report
    console.log(`Generating ${reportType} report...`)
    alert('Report generated and downloaded!')
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Audit & Reporting</h2>
      <div className="mb-6">
        <label className="block mb-2">Select Report Type</label>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="w-full border rounded px-2 py-1"
        >
          <option value="userActivity">User Activity</option>
          <option value="caseStatus">Case Status</option>
          <option value="complianceTracking">Compliance Tracking</option>
        </select>
      </div>
      <button
        onClick={generateReport}
        className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
      >
        <Download size={20} className="mr-2" />
        Generate Report
      </button>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Open Cases" value="234" icon={FileText} />
          <StatCard title="Approval Rate" value="87%" icon={BarChart} />
          <StatCard title="Avg. Turnaround Time" value="14 days" icon={BarChart} />
        </div>
      </div>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string
  icon: React.ElementType
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <Icon size={24} className="text-blue-500" />
      </div>
    </div>
  )
}

export default AuditReporting