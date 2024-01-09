import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-switch-lang';
import { setLanguage } from 'react-switch-lang';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy'
import Loading from '../Loader/Loading';
import $ from 'jquery';
import * as webAction from '../../Actions/Web/WebAction';

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown_menu: false,
            loading: false
        };
    }

    callJquery() {
        const _this = this;
        $(document).ready(async function () {
            try {
                $("body").click(function (event) {
                    const classNa = $(event.target).attr('class');
                    if (classNa !== "fas fa-bars topbar-fa-bars" && $(".navbar-collapse").hasClass("show")) {
                        _this.setState({ dropdown_menu: false });
                    }
                });
            } catch (error) {
                console.log('Jquery Error');
            }
        });
    }

    async onChangeLanguage() {
        const { WebAction, Language } = this.props;

        this.setState({ loading: true });

        await setTimeout(() => {
            if (Language.language !== 'th') {
                WebAction.setWebLanguage('th');
                setLanguage('th');
            }
            else {
                WebAction.setWebLanguage('en');
                setLanguage('en');
            }
            this.setState({ loading: false });
        }, 1000);
    }

    onClickBtn() {
        const { dropdown_menu } = this.state;
        this.setState({ dropdown_menu: !dropdown_menu });
    }

    render() {
        this.callJquery();
        const { t, Language } = this.props;
        const { dropdown_menu, loading } = this.state;

        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark topbar-layout" id="sideNav">
                    <div className="navbar-brand js-scroll-trigger">
                        <span className="topbar-title">
                            Profile
                        </span>
                    </div>
                    <div className="topbar-line-container">
                        <div className={Language.language === 'th' ? "text-language active" : "text-language"} onClick={() => this.onChangeLanguage()}>
                            ไทย
                        </div>
                        <div className="header-icon" />
                        <div className={Language.language === 'en' ? "text-language active" : "text-language"} onClick={() => this.onChangeLanguage()}>
                            ENG
                        </div>
                    </div>
                    <button className="topbar-button" onClick={() => this.onClickBtn()}>
                        <span>
                            <i className="fas fa-bars topbar-fa-bars" />
                        </span>
                    </button>
                    <div className={dropdown_menu ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                        <Scrollspy
                            className="navbar-nav"
                            currentClassName="nav-item--active"
                            items={['about', 'experience', 'portfolio', 'skills', 'contact']}
                            >
                            <li className="nav-item">
                                <a className="nav-link" href="#about">{t('component.topbar.text-menu-about')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#experience">{t('component.topbar.text-menu-experience')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">{t('component.topbar.text-menu-portfolio')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">{t('component.topbar.text-menu-skills')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">{t('component.topbar.text-menu-contact')}</a>
                            </li>
                        </Scrollspy>
                    </div>
                </nav>
                <Loading ShowText={true} IsLoading={loading} HaveBackground={true} />
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

Topbar.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(connect(mapStateToProps, mapDispatchToProps)(Topbar));