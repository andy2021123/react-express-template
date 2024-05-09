import { AppBar, Box, Button, Container, MenuItem, Toolbar, Typography } from "@mui/material"
import { Link, Outlet } from "react-router-dom"

const pages = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Data',
    url: '/data',
  },
  {
    name: 'Form',
    url: '/form',
  },
]

function NavBar() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      {pages.map(({ name, url }) => (
        <Button
          key={name}
          component={Link}
          to={url}
          color="inherit"
          sx={{ px: 2 }}
        >
          {name}
        </Button>
      ))}
    </Box>
  )
}

export default function Layout() {
  return (
    <Box>
      <Box component="nav">
        <AppBar>
          <Container disableGutters maxWidth="lg">
            <Toolbar>
              <Typography variant="h4" sx={{ flexGrow: 1 }}>React Express Template</Typography>
              <NavBar/>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Box component="main">
        <Toolbar />
        <Container disableGutters maxWidth="lg" sx={{ p: 2 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}
