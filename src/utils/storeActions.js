/**
 * Takes a type constant
 * Returns a function that expects a payload porperty to create an action-object
 * @param {string} type
 */
export const actionCreator = type => payload => ({
  type,
  payload,
});
