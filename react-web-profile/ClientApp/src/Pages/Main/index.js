import React from "react";
import LayoutMain from "../../Components/Layout/LayoutMain";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { translate } from 'react-switch-lang';
import { EnumPortfolioProject } from '../../Helpers/Enum';
import $ from "jquery";
import PropTypes from 'prop-types';
import PortfolioDialog from '../../Components/Dialog/PortfolioDialog';
import * as webAction from '../../Actions/Web/WebAction';
import * as portfolioDialogAction from '../../Actions/Dialog/PortfolioDialogAction';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterTypeSelected: 0,
            filterType: [
                { id: 0, value: 'All' },
                { id: 1, value: 'Web Apps' },
                { id: 2, value: 'Web Backend' },
                { id: 3, value: 'Window Apps' },
                { id: 4, value: 'Class Library' },
                { id: 5, value: 'Workshop' }
            ]
        };
    }

    onClickFilter(type) {
        this.setState({ filterTypeSelected: type });
    }

    onClickOpenDialog(type) {
        const { PortfolioDialogAction } = this.props;

        PortfolioDialogAction.setPortfolioDialog(true, type);
    }

    render() {
        const { t } = this.props;
        const { filterTypeSelected } = this.state;

        return (
            <React.Fragment>
                <LayoutMain>
                    <div>
                        <div className="container-fluid main-layout" style={{ padding: '0px' }}>
                            <section id="about">
                                <div className="row">
                                    <div className="about-section">
                                        <div className="col-12" style={{ marginTop: '30px' }}>
                                            <div className='text-header-primary'>{t('page.about-section.text-first-name')}</div>
                                            <div className='text-header-normal'>{t('page.about-section.text-last-name')}</div>
                                        </div>
                                        <div className="col-12">
                                            <div className="text-header-sub">
                                                {t('page.about-section.text-quotation')} <a style={{ color: 'lightseagreen' }}>{t('page.about-section.text-quotation2')}</a>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="text-sentence">
                                                {t('page.about-section.text-subject')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="experience">
                                <div className="row">
                                    <div className="experience-section">
                                        <div className="background-cover-experience-section">
                                            <div className="col-12">
                                                <div className="text-header-center-experience-section">{t('page.experience-section.text-title')}</div>
                                            </div>
                                            <div className="col-12">
                                                <div class="mb-5 heading-border-white" />
                                            </div>
                                            <div className="col-12">
                                                <div className="text-header-subject-experience-section">
                                                    <i className="fa fa-laptop" /> {t('page.experience-section.text-topic')}
                                                </div>
                                                <div className="text-header-sub-subject-experience-section">{t('page.experience-section.text-work-period')}</div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-subject-experience-section">
                                                    {t('page.experience-section.text-subject-paragraf1')}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-subject-experience-section">
                                                    {t('page.experience-section.text-subject-paragraf2')}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-subject-experience-section">
                                                    {t('page.experience-section.text-subject-paragraf3')}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-subject-experience-section">
                                                    {t('page.experience-section.text-subject-paragraf4')}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-subject-experience-section" style={{ textAlign: 'end' }}>
                                                    {t('page.experience-section.text-subject-paragraf5')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="portfolio">
                                <div className="row">
                                    <div className="portfolio-section">
                                        <div className="col-12">
                                            <div className="text-header-center">{t('page.portfolio-section.text-title')}</div>
                                        </div>
                                        <div className="col-12">
                                            <div class="mb-5 heading-border-black" />
                                        </div>
                                        <div className="col-12">
                                            <div class="port-head-cont-portfolio-section">
                                                <button className="btn-general-portfolio-section" onClick={() => this.onClickFilter(0)}>{t('page.portfolio-section.text-btn-all')}</button>
                                                <button className="btn-general-portfolio-section" onClick={() => this.onClickFilter(1)}>{t('page.portfolio-section.text-btn-web-apps')}</button>
                                                <button className="btn-general-portfolio-section" onClick={() => this.onClickFilter(2)}>{t('page.portfolio-section.text-btn-web-backend')}</button>
                                                <button className="btn-general-portfolio-section" onClick={() => this.onClickFilter(3)}>{t('page.portfolio-section.text-btn-window-apps')}</button>
                                                <button className="btn-general-portfolio-section" onClick={() => this.onClickFilter(4)}>{t('page.portfolio-section.text-btn-class-library')}</button>
                                                <button className="btn-general-portfolio-section" onClick={() => this.onClickFilter(5)}>{t('page.portfolio-section.text-btn-workshop')}</button>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div class="row row-image-portfolio-section">
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 1 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog(1)}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-kma-marketplace-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project1')}</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 1 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog(2)}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-ka-auto-smartq-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project2')}</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 1 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog(3)}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-ekyc-app-image2.jpg')} />
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project3')}</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 1 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog(4)}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-seanheng-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project4')}</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 4 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog(5)}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" style={{ border: '1px solid' }} src={require('../../Assets/Images/portfolio-thai-smart-card-reader-library-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project5')}</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 3 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog(6)}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-scb-stel-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project6')}</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 2 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog(7)}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-kbol-backend-fx-special-rate-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project7')}</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 4 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog(8)}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-giving-forward-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project8')}</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 5 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog(9)}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-skill-development-workshop-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project9')}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="skills">
                                <div className="row">
                                    <div className="skills-section">
                                        <div className="col-12">
                                            <div className="text-header-center">{t('page.skills-section.text-title')}</div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="contact">
                                <div className="row">
                                    <div className="contact-section">
                                        <div className="col-12">
                                            <div className="text-header-center">{t('page.contact-section.text-title')}</div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </LayoutMain>
                <PortfolioDialog />
            </React.Fragment >
        );
    }
}

const mapStateToProps = state => ({
    Language: state.Language,
});

const mapDispatchToProps = dispatch => ({
    WebAction: bindActionCreators(webAction, dispatch),
    PortfolioDialogAction: bindActionCreators(portfolioDialogAction, dispatch)
});

Main.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(connect(mapStateToProps, mapDispatchToProps)(Main));