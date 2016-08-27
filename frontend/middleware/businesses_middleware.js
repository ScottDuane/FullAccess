import React from 'react';
import { BusinessConstants } from '../actions/business_actions';
import { fetchBusinesses } from '../util/business_api_util';

const BusinessesMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    case BusinessConstants.REQUEST_BUSINESSES:
      const success = (data) => { dispatch(receiveBusinesses(data)) };
      fetchBusinesses(success);
      return next(action);
    case BusinessConstants.RECEIVE_BUSINESSES:
      console.log("pass businesses");
      return next(action);
    default:
      return next(action);
  }
};

export default BusinessesMiddleware;