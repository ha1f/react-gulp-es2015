"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Message from './message.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Hello world'
        }
    }
    render() {
        return (
            <div>
                Hello World!
                <Message name={this.state.name}></Message>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
