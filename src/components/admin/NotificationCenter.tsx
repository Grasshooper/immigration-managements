import React, { useState } from 'react'
import { Bell, Send } from 'lucide-react'

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'System maintenance scheduled for tonight at 2 AM', type: 'info' },
    { id: 2, message: 'New security patch available', type: 'warning' },
    { id: 3, message: 'User John Doe account locked due to multiple failed login attempts', type: 'alert' },
  ])

  const [newNotification, setNewNotification] = useState({ message: '', type: 'info' })

  const handleAddNotification = (e: React.FormEvent) => {
    e.preventDefault()
    setNotifications([...notifications, { ...newNotification, id: notifications.length + 1 }])
    setNewNotification({ message: '', type: 'info' })
  }

  const handleDeleteNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id))
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Notification Center</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Create New Notification</h3>
        <form onSubmit={handleAddNotification} className="space-y-2">
          <textarea
            placeholder="Notification message"
            value={newNotification.message}
            onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
            className="w-full border rounded px-2 py-1"
            rows={3}
          />
          <select
            value={newNotification.type}
            onChange={(e) => setNewNotification({ ...newNotification, type: e.target.value })}
            className="w-full border rounded px-2 py-1"
          >
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="alert">Alert</option>
          </select>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
            <Send size={20} className="mr-2" />
            Send Notification
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Active Notifications</h3>
        <ul className="space-y-2">
          {notifications.map((notification) => (
            <li key={notification.id} className={`p-2 rounded ${getNotificationColor(notification.type)}`}>
              <div className="flex justify-between items-center">
                <span>{notification.message}</span>
                <button
                  onClick={() => handleDeleteNotification(notification.id)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  &times;
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const getNotificationColor = (type: string) => {
  switch (type) {
    case 'info':
      return 'bg-blue-100 text-blue-800'
    case 'warning':
      return 'bg-yellow-100 text-yellow-800'
    case 'alert':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default NotificationCenter