import { Button } from '../../atoms/Button'
import React, { useState } from 'react'
import { CardStyles } from './styles'
import EditIcon from '../../../shared/icons/Edit'
import DeleteIcon from '../../../shared/icons/Delete'

interface CardProps {
  title: string
  imgUrl: string
  id: string
}

const Card: React.FC<CardProps> = ({ title, imgUrl, id }) => {
  const [showCard, setShowCard] = useState(true)

  const removeHero = async () => {
    try {
      const data = await fetch(
        `https://bp-marvel-api.herokuapp.com/marvel-characters/${id}?idAuthor=62`,
        {
          method: 'DELETE',
        }
      )
      const json = await data.json()
      console.log(json)
      console.log('deleted succesfully')
      setShowCard(false)
    } catch (error) {
      console.log(error)
    }
  }

  return showCard ? (
    <CardStyles>
      <div className="image_container">
        {imgUrl && <img src={imgUrl || ''} alt="" />}
      </div>
      <div className="bottom_container">
        <div className="name">{title || ''}</div>
        <div className="button_contaienr">
          <Button secondary icon={<EditIcon fill="#EB2433" />} />
          <Button
            onClick={() => {
              removeHero()
            }}
            secondary
            icon={<DeleteIcon fill="#EB2433" />}
          />
        </div>
      </div>
    </CardStyles>
  ) : (
    <></>
  )
}

export default Card
