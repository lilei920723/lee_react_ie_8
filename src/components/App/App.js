import React, {Component} from 'react';

import getRouter from 'router/router';
import Nav from "../Nav/Nav"
export default class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                {getRouter()}
            </div>
        )
    }
}
