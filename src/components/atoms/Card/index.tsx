import Button from '../Button'

import './index.css'
import { ICard } from "./interface"

function Card(
  { title, image, handleEdit, handleDelete }: ICard
) {
  return (
    <div className='card'>
      <div className='card-img'>
        <img alt={title} src={image} />
      </div>
      <div className='card-title'>
        {title}
      </div>
      <div className='card-button-container'>
        <div className='card-button mr'><Button icon='edit' handleClick={handleEdit} /></div>
        <div className='card-button ml'><Button icon='delete' handleClick={handleDelete} /></div>
      </div>
      
    </div>
  )
}

export default Card