
import { createTheme, useMediaQuery } from "@mui/material"
import { grey } from "@mui/material/colors"

// Adds isMobile to theme
declare module '@mui/material/styles' {
  interface Theme {
    isMobile: () => boolean
  }
  interface ThemeOptions {
    isMobile?: () => boolean
  }
}

const theme = () => {
  const defaultTheme = createTheme()
  const isMobile = () => useMediaQuery(defaultTheme.breakpoints.down('md'), { defaultMatches: true })

  return createTheme({
    palette: {
      background: {
        default: grey[200],
      },
    },
    isMobile,
  }) 
}

export default theme