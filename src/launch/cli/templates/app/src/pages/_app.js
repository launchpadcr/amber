import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { renderToString } from 'react-dom/server';

import Layout from './_layout'

import '../assets/styles/globals.scss';

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
    // Get props written into html from server
    const reactPropsNode = document.getElementById('react-props')
    const props = JSON.parse(reactPropsNode.getAttribute('data-props'));
    // Remove raw props from html
    delete reactPropsNode.dataset.props

    renderMethod(
      <AppContainer>
        <Comp {...props} />
      </AppContainer>,
      target
    )
  }

  // Render!
  render(Layout)

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept(function (err) {
      console.log('An error occurred while accepting new version');
    });
  }
} else {
  // SSR
  const render = () => renderToString(<Layout path={process.argv[2] || '/'} {...JSON.parse(process.argv[3])} />)
  // Crystal captures the output via console
  console.log(render())
}
