import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import Chores from './components/Chores';

const routes = <Route component={App}>
    <Route path="/" component={Chores}/>
</Route>;

ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
	document.getElementById('app')
);
