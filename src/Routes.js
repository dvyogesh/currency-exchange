import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import 'react-toastify/dist/ReactToastify.css';
import Style from './components/AppStyle'
import withStyles from '@material-ui/core/styles/withStyles'
//import  CurrencyExchange from './containers/CurrencyExchange/CurrencyExchange'
const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './components/Home'),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ './components/about/About'),
  loading() {
    return <div>Loading...</div>;
  }
});

const CurrencyExchange = Loadable({
  loader: () => import(/* webpackChunkName: 'CurrencyExchange' */ './containers/CurrencyExchange/CurrencyExchange'),
  loading() {
    return <div>Loading...</div>;
  }
});

const NotFound = () => {
  return(
    <h2>Route Not Found</h2>
  )
}

function Routes () {
  return (
    <Switch>
        <Route exact path="/" component={LoadableHome} />
        <Route path="/about" component={LoadableAbout} />
        <Route path="/CurrencyExchange" component={CurrencyExchange} />
        <Route path="/*" component={NotFound} />
      </Switch>
    )
}

export default withStyles(Style)(Routes)
