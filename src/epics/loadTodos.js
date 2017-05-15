import { loadTodosSuccess, loadTodosFailed, loadTodosNoData } from "../actions";
import { AsyncStorage } from "react-native";
import Rx from "rxjs/Rx";

const loadTodos = (action$) => {
    return action$.ofType("LOAD_TODOS").//delay(500).
        mergeMap(action =>{
            return AsyncStorage.getItem("todo").
                then((data) => {
                    if (data) {
                        return loadTodosSuccess(JSON.parse(data));
                    }
                    else {
                        return loadTodosNoData();
                    }
                }).
                catch((error) => {
                    return loadTodosFailed(error);
                });;
        });
};

export default loadTodos;
