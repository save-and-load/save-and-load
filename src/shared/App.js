import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Manual, Univ, Posts } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home} />
                <Route exact path="/manual" component={Manual} />
                <Route exact path="/univ" component={Univ} />

                {/* Coming Soon With Gallery?
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                */}
            </div>
        );
    }
}

export default App;