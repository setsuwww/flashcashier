'use client'

import { useState, useRef, useEffect } from 'react'

interface DropdownProps {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const Dropdown: React.FC<DropdownProps> = ({ label, value, options, onChange, placeholder = 'Pilih...', className = '' }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={`w-full mb-4 ${className}`} ref={ref}>
      <label className="block text-sm font-medium text-gray-800 mb-1">{label}</label>

      <div onClick={() => setOpen(!open)}
        className={`cursor-pointer px-3 py-2 text-sm border rounded-md transition bg-white text-gray-900 hover:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
          open ? 'border-orange-500' : 'border-gray-300'
        }`}
      >
        {value || <span className="text-gray-400">{placeholder}</span>}
      </div>

      {open && (
        <ul className="mt-1 bg-white border border-gray-300 rounded-md shadow-md max-h-48 overflow-y-auto z-10 relative">
          {options.map((option, i) => (
            <li key={i} className={`px-4 py-2 text-sm hover:bg-orange-100 cursor-pointer ${
                value === option ? 'bg-orange-50 font-semibold text-orange-600' : ''
              }`}
              onClick={() => {
                onChange(option)
                setOpen(false)
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
