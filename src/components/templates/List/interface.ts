import ICharacter from "components/templates/App/interface"

export default interface IList {
  characters: Array<ICharacter>,
  handleEdit: (id: String) => void,
  handleDelete: (id: String) => void
}
