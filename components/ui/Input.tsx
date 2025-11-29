interface InputProps {
  label: string;
  type?: string;
  name?: string
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  accept?: string;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', name, value, onChange, placeholder, error, disabled, className = '', accept }) => {
  const isFileInput = type === 'file'

  return (
    <div className="w-full mb-4">
      <label className="block text-sm font-medium text-gray-800 mb-1">{label}</label>

      {isFileInput ? (
        <div>
          <div className="border border-gray-300 rounded-md p-2">
            <label className="inline-block bg-white border border-gray-300 hover:bg-gray-100 text-sm font-semibold px-3 py-1 rounded-md cursor-pointer transition">
              Pilih Gambar
              <input type="file" accept={accept} onChange={onChange} disabled={disabled} className="hidden" />
            </label>
          </div>
        </div>
      ) : (
        <input type={type} value={value} name={name} accept={accept} onChange={onChange} placeholder={placeholder} disabled={disabled}
          className={`w-full mt-1 px-3 py-2 text-sm text-gray-900 border border-gray-200 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 ${disabled
            ? 'bg-gray-100 cursor-not-allowed text-gray-500'
            : 'bg-white'
  }        ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'} ${className}`}
          />
      )}

      {error && (
        <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V5z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}

export default Input
