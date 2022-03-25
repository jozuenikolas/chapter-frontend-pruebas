export default interface IButton {
  icon: 'edit' | 'save' | 'delete' | 'cancel' | 'add',
  text?: string, 
  handleClick: () => void
}