const BusinessesReducer = (state = {}, action) => {
  switch (action.type) {
    case BusinessConstants.RECEIVE_BUSINESSES:
      return action.businesses;
    default:
      return state;
  }
};

export default BusinessesReducer;