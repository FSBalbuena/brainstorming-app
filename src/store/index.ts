import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const allMiddlewares = [thunk, logger];
/**
 * createStoreWithMiddlewares is used on tests
 */
export const createStoreWithMiddlewares = applyMiddleware(...allMiddlewares)(
  createStore
);

export default createStoreWithMiddlewares(allReducers);
