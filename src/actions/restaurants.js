export const addRestaurant = (restaurant) => {
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
};

export const removeRestaurant = (restaurant) => {
  return {
    type: 'REMOVE_RESTAURANT',
    restaurant
  };
};


