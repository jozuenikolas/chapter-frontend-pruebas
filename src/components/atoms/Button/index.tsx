import './index.css'
import IButton from './interface'

function Card(
  { icon, text, handleClick }: IButton
) {
  return (
    <div className={`button ${text ? 'red' : ''}`}>
      <button onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

export default Card