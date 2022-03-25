import styled from 'styled-components'

export const InputStyles = styled.div`
  width: max-content;
  flex: 1;
  input {
    border-radius: 4px;
    border: 1px solid #7f7f7f;
    height: 32px;
    outline-color: ${({ theme }) => theme.colors.primary};
    padding-left: 8px;
    width: 100%;
  }
`
