import React from 'react';
import { Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { cloneDeep, find } from 'lodash';
import { toast } from 'react-toastify';
import CurrencyExchangeStyle from './CurrencyExchangeStyle';
import HeaderCard from '../../components/Cards/HeaderCard';
import Constants from './CurrencyExchangeConstants';
import Divider from '@material-ui/core/Divider';
import CurrencyList from './CurrencyList';
import CurrencyExchangeCardFooter from './CurrencyExchangeCardFooter';
import CurrencyExchangeCardHeader from './CurrencyExchangeCardHeader';
import { api } from '../../api';

class CurrencyExchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyList: cloneDeep(Constants.currencyList),
      //USDValues: props.USDValues, //cloneDeep(Constants[props.selectedTech]),
      dropDownValue: 'INR',
      USDValue: 1.0,
      currencyPrices: {}
    };
  }

  componentDidMount() {
    this.feetchCurrencyData();
  }

  feetchCurrencyData = () => {
    api.featchCurrencyData
      .currencyApi()
      .then(res => {
        this.setState({ currencyPrices: res.rates });
        this.pushOneCuuency();
      })
      .catch(error => {
        this.setState({ loading: false });
        toast.error(`${error}`);
      });
    //
    // *******  Axios Example ********

    // use import axios from 'axios'
    //axios.get(`https://api.exchangeratesapi.io/latest?base=USD`)
    //   .then((response) => {
    //     if (response.data) {
    //       this.setState({loading: false, currencyPrices: response.data.rates})
    //       console.log('this.state.currencyPrices');
    //       console.log(this.state.currencyPrices);
    //     } else {
    //       this.setState({loading: false})
    //     //  toast.error(`${response.data.status ? response.data.status : response.data.error}`)
    //     }
    //   })
    //   .catch((error) => {
    //     this.setState({loading: false})
    //     toast.error(`${error}`)
    //   });
  };

  pushOneCuuency = () => {
    const { currencyList, currencyPrices, dropDownValue } = this.state;
    currencyList.push({
      fullName: dropDownValue,
      shortName: dropDownValue,
      oneUnitInUSD: currencyPrices[dropDownValue]
    });
    this.setState({ currencyList });
  };

  handleChange = type => event => {
    this.setState({ [type]: event.target.value });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  handleAddCurrency = () => {
    const { currencyList, currencyPrices, dropDownValue } = this.state;
    if (dropDownValue && this.checkAddedCurrcy()) {
      currencyList.push({
        ...currencyList,
        fullName:
          Constants.countryFullName[dropDownValue] || 'One Nation Currency',
        shortName: dropDownValue,
        oneUnitInUSD: currencyPrices[dropDownValue]
      });
      this.setState({ currencyList });
    } else {
      toast.error('select proper Cuurency');
    }
  };

  removeCurrencyList = index => {
    const { currencyList } = this.state;
    currencyList.splice(index, 1);
    this.setState({ currencyList });
  };

  checkAddedCurrcy = () => {
    const { currencyList, dropDownValue } = this.state;
    const check = find(currencyList, { shortName: dropDownValue });
    if (check) {
      toast.error('currency exist');
      return false;
    } else {
      return true;
    }
  };

  render() {
    const {
      dropDownValue,
      USDValue,
      currencyList,
      currencyPrices
    } = this.state;
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12} md={6} style={{ margin: '0 auto' }}>
          <HeaderCard
            headerColor="white"
            cardTitle={
              <CurrencyExchangeCardHeader
                USDValue={USDValue}
                handleChange={this.handleChange}
              />
            }
            content={
              <div className={classes.currencyListMain}>
                <Divider />
                <CurrencyList
                  USDValue={USDValue}
                  currencyList={currencyList}
                  removeCurrencyList={this.removeCurrencyList}
                />
              </div>
            }
            footer={
              <CurrencyExchangeCardFooter
                dropDownValue={dropDownValue}
                handleAddCurrency={this.handleAddCurrency}
                currencyPrices={currencyPrices}
                handleChange={this.handleChange}
              />
            }
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(CurrencyExchangeStyle)(CurrencyExchange);
