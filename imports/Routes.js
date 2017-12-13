import React from 'react'
import ReactDom from 'react-dom';
import {Router, Route} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import {render} from 'react-dom';
import App from './App'

const history = createBrowserHistory()

Meteor.startup(() => {
	render(
		<Router history={history}>
			<Route exact path='/' component={App} />
		</Router>,
		document.getElementById('render-target')
	);
});