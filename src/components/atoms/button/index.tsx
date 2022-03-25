import { FC } from "react"
import './index.css'

export interface ButtonProps {
  id?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  width?: string
  onclick?(): void
}

export const Button: FC<ButtonProps> = ({ id, variant = 'primary', size = 'md', width, onclick, children }) => {

  return <button id={id} className={`button button-${variant} button-${size} `} style={{width}} onClick={onclick}>
    {children}
  </button>

}