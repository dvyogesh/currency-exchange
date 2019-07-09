import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default class FormDialog extends React.Component {
  render () {
    const {
      children, handleClose, openState, submitBtnText, nextStep, dialogContentText,
      dialogHeadding, maxWidth
    } = this.props
    return (
      <div>
        <Dialog
          open={openState}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth={maxWidth}
        >
          <DialogTitle id="form-dialog-title">{dialogHeadding}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {dialogContentText}
            </DialogContentText>
            {children}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => handleClose(nextStep)} color="primary">
              {submitBtnText}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

FormDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  openState: PropTypes.bool,
  submitBtnText: PropTypes.string,
  dialogHeadding: PropTypes.string,
  nextStep: PropTypes.bool,
  disableBackdropClick: PropTypes.bool,
  dialogContentText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired

}
FormDialog.defaultProps = {
  openState: false,
  nextStep: false,
  submitBtnText: 'Save',
  dialogContentText: '',
  dialogHeadding: '',
  disableBackdropClick: false
}
