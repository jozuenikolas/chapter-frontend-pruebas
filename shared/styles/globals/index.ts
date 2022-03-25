import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
    }

    html{
        position: relative;
    }
    
    html, body{
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.colors.background};
    }

    body{
        padding: 16px;
        width: calc(100% - 16px);
    }
    .main_container {
        margin: 0 auto;
        color: #5c5c5c;
        max-width:500px;
        display: flex;
        flex-direction: column;
    }

    .title{
        margin-bottom: 16px;
    }

    .input_container{
        display: flex;
        max-width: 475px;
    }

    .input_spacer{
       max-width: 94%;
    }
`
