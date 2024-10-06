import React, { useState } from 'react'
import { Shield, Key, AlertTriangle } from 'lucide-react'

const SecurityManagement: React.FC = () => {
  const [securitySettings, setSecuritySettings] = useState({
    passwordComplexity: 'medium',
    sessionTimeout: 30,
    ipWhitelist: '',
  })

  const handleSettingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setSecuritySettings({
      ...securitySettings,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the security settings to your backend
    console.log('Security settings saved:', securitySettings)
    alert('Security settings updated successfully!')
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Security Management</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Password Complexity</label>
          <select
            name="passwordComplexity"
            value={securitySettings.passwordComplexity}
            onChange={handleSettingChange}
            className="w-full border rounded px-2 py-1"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Session Timeout (minutes)</label>
          <input
            type="number"
            name="sessionTimeout"
            value={securitySettings.sessionTimeout}
            onChange={handleSettingChange}
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block mb-1">IP Whitelist (comma-separated)</label>
          <input
            type="text"
            name="ipWhitelist"
            value={securitySettings.ipWhitelist}
            onChange={handleSettingChange}
            className="w-full border rounded px-2 py-1"
            placeholder="e.g., 192.168.1.1, 10.0.0.1"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
          <Shield size={20} className="mr-2" />
          Update Security Settings
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Security Actions</h3>
        <div className="space-y-4">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center">
            <Key size={20} className="mr-2" />
            Force Password Reset for All Users
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
            <AlertTriangle size={20} className="mr-2" />
            Lock All Accounts
          </button>
        </div>
      </div>
    </div>
  )
}

export default SecurityManagement