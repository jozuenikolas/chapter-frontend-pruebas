import { useState } from "react"
import { useAppDispatch } from "../../../hooks"
import { setFormOpen, setName } from "../../../store/reducers/app"
import { Button } from "../../atoms/button"
import { Input } from "../../atoms/input"
import './index.css'

export const Searcher = () => {

  const dispatch = useAppDispatch()

  const handelOnchange = (value: string) => {
    dispatch(setName(value))
  }

  const handleOnClick = () => {
    dispatch(setFormOpen(true))
  }

  return <div className='searcher'>
    <div className='searcher-input'>
      <Input placeholder='Buscar' onChange={handelOnchange}>  </Input>
    </div>
    <Button onclick={handleOnClick}>
      <span className="material-icons">add</span>Nuevo
    </Button>
  </div>
}

