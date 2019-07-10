const styles = theme => ({
  textFieldInputId: {
    // background: 'rgba(230,231,232,0.38)',
    marginTop: 'auto',
    paddingTop: 2
  },
  label: {
    paddingLeft: 10,
    fontSize: 14,
    left: 5,
    [theme.breakpoints.down('xs')]: {
      fontSize: 15
    }
  },
  focusedLabel: {
    paddingLeft: 10,
    paddingTop: 10
  }
});

export default styles;
