import { saveTodosSuccess, saveTodosFailed } from "../actions";
import { AsyncStorage } from "react-native";
import Rx from "rxjs/Rx";

const saveTodos = (action$) => {
    return action$.ofType("SAVE_TODOS").
        mergeMap(action => {
            return AsyncStorage.setItem("todo", JSON.stringify(action.todos)).then(() => {
                    return saveTodosSuccess();
                }).catch(error => {
                    return saveTodosFailed(error);
                });
        });
}

export default saveTodos;
