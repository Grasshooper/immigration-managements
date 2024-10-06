import React, { useState } from 'react'
import { Send, Video, Calendar, UserPlus } from 'lucide-react'

interface Message {
  id: number
  sender: string
  recipient: string
  content: string
  timestamp: string
}

interface Appointment {
  id: number
  clientName: string
  purpose: string
  date: string
  time: string
}

const Communication: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'Jane Lawyer', recipient: 'John Doe', content: 'Your visa application has been received. We need additional documents.', timestamp: '2023-06-01 10:30' },
    { id: 2, sender: 'John Doe', recipient: 'Jane Lawyer', content: 'Thank you for the update. What additional documents do you need?', timestamp: '2023-06-01 11:15' },
    { id: 3, sender: 'Jane Lawyer', recipient: 'John Doe', content: 'We need your updated employment letter and bank statements for the last 3 months.', timestamp: '2023-06-01 14:00' },
  ])

  const [newMessage, setNewMessage] = useState({
    recipient: '',
    content: '',
  })

  const [appointments, setAppointments] = useState<Appointment[]>([
    { id: 1, clientName: 'John Doe', purpose: 'Visa Application Review', date: '2023-06-15', time: '14:00' },
    { id: 2, clientName: 'Alice Smith', purpose: 'Asylum Interview Prep', date: '2023-06-18', time: '10:00' },
  ])

  const [newAppointment, setNewAppointment] = useState<Omit<Appointment, 'id'>>({
    clientName: '',
    purpose: '',
    date: '',
    time: '',
  })

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    const timestamp = new Date().toLocaleString()
    setMessages([...messages, { ...newMessage, id: messages.length + 1, sender: 'Jane Lawyer', timestamp }])
    setNewMessage({ recipient: '', content: '' })
  }

  const handleScheduleAppointment = (e: React.FormEvent) => {
    e.preventDefault()
    setAppointments([...appointments, { ...newAppointment, id: appointments.length + 1 }])
    setNewAppointment({ clientName: '', purpose: '', date: '', time: '' })
  }

  const handleStartVideoCall = () => {
    // Implement video call logic here
    console.log('Starting video call')
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Communication</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Message Center</h3>
          <div className="bg-gray-100 p-4 rounded-lg h-64 overflow-y-auto mb-4">
            {messages.map((message) => (
              <div key={message.id} className={`mb-2 p-2 rounded ${message.sender === 'Jane Lawyer' ? 'bg-blue-100 ml-8' : 'bg-green-100 mr-8'}`}>
                <p className="text-sm font-semibold">{message.sender} to {message.recipient}</p>
                <p>{message.content}</p>
                <p className="text-xs text-gray-500">{message.timestamp}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="space-y-2">
            <input
              type="text"
              placeholder="Recipient"
              value={newMessage.recipient}
              onChange={(e) => setNewMessage({ ...newMessage, recipient: e.target.value })}
              className="w-full border rounded px-2 py-1"
            />
            <textarea
              placeholder="Message"
              value={newMessage.content}
              onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
              className="w-full border rounded px-2 py-1"
              rows={3}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
              <Send size={20} className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Video Calls & Appointments</h3>
          <div className="space-y-4">
            <button onClick={handleStartVideoCall} className="bg-purple-500 text-white px-4 py-2 rounded w-full flex items-center justify-center">
              <Video size={20} className="mr-2" />
              Start Video Call
            </button>
            <form onSubmit={handleScheduleAppointment} className="space-y-2">
              <input
                type="text"
                placeholder="Client Name"
                value={newAppointment.clientName}
                onChange={(e) => setNewAppointment({ ...newAppointment, clientName: e.target.value })}
                className="w-full border rounded px-2 py-1"
              />
              <input
                type="text"
                placeholder="Purpose"
                value={newAppointment.purpose}
                onChange={(e) => setNewAppointment({ ...newAppointment, purpose: e.target.value })}
                className="w-full border rounded px-2 py-1"
              />
              <input
                type="date"
                value={newAppointment.date}
                onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                className="w-full border rounded px-2 py-1"
              />
              <input
                type="time"
                value={newAppointment.time}
                onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                className="w-full border rounded px-2 py-1"
              />
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full flex items-center justify-center">
                <Calendar size={20} className="mr-2" />
                Schedule Appointment
              </button>
            </form>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Upcoming Appointments</h4>
            <ul className="space-y-2">
              {appointments.map((appointment) => (
                <li key={appointment.id} className="bg-gray-100 p-2 rounded">
                  <p className="font-semibold">{appointment.clientName} - {appointment.purpose}</p>
                  <p className="text-sm">{appointment.date} - {appointment.time}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Communication