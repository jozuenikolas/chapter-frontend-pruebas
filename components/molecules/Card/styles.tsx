import styled from 'styled-components'

export const CardStyles = styled.div`
  max-width: 475px;

  .bottom_container {
    background-color: #151515;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom-right-radius: 30px;
  }

  .image_container {
    height: 300px;
    background-color: black;
    margin-top: 20px;
    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .name {
    margin: 10px;
    color: #fff;
    font-weight: bold;
  }

  .button_contaienr {
    display: flex;
    gap: 10px;
    padding-bottom: 8px;

    > div {
      > button {
        width: 120px;
      }
    }
  }
`
