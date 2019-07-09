import React from 'react'
import CurrencyExchangeStyle from './CurrencyExchangeStyle'
import {Grid} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import CustomTextField from '../../components/CustomTextfield/CustomTextfield'

function CurrencyExchangeCardHeader ({classes, USDValue, handleChange}) {
  return (
    <React.Fragment>
      <p>USD - <i>United States Doller</i></p>
      <Grid container>
        <Grid item xs={6}>
          <h3><b>USD</b></h3>
        </Grid>
        <Grid item xs={6}>
        <CustomTextField
            className={classes.input}
            type="number"
            id="inputIds"
            value={USDValue}
            label="Key"
            onChange={handleChange('USDValue')}
          />
        </Grid>
      </Grid>
    </React.Fragment>
    )
}

export default withStyles(CurrencyExchangeStyle)(CurrencyExchangeCardHeader)
