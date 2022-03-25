import ICharacter from "components/templates/App/interface"

export default interface IForm {
  character: ICharacter,
  handleSave: () => void,
  handleCancel: () => void
}
