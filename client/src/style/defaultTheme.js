import { createTheme } from "@mui/material"
import { grey } from "@mui/material/colors"

const defaultTheme = createTheme({
  palette: {
    background: {
      default: grey[200]
    }
  }
}) 

export default defaultTheme