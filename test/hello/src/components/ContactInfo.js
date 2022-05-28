import React, { Component } from 'react';

export default class ContactInfo extends Component {
    render() {
        return (
            <div>{this.props.contact.name}</div>
        );
    }
}
