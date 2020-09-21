import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.scss'
import Home from './Screens/Home.jsx'
import { Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
    render() {
        const App = () => (
            <div>
              <Switch>
                <Route exact path='/' component={Home}/>
                
              </Switch>
            </div>
        )      
        return (
            <Switch>
              <App/>
            </Switch>
        );
    }
}
ReactDOM.render((<BrowserRouter>
    <App/>
</BrowserRouter>), document.getElementById('root'))