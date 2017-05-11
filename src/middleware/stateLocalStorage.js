import { loadTodos } from "../actions";

const stateLocalStorage = store => next => action => {

    var previousState = store.getState();

    next(action);

    var currentState = store.getState();

    if (action.type == "CHECK_INITIAL_TODOS") {
        store.dispatch(loadTodos());
    }
    else if (action.type != "LOAD_TODOS_FULFILLED" &&
        previousState.todos != currentState.todos) {
        console.log(`need save`);
    }

};

export default stateLocalStorage;
