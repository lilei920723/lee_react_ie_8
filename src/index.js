import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import {HashRouter as Router} from 'react-router-dom';
import App from 'components/App/App';
require("./asset/basic.css")
ReactDom.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('app')
);
