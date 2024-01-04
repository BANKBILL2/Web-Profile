import Action from '../../Actions';

var initialState = {
    alertstatus: false,
    textbody: 'เนื้อหาแจ้งเตือน',
};

function AlertDialog(state = initialState, action) {
    switch (action.type) {
        case Action.Set_Alert_Dialog:
            return {
                ...state,
                alertstatus: action.AlertStatus,
                textbody: action.TextBody,
            };
        default:
            return state;
    }
}

export default AlertDialog;