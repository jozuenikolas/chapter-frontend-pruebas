import Loading from './Loading'
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai'

interface CharacterButtonType {
  icon: 'add' | 'edit' | 'delete'
  onClick: () => void
  disabled?: boolean
  isLoading?: boolean
}

const CharacterButton: React.FC<CharacterButtonType> = ({
  icon,
  onClick,
  disabled = false,
  isLoading = false,
}) => {
  return (
    <button
      className="py-4 text-red-500 bg-gray-100 rounded-lg px-14 hover:bg-gray-300"
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      <Loading loading={isLoading} size={20} color="red" />
      {!isLoading && icon === 'add' && <AiOutlinePlus size={20} />}
      {!isLoading && icon === 'edit' && <AiOutlineEdit size={20} />}
      {!isLoading && icon === 'delete' && <AiOutlineDelete size={20} />}
    </button>
  )
}

export default CharacterButton
