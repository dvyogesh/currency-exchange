import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import EuroSymbol from '@material-ui/icons/EuroSymbol';
import withStyles from '@material-ui/core/styles/withStyles'
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const Style = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color:'#fff',
    fontSize: 24
  },
  maxHeight: {
    maxHeight: 60,
    minHeight: 60
  },
  linkColor: {
    color:'#fff'
  }
})
class Header extends React.Component {

  render(){
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.maxHeight}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
              <EuroSymbol />
            </IconButton>
             <Typography variant="display2" className={classes.title}>
              Currency Exchange
            </Typography>

              <nav>
                <Button color="inherit">
                  <NavLink exact to="/" activeClassName="active" className={classes.linkColor}>
                      Home
                  </NavLink>{' '}
                </Button>
                <Button color="inherit">
                 <NavLink exact to="/CurrencyExchange" activeClassName="active" className={classes.linkColor}>
                    Currency Exchange
                  </NavLink>
                </Button>
                <Button color="inherit">
                  <NavLink exact to="/about" activeClassName="active" className={classes.linkColor}>
                    About
                  </NavLink>
                </Button>
              </nav>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
  export default withStyles(Style)(Header)
