import React from 'react';
import StaticRouter from './StaticRouter'
import { renderToString } from 'react-dom/server';

const render = () => renderToString(<StaticRouter path={process.argv[2] || '/'} {...JSON.parse(process.argv[3])} />)

console.log(render())