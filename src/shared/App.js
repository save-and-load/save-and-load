import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Manual, Univs, Log } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Route exact path="/" component={Home} />
                <Route exact path="/manual" component={Manual} />
                <Route exact path="/univ" component={Univs} />
                <Route exact path="/log" component={Log} />
            </div>
        );
    }
}

export default App;