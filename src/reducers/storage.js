
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
            return {
                ...state,
                loading: true,
            };
        case "LOAD_TODOS_SUCCESS":
            return {
                ...state,
                loading: false,
            };
        case "LOAD_TODOS_FAILED":
            return {
                ...state,
                loading: false,
            };
        case "LOAD_TODOS_NO_DATA":
            return {
                ...state,
                loading: false,
            };
        case "SAVE_TODOS":
            return {
                ...state,
                saving: true,
            };
        case "SAVE_TODOS_SUCCESS":
            return {
                ...state,
                saving: false,
            };
        case "SAVE_TODOS_FAILED":
            return {
                ...state,
                saving: false,
            };
        default:
            return state;
    }
}
