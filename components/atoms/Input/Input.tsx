import React, { InputHTMLAttributes } from 'react'
import { InputStyles } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <InputStyles>
      <label>{label}</label>
      <input {...props} />
    </InputStyles>
  )
}

export default Input
