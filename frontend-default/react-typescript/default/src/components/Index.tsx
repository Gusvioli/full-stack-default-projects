import React from 'react';

// Classs
export default class Index extends React.Component {
    constructor(props: any) {
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
export function indexFunction(props: any) {
    return (<>{props}</>);
}

// Arrow Functions
export const indexArrowFunctions = (props: any) => {
    return (<>{props}</>);
};
