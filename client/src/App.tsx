import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import AppRoutes from "routes";
import theme from "style/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
}
