import { AppBar, Box, Button, Container, Divider, Drawer, IconButton, MenuItem, Toolbar, Typography, useTheme } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Fragment, useState } from "react"
import { Link, Outlet } from "react-router-dom"

const title = 'React Express Template'
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

function MobileToolbar() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  return (
    <Toolbar disableGutters sx={{ px: 2 }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ flexGrow: 0 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} anchor="top" onClose={toggleDrawer(false)}>
        <Box>
          <Toolbar disableGutters sx={{ px: 2 }}>
            <Typography variant="h4" color="primary">Pages</Typography>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} />
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <Box sx={{ px: 2, pb: 2 }}>
            {pages.map(({ name, url }, index) => (
              <Fragment key={url}>
                <MenuItem onClick={toggleDrawer(false)} to={url} component={Link}>{name}</MenuItem>
                {index < pages.length - 1 && <Divider />}
              </Fragment>
            ))}
          </Box>
        </Box>
      </Drawer>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} />
      <Typography variant="h4" sx={{ flexGrow: 2, textAlign: 'center' }}>{title}</Typography>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1.3 }} />
    </Toolbar>
  )
}

function DesktopToolbar() {
  return (
    <Toolbar disableGutters sx={{ px: 2 }}>
      <Typography variant="h4" sx={{ flexGrow: 1 }}>{title}</Typography>
      <Box sx={{ flexGrow: 0 }}>
        {pages.map(({ name, url }) => (
          <Button
            key={url}
            component={Link}
            to={url}
            color="inherit"
            sx={{ px: 2 }}
          >
            {name}
          </Button>
        ))}
      </Box>
    </Toolbar>
  )
}

export default function Layout() {
  const { isMobile } = useTheme()

  return (
    <Box>
      <Box component="nav">
        <AppBar>
          <Container disableGutters maxWidth="lg">
            {isMobile() ? (
              <MobileToolbar />
            ) : (
              <DesktopToolbar />
            )}
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
