import Action from '../index';

export function setAlertDialog(status, textbody) {
    return {
        type: Action.Set_Alert_Dialog,
        AlertStatus: status,
        TextBody: textbody,
    };
}