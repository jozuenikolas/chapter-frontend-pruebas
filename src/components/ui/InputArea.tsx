import { useState } from 'react'

interface InputAreaType {
  text: string
  placeholder?: string
  initialValue?: string
  onChange: (value: string) => void
}

const InputArea: React.FC<InputAreaType> = ({
  text,
  placeholder = '',
  initialValue = '',
  onChange,
}) => {
  const [value, setValue] = useState(initialValue ?? '')

  const handleChange = (e: string) => {
    setValue(e)
    onChange(e)
  }

  return (
    <div className="my-3 sm:my-6">
      <div className="flex flex-col sm:items-center sm:space-x-2 sm:flex-row">
        <p className="w-20 text-left">{text}:</p>
        <textarea
          aria-label={text}
          placeholder={placeholder}
          className="w-full p-1 rounded-sm border-[1px] border-gray focus:outline-btn resize-none"
          value={value}
          rows={3}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default InputArea
