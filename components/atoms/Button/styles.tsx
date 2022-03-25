import styled from 'styled-components'
import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactElement
  secondary?: boolean
}

export const Button = styled.div<ButtonProps>`
  button {
    border: none;
    appearance: none;
    background-color: ${({ theme, secondary }) =>
      secondary ? theme.colors.secondary : theme.colors.primary};
    padding: 10px 16px;
    border-radius: 4px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  .text {
    margin-left: 4px;
  }

  :active {
    opacity: 0.7;
  }
`
