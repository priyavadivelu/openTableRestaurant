import React, { Component } from 'react'

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
                <h3>Enter city name for restaurants.</h3>
                <input type='text' id="searchBar" placeholder="Toronto" onChange={this.handleChange}/>
                <button onClick={this.onSearchSubmit}>Submit</button>
            </div>
        )
    }
}
