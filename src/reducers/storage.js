
const initialState = () => ({
    starting: true,
    loading: false,
    saving: false,
});

export const storage = (state = initialState(), action) => {
    switch(action.type) {
        case "CHECK_INITIAL_TODOS":
            return {
                ...state,
                starting: false,
            };
        case "LOAD_TODOS":
            console.log(action);
            return {
                ...state,
                loading: true,
            };
        case "LOAD_TODOS_FULFILLED":
            console.log(action);
            return {
                ...state,
                loading: false,
            }
        case "LOAD_TODOS_FAILED":
            console.log(action);
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
}
