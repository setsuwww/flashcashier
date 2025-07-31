interface TextareaProps {
  label: string;
  name: string
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  error?: string;
  disabled?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, value, onChange, placeholder, rows = 4, error, disabled }) => {
  return (
    <div className="w-full max-w-xs">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} rows={rows} disabled={disabled}
        className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${disabled ? 'bg-gray-100' : 'bg-white'} ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Textarea;
