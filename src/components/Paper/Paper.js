import React from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles'
//import Typography from '@material-ui/core/Typography';
const Style = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

class Papersheet extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render(){
    const { classes, children} = this.props
    return (
        <Paper className={classes.root}>
          {children}
        </Paper>
    );
  }
}
export default withStyles(Style)(Papersheet)
// export default function PaperSheet({...props}) {
//   const classes = useStyles();
//
//
// }
