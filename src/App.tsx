import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globals'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>oi</div>
    </ThemeProvider>
  )
}
