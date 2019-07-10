//import customSelect from './customSelectStyle'

const customSelectStyle = {
  //  ...customSelect,
  inputLabelWidth: {
    '&formControl': {
      width: '100%'
    }
  },
  formControl: {
    verticalAlign: 'baseline !important',
    background: 'rgba(230,231,232,0.38)',
    paddingTop: 2,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    lineHeight: 1.7,
    fontSize: 14
  },
  label: {
    paddingLeft: 10,
    fontSize: 12
  },
  inputProps: {
    padding: '0 10px'
  }
};

export default customSelectStyle;
