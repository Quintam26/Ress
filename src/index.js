import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import { W404 } from './components/404';
import { Router, Route, hashHistory } from 'react-router';

window.React = React

render(
	<Router history={hashHistory}>
			<Route path="/" component={App}/>
			<Route path="*" component={W404}/>
	</Router>,
	document.getElementById('react-container')
	)