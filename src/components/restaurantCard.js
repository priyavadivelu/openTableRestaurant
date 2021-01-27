import React, { Component } from 'react';
import CardInfo from './cardInfo';

export default class RestaurantCard extends Component {
    render() {
        return (
            <div className='card'>
               <img src={this.props.restaurant.image_url} />
               <CardInfo restaurant={this.props.restaurant}/>
            </div>
        )
    }
}
