import { Button } from "../../atoms/button"
import hulk from '../../../assets/img/hulk.png'
import './index.css'
import { FC } from "react"
import { useDeleteHeroeMutation } from "../../../services"
import { useAppDispatch } from "../../../hooks"
import { setSelectdHeroe } from "../../../store/reducers/app"
import { Heroe } from "../../../interface"

export interface CardProps {
  heroe: Heroe
}

export const Card: FC<CardProps> = ({ heroe }) => {

  const dispatch = useAppDispatch()
  const [deleteHeroe] = useDeleteHeroeMutation()

  const handleOnEdit = () => {
    dispatch(setSelectdHeroe(heroe))

  }

  const handleOnDelete = () => {
    const result = deleteHeroe(heroe._id)
    console.log(result)
  }


  return <div className='card'>
    <img width='100%' src={heroe.image} alt={heroe.title} />
    <div className='card-footer'>
      <div className='heroe-name'>
        {heroe.title}
      </div>
      <div className='buttons-container'>
        <Button variant='secondary' width='120px' onclick={handleOnEdit}>
          <span className="material-icons">edit</span>
        </Button>
        <Button variant='secondary' width='120px' onclick={handleOnDelete}>
          <span className="material-icons">delete</span>
        </Button>
      </div>
    </div>
  </div>
}