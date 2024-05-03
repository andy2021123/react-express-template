import { Container } from "@mui/material"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <Container disableGutters maxWidth="lg" sx={{ p: 2 }}>
      <Outlet />
    </Container>
  )
}
