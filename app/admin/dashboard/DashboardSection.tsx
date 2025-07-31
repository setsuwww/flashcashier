import React from 'react'

interface SectionParentProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
}

export default function SectionParent({ title, subtitle, children }: SectionParentProps) {
  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow">
      <div className='mb-6'>
        <h2 className="text-xl text-gray-900 font-bold">{title}</h2>
        <p className='text-sm text-gray-500 font-semibold'>{subtitle}</p>
      </div>
      {children}
    </div>
  )
}
