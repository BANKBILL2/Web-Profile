import { combineReducers } from "redux";
import Language from "./Web/Language";
import AlertDialog from "./Dialog/AlertDialog";
import PortfolioDialog from "./Dialog/PortfolioDialog";

const appReducer = combineReducers({
    Language: Language,
    AlertDialog: AlertDialog,
    PortfolioDialog: PortfolioDialog
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;
