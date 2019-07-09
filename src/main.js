import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
//import Loadable from 'react-loadable'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import App from './components/App'
import {ServerDataProvider} from './state/serverDataContext'
import {AppContainer} from 'react-hot-loader'
import './styles/index.scss'

const serverData = window.__SERVER_DATA__
const theme = createMuiTheme({
  typography: {
    fontFamily: '"Bogle-Regular", "Roboto", "Helvetica", "Arial", sans-serif'
  }
})
export const main = () => {
  //Loadable.preloadReady().then(() => {
    ReactDOM.render(
        <AppContainer>
          <MuiThemeProvider theme={theme}>
            <ServerDataProvider value={serverData}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ServerDataProvider>
          </MuiThemeProvider>
        </AppContainer>,
      document.getElementById('root')
    )
  //})
}
