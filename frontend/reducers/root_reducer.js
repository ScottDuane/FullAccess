import React from 'react';
import BusinessesReducer from './businesses_reducer';

const RootReducer = combineReducers ({
  businesses: BusinessesReducer
});

export default RootReducer;