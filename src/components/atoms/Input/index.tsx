import './index.css'
import IInput from './interface'

function Input(
  { value, handleChange }: IInput
) {
  return (
    <div className='input'>
      <input value={value} onChange={(e: any) => handleChange(e.target.value)} />
    </div>

  )
}

export default Input
