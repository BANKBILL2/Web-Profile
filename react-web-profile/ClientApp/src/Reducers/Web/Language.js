import Action from "../../Actions";

var initialState = {
    language: 'en',
};

function Language(state = initialState, action) {
    switch (action.type) {
        case Action.Set_Web_Language:
            return { ...state, language: action.Language };
        default:
            return state;
    }
}

export default Language;
