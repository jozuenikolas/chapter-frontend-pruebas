import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
    }
    breakpoints: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
      uhd: string
    }
  }
}
