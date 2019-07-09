import React from 'react'
import CurrencyExchangeStyle from './CurrencyExchangeStyle'
import {Grid, Button} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import Dropdown from '../../components/Dropdowns/customDropdown'

function CurrencyExchangeCardFooter ({classes, dropDownValue, handleAddCurrency, currencyPrices, handleChange}) {
  return (
    <Grid container>
          <Grid item xs={8}>
            <Dropdown
              id={'inputIds'}
              name="onBoardingComponent"
              inputLabel={'Select Cuurency To Add'}
              value={dropDownValue}
              handleOnChange={handleChange('dropDownValue')}
              menuOptions={Object.keys(currencyPrices)}
            />
          </Grid>
          <Grid item xs={4} className={classes.textAlign}>
            <Button
              className={classes.addmoreBtn}
              id={`addmore_btn_`}
              variant="outlined"
              color="primary"
              onClick={() => handleAddCurrency()}
            >
            + Add
            </Button>
          </Grid>
        </Grid>
    )
}

export default withStyles(CurrencyExchangeStyle)(CurrencyExchangeCardFooter)
