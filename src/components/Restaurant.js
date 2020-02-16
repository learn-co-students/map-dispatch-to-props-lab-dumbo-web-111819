import React, {Component} from 'react';
import {connect} from 'react-redux'
import { removeRestaurant } from '../actions/restaurants';


class Restaurant extends Component {

    handleRemove = (e) => {
        // console.log(this.props)
        console.log("su")
        this.props.removeRestaurant(this.props.restaurant)
      }

    render(){
       const {restaurant} =this.props
    return(
        <div onClick={this.handleRemove}>
            <p>{restaurant.name}</p>
            <h3>{restaurant.location}</h3>
        </div>
        )
    }
  
    
}

const mapDispatchToProps=(dispatch) => {
    return{
      removeRestaurant: (restaurant) => {
        dispatch(removeRestaurant(restaurant))
      }
    };
  }

export default connect(null,mapDispatchToProps)(Restaurant)

  