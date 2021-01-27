import React, { Component } from 'react';
import img from '../images/searchIcon.png'

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    handleChange(e){
        this.setState({value:e.target.value});
    }

    onSearchSubmit(){
        this.props.onSearchSubmit(this.state.value);
    }
    
    render() {
        return (
            <div className="search-container">
                <h3 id="searchTxt">Restaurants in your city</h3>
                <div className="search-panel">
                <input type='text' id="searchBar" placeholder="Enter city name" onChange={this.handleChange}/><br></br>
                <img id="searchImg" src={img} onClick={this.onSearchSubmit}/>
                </div>
            </div>
        )
    }
}
