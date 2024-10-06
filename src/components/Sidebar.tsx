import React from 'react'
import { Link } from 'react-router-dom'
import { useUser, UserButton } from '@clerk/clerk-react'
import { Home, FileText, Users, Settings } from 'lucide-react'

const Sidebar: React.FC = () => {
  const { user } = useUser()

  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Cases', path: '/dashboard/cases' },
    { icon: Users, label: 'Users', path: '/dashboard/users' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ]

  return (
    <div className="bg-indigo-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <div className="text-white flex items-center space-x-2 px-4 mb-6">
          <FileText className="h-8 w-8" />
          <span className="text-2xl font-extrabold">ImmigrationApp</span>
        </div>
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700"
          >
            <item.icon className="inline-block mr-2 h-5 w-5" />
            {item.label}
          </Link>
        ))}
        <div className="mt-6 px-4">
          <UserButton afterSignOutUrl="/login" />
        </div>
      </nav>
    </div>
  )
}

export default Sidebar