import React from 'react'
import { Link } from 'react-router-dom'
import {
  makeStyles,
  Grid,
  Toolbar,
  Typography,
  AppBar,
} from '@material-ui/core'
import Menu from '../components/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textDecoration: 'none',
    color: '#fff',
  },
  flexDivider: {
    flexGrow: 1,
  },
}))

const Layout = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: 'green' }} position="static">
        <Toolbar>
          <Menu />
          <Link to={'/'} className={classes.title}>
            <Typography variant="h6" color="inherit" className={classes.title}>
              Git exercisse
            </Typography>
          </Link>
          <span className={classes.flexDivider}></span>
        </Toolbar>
      </AppBar>
      <Grid container>{props.children}</Grid>
    </div>
  )
}

export default Layout
