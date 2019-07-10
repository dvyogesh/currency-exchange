import React from 'react';
import CurrencyExchangeStyle from './CurrencyExchangeStyle';
import { Cancel } from '@material-ui/icons';
import { Grid } from '@material-ui/core';
import Paper from '../../components/Paper/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

function CurrencyList({ classes, currencyList, USDValue, removeCurrencyList }) {
  return (
    <ul className={classes.listUnstyled}>
      {currencyList.map((currency, currencyIndex) => (
        <li
          className={classes.listUnstyled}
          key={`currencyList_${currencyIndex}`}
        >
          <Paper>
            <div className={classes.paper}>
              <Grid container>
                <Grid item xs={6}>
                  <p>{currency.shortName}</p>
                </Grid>
                <Grid item xs={6}>
                  <p>{(currency.oneUnitInUSD * USDValue).toFixed(4)}</p>
                </Grid>
              </Grid>
              <p>
                {currency.shortName} - <i>{currency.fullName}</i>
              </p>
              <p>
                1 USD ={' '}
                <i>
                  {currency.shortName} {currency.oneUnitInUSD.toFixed(4)}
                </i>
              </p>
              <Cancel
                className={classes.removeBtn}
                onClick={() => removeCurrencyList(currencyIndex)}
              />
            </div>
          </Paper>
        </li>
      ))}
    </ul>
  );
}

export default withStyles(CurrencyExchangeStyle)(CurrencyList);
