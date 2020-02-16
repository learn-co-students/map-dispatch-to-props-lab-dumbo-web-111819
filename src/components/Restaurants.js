import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from './Restaurant'


class Restaurants extends Component {


  render() {

  let restaurants = this.props.restaurants.map((restaurantObj, index) => <Restaurant restaurant={restaurantObj} key={index}/>);

    return (
      <div>
          {restaurants}
      </div>
    );
  }
};

const mapStateToProps = state => {
  // debugger
  return { 
    restaurants: state.restaurants,
  }
};


export default connect(mapStateToProps)(Restaurants);
