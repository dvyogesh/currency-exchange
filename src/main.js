import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import Loadable from 'react-loadable'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './components/App';
import { ServerDataProvider } from './state/serverDataContext';
import { AppContainer } from 'react-hot-loader';
import './styles/index.scss';

const serverData = window.__SERVER_DATA__;
const theme = createMuiTheme({
  typography: {
    fontFamily: '"Bogle-Regular", "Roboto", "Helvetica", "Arial", sans-serif'
  }
});
export const main = () => {
  const context = {
    insertCss: (...styles) => {
      const removeCss = styles.map(x => x._insertCss());
      return () => {
        removeCss.forEach(f => f());
      };
    }
  };
  //Loadable.preloadReady().then(() => {
  ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider theme={theme}>
        <ServerDataProvider value={serverData} context={context}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ServerDataProvider>
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('root')
  );
  //})
};

//
// const context = {
//     insertCss: (...styles) => {
//       const removeCss = styles.map(x => x._insertCss());
//       return () => {
//         removeCss.forEach(f => f());
//       };
//     },
//   }
//
// hydrate(<ContextProvider >
// <App />
// </ContextProvider>, document.getElementById('app'))
