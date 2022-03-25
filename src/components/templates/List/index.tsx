import axios from 'axios'
import { useState, useEffect } from 'react'

import { Card } from 'components/atoms'

import IList from './interface'

function List(
  { characters, filter, handleEdit, handleDelete }: any
) {
  return (
    <div className='list'>
      {
        characters &&
        characters
          .filter((character: any) => character.title.indexOf(filter) > -1)
          .map((character: any) => {
            const { _id, title, image } = character
            return <Card {...{
              title,
              image,
              handleEdit: () => handleEdit(_id),
              handleDelete: () => handleDelete(_id)
            }} />
          })
      }
    </div>
  )
}

export default List
