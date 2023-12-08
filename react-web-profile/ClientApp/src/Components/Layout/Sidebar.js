import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-switch-lang';
import PropTypes from 'prop-types';
import $ from "jquery";
import * as webAction from '../../Actions/Web/WebAction';

class Sidebar extends Component {

    callJquery() {
        $(document).ready(async function () {
            try {
                $("body").click(function (event) {
                    const classNa = $(event.target).attr('class');

                    if (classNa === 'nav-text') {
                        $(".nav-text").removeClass("active");
                        $(event.target).addClass("active");
                    }
                });
            } catch (error) {
                console.log('Jquery Error');
            }
        });
    }

    render() {
        this.callJquery();

        return (
            <React.Fragment>
                <div className="row sidebar-layout">
                    <div className="nav-sub">
                        <img className="img-profile rounded-circle" src={require('../../Assets/Images/profile.jpg')} />
                        <a className="nav-text active" href="#about">About</a>
                        <a className="nav-text" href="#experience">Experience</a>
                        <a className="nav-text" href="#portfolio">Portfolio</a>
                        <a className="nav-text" href="#skills">Skills</a>
                        <a className="nav-text" href="#contact">Contact</a>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

const mapStateToProps = state => ({
    Language: state.Language,
});

const mapDispatchToProps = dispatch => ({
    WebAction: bindActionCreators(webAction, dispatch),
});

Sidebar.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(connect(mapStateToProps, mapDispatchToProps)(Sidebar));