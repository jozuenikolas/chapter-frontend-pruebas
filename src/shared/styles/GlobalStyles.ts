import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: content-box;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: #4A4A50 #f1f1f1;
  }

  @font-face {
    font-family: 'prelo-book';
    src: url('/fonts/prelo-book/Prelo-Book.ttf');
    font-style: normal;
    font-weight: 500;
  }

  html {
    --darkGrayishBlue50: #F9FAFC;
    --info500: #2F7ABF;
    --grayScale500: #2C2C30;
    --grayScale400: #6E6E73;

    --preloslab-book: preloslab-book;
    --preloslab-semibold: preloslab-semibold;
    --prelo-medium: prelo-medium;
    --prelo-book: prelo-book;
    --prelo-bold: prelo-bold;
    --prelo-semibold: prelo-semibold;

    color: var(--grayScale500);
    font-family: prelo-medium, Helvetica, Arial, Sans, sans-serif;
    font-size: 16px;
    scroll-behavior: smooth;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    letter-spacing: 0;
    display: block;
    font-weight: normal !important;
    cursor: inherit;
  }

  h1 {
    font-size: 40px;
    line-height: 48px;
  }

  h2 {
    font-size: 32px;
    line-height: 38px;
  }

  h3 {
    font-size: 28px;
    line-height: 34px;
  }

  h4 {
    font-size: 24px;
    line-height: 29px;
  }

  h5 {
    font-size: 20px;
    line-height: 24px;
  }

  h6 {
    font-size: 18px;
    line-height: 22px;
  }

  h1, h2, h3, h4 {
    font-family: preloslab-book, Helvetica, Arial, Sans, sans-serif;
  }

  strong, b {
    font-family: prelo-bold, Helvetica, Arial, Sans, sans-serif;
  }

  /*MATERIAL ICONS*/
  .material-icons {
    font-family: 'Material Icons', serif;
    font-weight: normal;
    font-style: normal;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
  }

  .material-icons.outlined {
    font-family: 'Material Icons Outlined', serif;
  }

  .material-icons.round {
    font-family: 'Material Icons Round', serif;
  }

  .material-icons.sharp {
    font-family: 'Material Icons Sharp', serif;
  }

  .material-icons.two-tone {
    font-family: 'Material Icons Two Tone', serif;
  }

  *::-webkit-scrollbar {
    width: 6px;
    height: 4px;
  }

  *::-webkit-scrollbar-track {
    background-color: #d8d8d8;
    border-radius: 4px;
  }

  *::-webkit-scrollbar-thumb {
    background: #7e7e7e;
    border-radius: 4px;
  }

  /* animation bounce */
  .animation-bounce {
    animation: bounce 1.2s ease-out;
  }

  @keyframes bounce {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    5% {
      transform: translateY(-100%);
      opacity: 0;
    }
    15% {
      transform: translateY(0);
      padding-bottom: 5px;
    }
    30% {
      transform: translateY(-50%);
    }
    40% {
      transform: translateY(0%);
      padding-bottom: 6px;
    }
    50% {
      transform: translateY(-30%);
    }
    70% {
      transform: translateY(0%);
      padding-bottom: 7px;
    }
    80% {
      transform: translateY(-15%);
    }
    90% {
      transform: translateY(0%);
      padding-bottom: 8px;
    }
    95% {
      transform: translateY(-7%);
    }
    97% {
      transform: translateY(0%);
      padding-bottom: 9px;
    }
    99% {
      transform: translateY(-3%);
    }
    100% {
      transform: translateY(0);
      padding-bottom: 9px;
      opacity: 1;
    }
  }

  /* fadeIn */
  .fadeIn-animation {
    animation: fadein 2s;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* fadeUp animation */
  .fadeUp-animation {
    animation: fadeUp 1.5s;
  }

  @keyframes fadeUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`
