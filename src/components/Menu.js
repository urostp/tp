import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  textColor: {
    color: '#353535',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  links: {
    textDecoration: 'none',
  },
  nested: {
    paddingLeft: theme.spacing(10),
    color: '#632d95',
  },
}))

const Menu = () => {
  const classes = useStyles()
  const [state, setState] = useState({
    left: false,
  })

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, left: open })
  }
  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
        onClick={toggleDrawer('left', true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        <div className={classes.list} role="presentation">
          <List>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <ListItem style={{ color: 'black' }} button key="">
                Home
              </ListItem>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/about">
              <ListItem style={{ color: 'black' }} button key="">
                About
              </ListItem>
            </Link>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  )
}

export default Menu
