import { createTheme } from "@mui/material"
import { grey } from "@mui/material/colors"

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