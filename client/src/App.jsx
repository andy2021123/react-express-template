import { ThemeProvider } from '@mui/material/styles'
import AppRoutes from './routes'
import { CssBaseline } from "@mui/material"
import theme from './style/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  )
}