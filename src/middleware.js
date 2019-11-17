const promiseMiddleware = store => next => action => {
    if(isPromise(action.payload)) {
        action.payload.then(
            res => {
                action.payload = res;
                store.dispatch(action);
            },
            error => {
                action.error = true;
                action.payload = error.response.body;
                store.dispatch(action);
            }
        );
        return;
    }
    /**
     * the next function is how we pass control to the next piece of middleware
     * in the chain, in this case since we don't have any more middleware the next function
     * will trigger the reducer, however if the action.payload is a promise we don't 
     * call next we dispatch a new action entirely
     */
    next(action);
};

function isPromise(v) {
    return v && typeof v.then === 'function';
}

export {
    promiseMiddleware
};