import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { setTranslations, setDefaultLanguage } from "react-switch-lang";
import { bindActionCreators } from 'redux';
import en from "./Assets/Language/en.json";
import th from "./Assets/Language/th.json";
import * as webAction from '../src/Actions/Web/WebAction';
import "./Assets/CSS/index.css";

//Pages
import MainRoute from "./Pages/Main/Route";

setTranslations({ en, th });

class App extends Component {
    displayName = App.name;

    componentWillMount() {
        setDefaultLanguage('en');
        this.props.WebAction.setWebLanguage('en');
    }

    render() {
        return (
            <Suspense>
                <Routes>
                    <Route index element={<MainRoute />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Suspense>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Language: state.Language,
    };
};

const mapDispatchToProps = dispatch => ({
    WebAction: bindActionCreators(webAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
