'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import SearchInput from '@/components/ui/Search'
import { useRouter } from 'next/navigation';

export default function ProductHeader() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 gap-4 sm:gap-0">
      <h1 className='text-2xl text-gray-800 tracking-tight font-bold'>Halaman Produk</h1>

      <div className="flex items-center gap-2">
        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />

        <Button onClick={() => console.log('Detail clicked')} variant="secondary" size="sm">
          Details
        </Button>

        <Button onClick={() => console.log('Filter clicked')} variant="secondary" size="sm">
          Filters
        </Button>

        <Button onClick={() => router.push('product/create') } variant="primary" size="sm">
          New Product
        </Button>
      </div>
    </div>
  )
}
