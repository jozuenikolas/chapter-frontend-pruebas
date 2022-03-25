import styled from 'styled-components'

export const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0 ;
  margin-top: 16px;
  /* margin: 0.3rem; */
  border: 1px solid #efefef;
  border-radius: 0.2rem;
  min-width: 160px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
  height: 420px;

    .name {
        color: white;
        margin-top: 10px;
    }

    .button-secundary {
        background-color: white;
        border: none;
        border-radius: 4px;
        color: white;
        padding: 14px 30px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        margin: 4px 2px;
        cursor: pointer;
        height: 16px;
    }
`