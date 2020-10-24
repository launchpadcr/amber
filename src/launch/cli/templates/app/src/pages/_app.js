import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import StaticRouter from '../utils/StaticRouter'
import { renderToString } from 'react-dom/server';
import App from './App'

// Render your app
if (typeof document !== 'undefined') {
  // Ensure webpack captures all images
  require.context(
    "../assets/images",
    true,
    /\.(gif|jpg|png|svg|jpeg|ico)$/i
  );
  const target = document.getElementById('root')

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const render = Comp => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target
    )
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept(function (err) {
      console.log('An error occurred while accepting new version');
    });
  }
} else {
  // SSR
  const render = () => renderToString(<StaticRouter path={process.argv[2] || '/'} {...JSON.parse(process.argv[3])} />)
  console.log(render())
}
