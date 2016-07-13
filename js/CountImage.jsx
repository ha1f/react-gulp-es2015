"use strict";

import React from 'react';

const IMAGES = ["./../img/babel.png", "./../img/browserify.png", "./../img/gulp.png"];
export default class CountImage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let n = this.props.number % 3;
        return (
            <div>
                <img src={IMAGES[n]} />
            </div>
        );
    }
}
