import Action from "../../Actions";

var initialState = {
    dialogStatus: false,
    type: ''
};

function PortfolioDialog(state = initialState, action) {
    switch (action.type) {
        case Action.Set_Portfolio_Dialog:
            return {
                ...state,
                dialogStatus: action.DialogStatus,
                type: action.Type
            };
        default:
            return state;
    }
}

export default PortfolioDialog;
