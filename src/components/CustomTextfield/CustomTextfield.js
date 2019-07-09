import React, {Component, Fragment} from 'react'
import {object, string, func, bool, number} from 'prop-types'
import {TextField} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import Style from './style'

class CustomTextField extends Component {
  static propTypes = {
    classes: object.isRequired,
    //value: string.isRequired,
    id: string.isRequired,
    label: string.isRequired,
    onChange: func.isRequired,
    placeholder: string,
    type: string,
    onBlur: func,
    disabled: bool,
    required: bool,
    error: bool,
    errorMsg: string,
    multiline: bool,
    rows: number
  }

  static defaultProps = {
    placeholder: '',
    type: 'text',
    onBlur: () => {},
    disabled: false,
    required: false,
    error: false,
    errorMsg: 'This field is mandatory'
  }

  render () {
    const {
      classes, value, id, label, onChange, placeholder, type = 'text', onBlur, disabled, required, error,
      errorMsg, multiline = false, rows = 3
    } = this.props
    return (
      <Fragment>
        <TextField
          className={classes.textFieldInputId}
          id={id}
          name={id}
          value={value}
          type={type}
          InputLabelProps={{classes: {root: classes.label, shrink: classes.focusedLabel}}}
          InputProps={{classes: {root: classes.label}}}
          fullWidth
          label={label}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          error={error}
          {...(multiline ? {multiline: true, rows} : {})}
        />
        {error && <span className={classes.errorText}>{errorMsg}</span>}
      </Fragment>
    )
  }
}

export default withStyles(Style)(CustomTextField)
