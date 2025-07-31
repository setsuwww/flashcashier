import { Search } from 'lucide-react'

interface SearchInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}

export default function SearchInput({
  value,
  onChange,
  placeholder = 'Cari produk...',
  className = '',
}: SearchInputProps) {
  return (
    <div className={`flex items-center px-3 py-2 rounded-md bg-gray-200/60 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-300 ${className}`}>
      <Search className="w-4 h-4 text-gray-500" />

      <span className="mx-2 h-4 w-px bg-gray-400" />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent focus:outline-none text-sm text-gray-800 placeholder-gray-500 w-full"
      />
    </div>
  )
}
