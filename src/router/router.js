import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Bundle from './Bundle';

import Loading from 'components/Loading/Loading';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

// const createComponent = (component) => (props) => (
//     <Bundle load={component}>
//         {
//             (Component) => Component ? <Component {...props} /> : <Loading/>
//         }
//     </Bundle>
// );

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    </div>
);
