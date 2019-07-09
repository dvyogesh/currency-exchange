import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// import Loadable from 'react-loadable';
import Helmet from 'react-helmet';
import withStyles from '@material-ui/core/styles/withStyles'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Style from './AppStyle'
import * as metadata from '../metadata';
import Header from './Header/Header'
import Routes from './Routes'

// const LoadableHome = Loadable({
//   loader: () => import(/* webpackChunkName: 'home' */ './Home'),
//   loading() {
//     return <div>Loading...</div>;
//   }
// });
//
// const LoadableAbout = Loadable({
//   loader: () => import(/* webpackChunkName: 'about' */ './about/About'),
//   loading() {
//     return <div>Loading...</div>;
//   }
// });
//
// const CurrencyExchange = Loadable({
//   loader: () => import(/* webpackChunkName: 'about' */ '../containers/CurrencyExchange/CurrencyExchange'),
//   loading() {
//     return <div>Loading...</div>;
//   }
// });
//
// const NotFound = () => {
//   return(
//     <h2>Route Not Found</h2>
//   )
// }


class App extends React.Component {
  render(){
    const {classes} = this.props
    return(
      <div className="app">
    <Helmet
      title={metadata.title}
      meta={metadata.meta}
      link={metadata.link}
      script={metadata.script}
      noscript={metadata.noscript}
    />
    <Header />
    <div className="main">
      <ToastContainer
          className={classes.toastContainer}
          position={toast.POSITION.TOP_CENTER}
          autoClose={false}
          hideProgressBar={false}
          closeOnClick
        />
      <Routes/>
    </div>

    <footer />
  </div>
    )
  }

};

export default withStyles(Style)(App)
