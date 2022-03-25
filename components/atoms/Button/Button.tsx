import React from 'react'
import { Button as StyledButton, ButtonProps } from './styles'

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  secondary,
  ...props
}) => {
  return (
    <StyledButton secondary={secondary}>
      <button {...props}>
        {icon && <div className="icon">{icon}</div>}
        {children && <div className="text">{children}</div>}
      </button>
    </StyledButton>
  )
}

export default Button
