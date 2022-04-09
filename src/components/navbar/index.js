import * as React from 'react'
import { Link } from 'gatsby'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import WebIcon from '@mui/icons-material/Web'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import TagIcon from '@mui/icons-material/Tag'
import MoreIcon from '@mui/icons-material/MoreVert'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

export default function Navbar({ siteTitle }) {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to={'/about'}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="navigate to about page"
            color="inherit"
          >
            <Badge badgeContent={0} color="error">
              <ContactPageIcon />
            </Badge>
          </IconButton>
          <p>About</p>
        </MenuItem>
      </Link>

      <Link to={'/contact'}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="navigate to contact page"
            color="inherit"
          >
            <Badge badgeContent={0} color="error">
              <WebIcon />
            </Badge>
          </IconButton>
          <p>Contact</p>
        </MenuItem>
      </Link>

      <Link to={'/tags'}>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="navigate to tags page"
            color="inherit"
          >
            <Badge badgeContent={0} color="error">
              <TagIcon />
            </Badge>
          </IconButton>
          <p>Tags</p>
        </MenuItem>
      </Link>
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Link
              to={'/'}
              style={{
                color: 'white',
                textDecoration: 'none',
                boxShadow: 'none',
              }}
            >
              {' '}
              {siteTitle}
            </Link>
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link
              to={'/about'}
              style={{
                color: 'white',
                textDecoration: 'none',
                boxShadow: 'none',
              }}
            >
              <IconButton
                size="large"
                aria-label="navigate to about page"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <ContactPageIcon />
                </Badge>
              </IconButton>
            </Link>

            <Link
              to={'/contact'}
              style={{
                color: 'white',
                textDecoration: 'none',
                boxShadow: 'none',
              }}
            >
              <IconButton
                size="large"
                aria-label="navigate to contact page"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <WebIcon />
                </Badge>
              </IconButton>
            </Link>

            <Link
              to={'/tags'}
              style={{
                color: 'white',
                textDecoration: 'none',
                boxShadow: 'none',
              }}
            >
              <IconButton
                size="large"
                aria-label="navigate to tags page"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <TagIcon />
                </Badge>
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  )
}
