import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-switch-lang';
import { setLanguage } from 'react-switch-lang';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';
import Loading from '../Loader/Loading';
import * as webAction from '../../Actions/Web/WebAction';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
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

    render() {
        const { t, Language } = this.props;
        const { loading } = this.state;

        return (
            <React.Fragment>
                <div className="row sidebar-layout">
                    <Scrollspy
                        className="nav-sub"
                        currentClassName="active"
                        items={['', 'about', 'experience', 'portfolio', 'skills', 'contact']}
                        offset={-50}>
                        <img className="img-profile rounded-circle" src={require('../../Assets/Images/profile.jpg')} />
                        <a className="nav-text" href="#about">{t('component.sidebar.text-menu-about')}</a>
                        <a className="nav-text" href="#experience">{t('component.sidebar.text-menu-experience')}</a>
                        <a className="nav-text" href="#portfolio">{t('component.sidebar.text-menu-portfolio')}</a>
                        <a className="nav-text" href="#skills">{t('component.sidebar.text-menu-skills')}</a>
                        <a className="nav-text" href="#contact">{t('component.sidebar.text-menu-contact')}</a>
                        <div className="sidebar-line-container">
                            <div className={Language.language === 'th' ? "text-language active" : "text-language"} onClick={() => this.onChangeLanguage()}>
                                ไทย
                            </div>
                            <div className="header-icon" />
                            <div className={Language.language === 'en' ? "text-language active" : "text-language"} onClick={() => this.onChangeLanguage()}>
                                ENG
                            </div>
                        </div>
                    </Scrollspy>
                </div>
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

Sidebar.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(connect(mapStateToProps, mapDispatchToProps)(Sidebar));