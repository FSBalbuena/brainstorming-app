import checkPropTypes from 'check-prop-types';

import { createStoreWithMiddlewares } from '@/store';
import allReducers from '@/store/reducers';

/**
 * Receive a component, mount it with props and return an error object
 * @param {component} component
 * @param {object} expectedProps
 */
export const checkProps = (component, expectedProps) =>
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

/**
 *
 * @param {object} initialState
 * @description given an initial state, creates a store ment to be used on testing
 */
export const testStore = initialState =>
  createStoreWithMiddlewares(allReducers, initialState);
