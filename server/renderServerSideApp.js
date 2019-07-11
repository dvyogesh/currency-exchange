import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

import App from '../src/components/App';
import { fetchDataForRender } from './fetchDataForRender';
import { indexHtml } from './indexHtml';
import stats from '../build/react-loadable.json';
import { ServerDataProvider } from '../src/state/serverDataContext';

//import ContextProvider from '../src/ContextProvider'
const ServerApp = ({ data, location }) => {
  const css = new Set();
  const context = {
    insertCss: (...styles) => styles.forEach(style => css.add(style._getCss()))
  };

  // const markup = ReactDOMServer.renderToString(
  //   <ContextProvider context={context}>
  //     <App />
  //   </ContextProvider>
  // )

  return (
    <ServerDataProvider value={data}>
      <StaticRouter location={location} context={context}>
        <App />
      </StaticRouter>
    </ServerDataProvider>
  );
};

export const renderServerSideApp = (req, res) => {
  Loadable.preloadAll()
    .then(() => fetchDataForRender(ServerApp, req))
    .then(data => renderApp(ServerApp, data, req, res));
};

function renderApp(ServerApp, data, req, res) {
  const context = {};
  const modules = [];

  const markup = ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <ServerApp location={req.url} data={data} context={context} />
    </Loadable.Capture>
  );

  if (context.url) {
    res.redirect(context.url);
  } else {
    const fullMarkup = indexHtml({
      helmet: Helmet.renderStatic(),
      serverData: data,
      bundles: getBundles(stats, modules),
      markup
    });

    res.status(200).send(fullMarkup);
  }
}
