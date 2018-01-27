/**
 * Intercept actions that have a promise payload. Wait for the promise to resolve then dispatch a new action with the
 * payload. All other actions are passed through.
 *
 * TODO - consider:
 *        1) implement a timeout mechanism on the promise response
 *        2) default error handling as we can expect error conditions to be contained within the body of 2xx responses
 *
 * @param dispatch - all middlewares have access to the all powerful dispatch function in order to push actions
 * @returns {function(*): function(*=)} either the same non-promise action or a re-dispatch of the action that was
 *                                      originally intercepted but now with the data payload of the resolved promise
 */
export default function ({ dispatch }) {
  return next => action => {
    // if action does not have payload or, the payload does not
    // have a .then property we don't care about it, send it on
    if (!action.payload || !action.payload.then) {
      return next(action)
    }

    // make sure the action's promise resolves
    console.log('Async: Waiting for Promise to resolve...', action)
    action.payload
      .then(function (response) {
        // take whatever our action already contains and extend over it the new payload
        const newAction = { ...action, payload: response }
        console.log('Async: Promise resolved, dispatching new action', newAction)
        dispatch(newAction)
      })
      .catch(error => {
        // TODO Common error handling pattern, link error to the caller, dispatch error action.
        console.error('Async: Promise error:', error)
      })
  }
}
