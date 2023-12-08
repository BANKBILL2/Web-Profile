import Action from '../index';

export function setPortfolioDialog(status, type) {
    return {
        type: Action.Set_Portfolio_Dialog,
        DialogStatus: status,
        Type: type,
    };
}