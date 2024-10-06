import React, { useState } from 'react'
import { CheckSquare, Clock, AlertTriangle, UserPlus } from 'lucide-react'

interface WorkflowStep {
  id: number
  caseName: string
  step: string
  status: 'Pending' | 'In Progress' | 'Completed'
  dueDate: string
  assignedTo: string
}

const LegalWorkflow: React.FC = () => {
  const [workflowSteps, setWorkflowSteps] = useState<WorkflowStep[]>([
    { id: 1, caseName: 'John Doe - Visa Application', step: 'Document Review', status: 'In Progress', dueDate: '2023-06-15', assignedTo: 'Jane Lawyer' },
    { id: 2, caseName: 'Alice Smith - Asylum Request', step: 'Interview Preparation', status: 'Pending', dueDate: '2023-06-20', assignedTo: 'Bob Attorney' },
    { id: 3, caseName: 'Charlie Brown - Citizenship', step: 'Final Decision', status: 'Completed', dueDate: '2023-06-10', assignedTo: 'Jane Lawyer' },
  ])

  const [newStep, setNewStep] = useState<Omit<WorkflowStep, 'id'>>({
    caseName: '',
    step: '',
    status: 'Pending',
    dueDate: '',
    assignedTo: '',
  })

  const handleAddStep = (e: React.FormEvent) => {
    e.preventDefault()
    setWorkflowSteps([...workflowSteps, { ...newStep, id: workflowSteps.length + 1 }])
    setNewStep({ caseName: '', step: '', status: 'Pending', dueDate: '', assignedTo: '' })
  }

  const handleUpdateStatus = (id: number, newStatus: 'Pending' | 'In Progress' | 'Completed') => {
    setWorkflowSteps(workflowSteps.map(step => 
      step.id === id ? { ...step, status: newStatus } : step
    ))
  }

  const handleAssignCase = (id: number) => {
    // Implement case assignment logic here
    console.log('Assigning case:', id)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Legal Workflow</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Add New Workflow Step</h3>
        <form onSubmit={handleAddStep} className="space-y-2">
          <input
            type="text"
            placeholder="Case Name"
            value={newStep.caseName}
            onChange={(e) => setNewStep({ ...newStep, caseName: e.target.value })}
            className="w-full border rounded px-2 py-1"
          />
          <input
            type="text"
            placeholder="Workflow Step"
            value={newStep.step}
            onChange={(e) => setNewStep({ ...newStep, step: e.target.value })}
            className="w-full border rounded px-2 py-1"
          />
          <select
            value={newStep.status}
            onChange={(e) => setNewStep({ ...newStep, status: e.target.value as 'Pending' | 'In Progress' | 'Completed' })}
            className="w-full border rounded px-2 py-1"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <input
            type="date"
            placeholder="Due Date"
            value={newStep.dueDate}
            onChange={(e) => setNewStep({ ...newStep, dueDate: e.target.value })}
            className="w-full border rounded px-2 py-1"
          />
          <input
            type="text"
            placeholder="Assigned To"
            value={newStep.assignedTo}
            onChange={(e) => setNewStep({ ...newStep, assignedTo: e.target.value })}
            className="w-full border rounded px-2 py-1"
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
            <CheckSquare size={20} className="mr-2" />
            Add Workflow Step
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Workflow Steps</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-2">Case Name</th>
              <th className="text-left p-2">Step</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Due Date</th>
              <th className="text-left p-2">Assigned To</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {workflowSteps.map((step) => (
              <tr key={step.id} className="border-b">
                <td className="p-2">{step.caseName}</td>
                <td className="p-2">{step.step}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded ${
                    step.status === 'Completed' ? 'bg-green-200 text-green-800' :
                    step.status === 'In Progress' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-red-200 text-red-800'
                  }`}>
                    {step.status}
                  </span>
                </td>
                <td className="p-2">{step.dueDate}</td>
                <td className="p-2">{step.assignedTo}</td>
                <td className="p-2">
                  <button 
                    className="text-blue-500 mr-2"
                    onClick={() => handleUpdateStatus(step.id, 'In Progress')}
                  >
                    <Clock size={20} />
                  </button>
                  <button 
                    className="text-green-500 mr-2"
                    onClick={() => handleUpdateStatus(step.id, 'Completed')}
                  >
                    <CheckSquare size={20} />
                  </button>
                  <button 
                    className="text-yellow-500 mr-2"
                    onClick={() => handleUpdateStatus(step.id, 'Pending')}
                  >
                    <AlertTriangle size={20} />
                  </button>
                  <button 
                    className="text-purple-500"
                    onClick={() => handleAssignCase(step.id)}
                  >
                    <UserPlus size={20} />
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

export default LegalWorkflow