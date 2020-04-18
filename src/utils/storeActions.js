/**
 * Creates an action with the given type constant
 * @param {string} type
 */
export const actionCreator = type => payload => ({
  type,
  payload,
});
