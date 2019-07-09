import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import withStyles from '@material-ui/core/styles/withStyles'
import { makeStyles } from '@material-ui/core/styles';
const Style = theme =>({
  margin: {
    margin: theme.spacing(1),
  },
})

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

// const useStyles1 = makeStyles(theme => ({
//   success: {
//     backgroundColor: green[600],
//   },
//   error: {
//     backgroundColor: theme.palette.error.dark,
//   },
//   info: {
//     backgroundColor: theme.palette.primary.main,
//   },
//   warning: {
//     backgroundColor: amber[700],
//   },
//   icon: {
//     fontSize: 20,
//   },
//   iconVariant: {
//     opacity: 0.9,
//     marginRight: theme.spacing(1),
//   },
//   message: {
//     display: 'flex',
//     alignItems: 'center',
//   },
// }));

function MySnackbarContentWrapper(props) {
  const classes = {}
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

class CustomizedSnackbars extends React.Component   {
  constructor(props){
    super()
    this.state={
      open: false,
      setOpen: false
    }
  }
  //const [open, setOpen] = React.useState(false);

   handleClick = () =>{
    this.setState({open: true})
  }

   handleClose=(reason)=>(event) =>{
    if (reason === 'clickaway') {
      return;
    }

    this.setState({setOpen: true})
  }
render(){
  const {classes}=this.props
  const {open}=this.state
  return (
    <div>
      <Button variant="outlined" className={classes.margin} onClick={this.handleClick}>
        Open success snackbar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={this.this.handleClose}
      >
        <MySnackbarContentWrapper
          onClose={this.andleClose}
          variant="success"
          message="This is a success message!"
        />
      </Snackbar>

    </div>
  );
}

}
export default withStyles(Style)(CustomizedSnackbars)
