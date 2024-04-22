import { ThemeProvider } from '@mui/material/styles'
import AppRoutes from './routes'
import { CssBaseline } from "@mui/material"
import defaultTheme from './style/defaultTheme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline/>
        <AppRoutes/>
    </ThemeProvider>
  )
}

export default App
