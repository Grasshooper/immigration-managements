import React, { useState } from 'react'
import { Plus, Edit, Trash2, FileText } from 'lucide-react'

interface Case {
  id: number
  clientName: string
  caseType: string
  status: string
  deadline: string
  notes: string
}

const CaseManagement: React.FC = () => {
  const [cases, setCases] = useState<Case[]>([
    { id: 1, clientName: 'John Doe', caseType: 'Visa Application', status: 'In Progress', deadline: '2023-12-31', notes: 'Awaiting additional documents' },
    { id: 2, clientName: 'Jane Smith', caseType: 'Asylum Request', status: 'Pending Review', deadline: '2023-11-15', notes: 'Interview scheduled for next week' },
    { id: 3, clientName: 'Bob Johnson', caseType: 'Citizenship Request', status: 'Approved', deadline: '2023-10-01', notes: 'Final paperwork submitted' },
  ])

  const [newCase, setNewCase] = useState<Omit<Case, 'id'>>({
    clientName: '',
    caseType: '',
    status: '',
    deadline: '',
    notes: '',
  })

  const handleAddCase = (e: React.FormEvent) => {
    e.preventDefault()
    setCases([...cases, { ...newCase, id: cases.length + 1 }])
    setNewCase({ clientName: '', caseType: '', status: '', deadline: '', notes: '' })
  }

  const handleDeleteCase = (id: number) => {
    setCases(cases.filter(c => c.id !== id))
  }

  const handleViewCaseDetails = (id: number) => {
    // Implement case details view logic here
    console.log('Viewing case details for ID:', id)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Case Management</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Add New Case</h3>
        <form onSubmit={handleAddCase} className="space-y-2">
          <input
            type="text"
            placeholder="Client Name"
            value={newCase.clientName}
            onChange={(e) => setNewCase({ ...newCase, clientName: e.target.value })}
            className="w-full border rounded px-2 py-1"
          />
          <input
            type="text"
            placeholder="Case Type"
            value={newCase.caseType}
            onChange={(e) => setNewCase({ ...newCase, caseType: e.target.value })}
            className="w-full border rounded px-2 py-1"
          />
          <select
            value={newCase.status}
            onChange={(e) => setNewCase({ ...newCase, status: e.target.value })}
            className="w-full border rounded px-2 py-1"
          >
            <option value="">Select Status</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending Review">Pending Review</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
          <input
            type="date"
            value={newCase.deadline}
            onChange={(e) => setNewCase({ ...newCase, deadline: e.target.value })}
            className="w-full border rounded px-2 py-1"
          />
          <textarea
            placeholder="Case Notes"
            value={newCase.notes}
            onChange={(e) => setNewCase({ ...newCase, notes: e.target.value })}
            className="w-full border rounded px-2 py-1"
            rows={3}
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
            <Plus size={20} className="mr-2" />
            Add Case
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Case List</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-2">Client Name</th>
              <th className="text-left p-2">Case Type</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Deadline</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c) => (
              <tr key={c.id} className="border-b">
                <td className="p-2">{c.clientName}</td>
                <td className="p-2">{c.caseType}</td>
                <td className="p-2">{c.status}</td>
                <td className="p-2">{c.deadline}</td>
                <td className="p-2">
                  <button className="text-blue-500 mr-2" onClick={() => handleViewCaseDetails(c.id)}>
                    <FileText size={20} />
                  </button>
                  <button className="text-green-500 mr-2">
                    <Edit size={20} />
                  </button>
                  <button className="text-red-500" onClick={() => handleDeleteCase(c.id)}>
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CaseManagement