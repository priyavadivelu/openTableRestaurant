import React, { Component } from "react";
import SearchBar from "./components/searchBar";
import RestaurantList from "./components/restaurantList";
import styles from "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      restaurants: [
        // {
        //   id: 107257,
        //   name: "Las Tablas Colombian Steak House",
        //   address: "2942 N Lincoln Ave",
        //   city: "Chicago",
        //   state: "IL",
        //   area: "Chicago / Illinois",
        //   postal_code: "60657",
        //   country: "US",
        //   phone: "7738712414",
        //   lat: 41.935137,
        //   lng: -87.662815,
        //   price: 8,
        //   reserve_url: "http://www.opentable.com/single.aspx?rid=107257",
        //   mobile_reserve_url:
        //     "http://mobile.opentable.com/opentable/?restId=107257",
        //   image_url: "https://www.opentable.com/img/restimages/107257.jpg",
        // },
      ],
    };
    this.baseUrl = "https://opentable.herokuapp.com/api/restaurants?";

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.fetchResults = this.fetchResults.bind(this);

    // default search
    //  this.onSearchSubmit('chicago');
  }

  onSearchSubmit(value) {
    // using the city param for more interesting results to play with
    this.url = this.baseUrl + `city=${value}`;

    this.fetchResults(this.url);
  }

  fetchResults(url) {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState((prev, props) => ({
          restaurants: data.restaurants,
        }));
      });
      
  }

  // onSearchSubmit(value) {
  //   this.fetchResults();
  // }

  // fetchResults(){
  //   this.setState((prev, props) => ({
  //             restaurants: this.state.restaurants,
  //           }));
  // }

  render() {
   
    return (
      <div className="App-Container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />

        <div className="results-content">
          <RestaurantList results={this.state.restaurants} />
        </div>
      </div>
    );
  }
}

export default App;
