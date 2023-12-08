import { combineReducers } from "redux";
import Language from "./Web/Language";
import PortfolioDialog from "./Dialog/PortfolioDialog";

const appReducer = combineReducers({
    Language: Language,
    PortfolioDialog: PortfolioDialog
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;
