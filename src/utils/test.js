import checkPropTypes from 'check-prop-types';

import { createStoreWithMiddlewares } from 'store';
import allReducers from 'store/reducers';

/**
 * Receive a enzyme`s shallow component, search for an element with a data-test attr
 * @param {enzyme-component} wrapper
 * @param {string} value
 */
export const findByTestAtrr = (wrapper, value) =>
  wrapper.find(`[data-test="${value}"]`);

/**
 * Receive an enzyme`s shallow component, mount it with props and return an error object
 * @param {enzyme-component} component
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
