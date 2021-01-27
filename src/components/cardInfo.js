import React, { Component } from 'react';

export default class CardInfo extends Component {
    constructor(props){
        super(props);

        this.address = `${this.props.restaurant.address}
            ${this.props.restaurant.city}, ${this.props.restaurant.state}
            ${this.props.restaurant.postal_code}`;
    }
    render() {
        return (
            <div className='cardInfo'>
                <div className='name'><span>Name:</span>{ this.props.restaurant.name }</div>
                <div className='price'><span>Price:</span>${ this.props.restaurant.price }</div>
                <div className='address'><span>Address:</span>{ this.address }</div>
            </div>
        )
    }
}
