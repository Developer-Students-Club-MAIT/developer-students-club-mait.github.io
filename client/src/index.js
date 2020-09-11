import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.scss'

class App extends Component {
    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))