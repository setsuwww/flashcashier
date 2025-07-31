'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import SearchInput from '@/components/ui/Search'

export default function ProductHeader() {
  const [search, setSearch] = useState('')

  return (
    <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 gap-4 sm:gap-0">
      <h1 className='text-2xl text-gray-800 tracking-tight font-bold'>Halaman Produk</h1>

      <div className="flex items-center gap-2">
        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />

        <Button onClick={() => console.log('Detail clicked')} variant="secondary" size="sm">
          Detail
        </Button>

        <Button onClick={() => console.log('Filter clicked')} variant="secondary" size="sm">
          Filter
        </Button>

        <Button onClick={() => console.log('Tambah Produk clicked')} variant="primary" size="sm">
          Tambah Produk
        </Button>
      </div>
    </div>
  )
}
