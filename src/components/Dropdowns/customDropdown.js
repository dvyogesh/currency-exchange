import React from 'react';
import PropTypes, { object, string, array, func } from 'prop-types';
import { MenuItem, Select, InputLabel } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import customDropdownStyle from './customDropdownStyle';

class customDropdown extends React.Component {
  static propTypes = {
    classes: object.isRequired,
    value: string.isRequired,
    id: string.isRequired,
    name: string.isRequired,
    inputLabel: string.isRequired,
    menuOptions: array.isRequired,
    handleOnChange: func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      classes,
      value,
      id,
      name,
      menuOptions,
      handleOnChange,
      inputLabel,
      disabled
    } = this.props;
    return (
      <div className={classes.formControl}>
        <InputLabel classes={{ root: classes.label }} htmlFor={id}>
          {inputLabel}
        </InputLabel>
        <Select
          classes={{ select: classes.select }}
          MenuProps={{ className: classes.selectMenu }}
          inputProps={{ name, id, classes: { root: classes.inputProps } }}
          value={value}
          disabled={disabled}
          onChange={handleOnChange}
          fullWidth
        >
          {menuOptions &&
            menuOptions.map(option => {
              const displayName =
                option.name !== undefined ? option.name : option;
              const displayValue =
                option.value !== undefined ? option.value : option;
              return (
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected
                  }}
                  value={displayValue}
                  key={displayName}
                >
                  {displayName}
                </MenuItem>
              );
            })}
        </Select>
      </div>
    );
  }
}

customDropdown.propTypes = {
  disabled: PropTypes.bool
};

customDropdown.defaultProps = {
  disabled: false
};
export default withStyles(customDropdownStyle)(customDropdown);
