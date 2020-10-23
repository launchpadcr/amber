import React from 'react';
import Router from './src/utils/router'
import { renderToString } from 'react-dom/server';

function render() {
  return (
    renderToString(<Router path={process.argv[2] || '/'} />)
  )
}

console.log(render())