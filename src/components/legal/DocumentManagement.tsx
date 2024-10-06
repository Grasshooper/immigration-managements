import React, { useState } from 'react'
import { Upload, FileText, Eye, Trash2, Edit } from 'lucide-react'

interface Document {
  id: number
  name: string
  type: string
  uploadDate: string
  expirationDate: string
  notes: string
}

const DocumentManagement: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([
    { id: 1, name: 'Passport.pdf', type: 'Passport', uploadDate: '2023-05-15', expirationDate: '2028-05-14', notes: 'Valid for 5 years' },
    { id: 2, name: 'BirthCertificate.pdf', type: 'Birth Certificate', uploadDate: '2023-05-10', expirationDate: 'N/A', notes: 'Original copy' },
    { id: 3, name: 'VisaApplication.pdf', type: 'Visa Application', uploadDate: '2023-05-20', expirationDate: '2024-05-19', notes: 'Pending approval' },
  ])

  const [newDocument, setNewDocument] = useState<Omit<Document, 'id' | 'uploadDate'>>({
    name: '',
    type: '',
    expirationDate: '',
    notes: '',
  })

  const handleAddDocument = (e: React.FormEvent) => {
    e.preventDefault()
    const uploadDate = new Date().toISOString().split('T')[0]
    setDocuments([...documents, { ...newDocument, id: documents.length + 1, uploadDate }])
    setNewDocument({ name: '', type: '', expirationDate: '', notes: '' })
  }

  const handleDeleteDocument = (id: number) => {
    setDocuments(documents.filter(doc => doc.id !== id))
  }

  const handleViewDocument = (id: number) => {
    // Implement document viewing logic here
    console.log('Viewing document:', id)
  }

  const handleEditDocument = (id: number) => {
    // Implement document editing logic here
    console.log('Editing document:', id)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Document Management</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Upload New Document</h3>
        <form onSubmit={handleAddDocument} className="space-y-2">
          <input
            type="text"
            placeholder="Document Name"
            value={newDocument.name}
            onChange={(e) => setNewDocument({ ...newDocument, name: e.target.value })}
            className="w-full border rounded px-2 py-1"
          />
          <input
            type="text"
            placeholder="Document Type"
            value={newDocument.type}
            onChange={(e) => setNewDocument({ ...newDocument, type: e.target.value })}
            className="w-full border rounded px-2 py-1"
          />
          <input
            type="date"
            placeholder="Expiration Date (if applicable)"
            value={newDocument.expirationDate}
            onChange={(e) => setNewDocument({ ...newDocument, expirationDate: e.target.value })}
            className="w-full border rounded px-2 py-1"
          />
          <textarea
            placeholder="Notes"
            value={newDocument.notes}
            onChange={(e) => setNewDocument({ ...newDocument, notes: e.target.value })}
            className="w-full border rounded px-2 py-1"
            rows={3}
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
            <Upload size={20} className="mr-2" />
            Upload Document
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Document List</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Type</th>
              <th className="text-left p-2">Upload Date</th>
              <th className="text-left p-2">Expiration Date</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id} className="border-b">
                <td className="p-2">{doc.name}</td>
                <td className="p-2">{doc.type}</td>
                <td className="p-2">{doc.uploadDate}</td>
                <td className="p-2">{doc.expirationDate}</td>
                <td className="p-2">
                  <button className="text-blue-500 mr-2" onClick={() => handleViewDocument(doc.id)}>
                    <Eye size={20} />
                  </button>
                  <button className="text-green-500 mr-2" onClick={() => handleEditDocument(doc.id)}>
                    <Edit size={20} />
                  </button>
                  <button className="text-red-500" onClick={() => handleDeleteDocument(doc.id)}>
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

export default DocumentManagement