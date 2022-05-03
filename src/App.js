import { createGlobalStyle, ThemeProvider } from 'styled-components'
import RootRoutes from './components/organims/RootRoutes';
import pxToRem from './utils/pxToRem';

const theme = {
    colors: {
        primary: '#FFE600',
        background: '#EEEEEE',
        darkGray: '#333333',
        primaryButton: '#3483FA',
        primaryButtonHover: '#2E61B3',
        textLightGray: '#999999',
        textDarkGray: '#666666',
    },
    baseSpace: 8,
    rems: pxToRem,
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  html, body {
    min-height: 100vh;
    background: ${theme.colors.background};
  }
`

const App = () => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <RootRoutes />
            </ThemeProvider>
        </>
    )
}

export default App