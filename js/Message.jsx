"use strict";

import React from 'react';

export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}
