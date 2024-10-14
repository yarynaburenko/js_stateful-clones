'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let newState = { ...state };
  const stateResult = [];

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        newState = { ...newState, ...action.extraData };
        break;

      case 'removeProperties':
        newState = { ...newState };

        for (const key of action.keysToRemove) {
          delete newState[key];
        }

        break;

      case 'clear':
        newState = {};
        break;
    }
    stateResult.push(newState);
  }

  return stateResult;
}

module.exports = transformStateWithClones;
