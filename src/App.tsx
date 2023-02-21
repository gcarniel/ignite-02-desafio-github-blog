import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { BlogProvider } from './contexts/Blog'
import { Router } from './Router'
import { GlobalStyle } from './styles/globals'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BlogProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BlogProvider>
    </ThemeProvider>
  )
}
