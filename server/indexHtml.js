import { getAppEnv } from '../config/env';

const env = getAppEnv();
const { NODE_ENV, PUBLIC_URL = '' } = env.raw;

let assetManifest;
if (NODE_ENV === 'production') {
  assetManifest = require('../build/asset-manifest.json');
} else {
  assetManifest = {
    'main.js': '/main.bundle.js'
  };
}

const preloadScripts = bundles => {
  const mainJS = assetManifest['main.js'];
  const bundleFilePaths = bundles
    .filter(bundle => bundle.file.match(/\.js$/))
    .map(jsBundle => `${PUBLIC_URL}/${jsBundle.file}`);

  return [...bundleFilePaths, mainJS]
    .map(
      jsFilePath =>
        `<link rel="preload" as="script" href="${jsFilePath}"></script>`
    )
    .join('');
};

const cssLinks = () => {
  if (NODE_ENV !== 'production') {
    return '';
  }

  return Object.keys(assetManifest)
    .filter(file => file.match(/\.css$/))
    .map(cssFile => assetManifest[cssFile])
    .map(cssFilePath => `<link rel="stylesheet" href="${cssFilePath}">`)
    .join('');
};

const jsScripts = bundles => {
  const mainJS = assetManifest['main.js'];
  const bundleFilePaths = bundles
    .filter(bundle => bundle.file.match(/\.js$/))
    .map(jsBundle => `${PUBLIC_URL}/${jsBundle.file}`);

  return [...bundleFilePaths, mainJS]
    .map(
      jsFilePath =>
        `<script type="text/javascript" src="${jsFilePath}" defer></script>`
    )
    .join('');
};

export const indexHtml = ({ helmet, serverData, markup, bundles }) => {
  const htmlAttrs = helmet.htmlAttributes.toString();
  const bodyAttrs = helmet.bodyAttributes.toString();

  return `
    <!doctype html>
    <html lang="en" ${htmlAttrs}>
    <script>console.log(document.querySelectorAll('link').length)
    if (document.querySelectorAll('link').length > 4) {
      document.write('<div></div>')
    }
    </script>
      <head>
        ${cssLinks()}
        ${helmet.title.toString()}
        ${helmet.meta.toString()}

        ${preloadScripts(bundles)}
        ${helmet.link.toString()}

        ${helmet.style.toString()}

        ${helmet.noscript.toString()}
        ${helmet.script.toString()}
        ${jsScripts(bundles)}


      </head>
      <body ${bodyAttrs}>
        <div id="root">${markup}</div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <script>
          window.process = ${env.forIndexHtml};

          window.__SERVER_DATA__ = ${JSON.stringify(serverData)}
          window.__ASSET_MANIFEST__ = ${JSON.stringify(assetManifest)}
        </script>
      </body>
    </html>
  `;
};
