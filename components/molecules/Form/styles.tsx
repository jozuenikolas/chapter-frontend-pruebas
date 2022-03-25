import styled from 'styled-components'

export const FormStyles = styled.div`
  background-color: #fff;
  padding: 22px;
  margin-top: 20px;
  max-width: 435px;
  > * {
    width: 95%;
    margin-top: 22px;
  }

  .buttons {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 10px;
    > * {
      > * {
        width: 125px;
      }
    }
  }
`
