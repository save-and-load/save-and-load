import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, Manual, Univs, Log } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/manual" component={Manual} />
                    <Route exact path="/univ" component={Univs} />
                    <Route exact path="/log" component={Log} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        );
    }
}

export default App;