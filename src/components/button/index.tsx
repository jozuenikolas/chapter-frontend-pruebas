import React, { ChangeEvent } from 'react';
import './index.css'

interface ButtonProps {
  setAttribute(value: any): void
}

export const Button: React.FC<ButtonProps> = ({ setAttribute }) => {
  const handleOnChange = () => {
    setAttribute(true)
  }

  // const value = (event: ChangeEvent<HTMLInputElement>) => {
  //   console.log(event?.target.value)
  //   api.get(`/marvel-characters?idAuthor=65&title=${id}`)
   

  // }
  return (
    <div className="size" >
      <input type="text" placeholder='buscar'  />
      <button className="size-button" onClick={handleOnChange}>Nuevo</button>
    </div>
  )
}

export default Button;
