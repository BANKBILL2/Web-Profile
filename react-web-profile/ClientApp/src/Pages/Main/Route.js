import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./index";

export default class MainRoute extends Component {
    render() {
        return (
            <Routes>
                <Route exact path='/' element={<Main />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        )
    }
}
