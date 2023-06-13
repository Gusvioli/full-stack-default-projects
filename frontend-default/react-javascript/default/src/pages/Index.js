import React from 'react';

// Classs
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'React'
        };
    }
    render() {
        return (<>{this.props}</>);
    }
}

// Functions
export function indexFunction(props) {
    return (<>{props}</>);
}

// Arrow Functions
export const indexArrowFunctions = (props) => {
    return (<>{props}</>);
};
