import { FC } from "react"
import './index.css'

export const Title: FC = ({children}) => {
  return <h1 className='title'>{children}</h1>

}