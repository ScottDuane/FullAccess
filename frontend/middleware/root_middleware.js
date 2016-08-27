import { applyMiddleware } from 'redux';
import { BusinessesMiddleware } from './businesses_middleware';

const RootMiddleware = applyMiddleware(BusinessesMiddleware);

export default RootMiddleware;