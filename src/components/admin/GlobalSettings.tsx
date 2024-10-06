import React, { useState } from 'react'
import { Save } from 'lucide-react'

const GlobalSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    language: 'en',
    emailNotifications: true,
    dataRetentionDays: 30,
    twoFactorAuth: false,
  })

  const handleSettingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the settings to your backend
    console.log('Settings saved:', settings)
    alert('Settings saved successfully!')
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Global Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Language</label>
          <select
            name="language"
            value={settings.language}
            onChange={handleSettingChange}
            className="w-full border rounded px-2 py-1"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="emailNotifications"
              checked={settings.emailNotifications}
              onChange={handleSettingChange}
              className="mr-2"
            />
            Enable Email Notifications
          </label>
        </div>
        <div>
          <label className="block mb-1">Data Retention (days)</label>
          <input
            type="number"
            name="dataRetentionDays"
            value={settings.dataRetentionDays}
            onChange={handleSettingChange}
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="twoFactorAuth"
              checked={settings.twoFactorAuth}
              onChange={handleSettingChange}
              className="mr-2"
            />
            Enable Two-Factor Authentication
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
          <Save size={20} className="mr-2" />
          Save Settings
        </button>
      </form>
    </div>
  )
}

export default GlobalSettings