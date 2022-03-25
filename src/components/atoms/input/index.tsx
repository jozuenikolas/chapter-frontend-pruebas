import { FC, useState } from "react"
import './index.css'

export interface InputProps {
  label?: string
  initialValue?: string
  placeholder?: string
  width?: string
  onChange?(value:any): void
}

export const Input: FC<InputProps> = ({label, initialValue='' , placeholder, width, onChange = () => {} }) => {

  const [value, setValue] = useState(initialValue)

  const handleOnChange = (event: any) => {
    const val = event.target.value 
    setValue(val)
    onChange(val)
  }

  return (
    <div style={{width}}> 
      { label && 
        <label>{label}</label>
      }
      <input type='text' placeholder={placeholder} value={value} className='input'  onChange={handleOnChange}></input>
    </div>
  )
  
}