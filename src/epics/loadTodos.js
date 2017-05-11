import { loadTodosFulfilled } from "../actions";

const loadTodos = (action$) => {
    return action$.ofType("LOAD_TODOS").
        mergeMap(action =>{
            console.log("loadTodos");
            console.log(action);
            return AsyncStorage.getItem('todo').
                then((data) => loadTodosFulfilled(JSON.parse(data))).
                catch((error) => error);;
        }

        );
};

export default loadTodos;
