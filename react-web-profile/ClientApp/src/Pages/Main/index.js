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

        PortfolioDialogAction.setPortfolioDialog(true, EnumPortfolioProject(type));
    }

    render() {
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
                                            <div className='text-header-primary'>Thiwat</div>
                                            <div className='text-header-normal'>Piyasupkij</div>
                                        </div>
                                        <div className="col-12">
                                            <div className="text-header-sub">
                                                Learning, Doing, <a style={{ color: 'lightseagreen' }}>Create New Possibilities</a>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="text-sentence">
                                                I am a Full Stack Web Developer with over 4 years of experience, collaborating with leading banking partners in Thailand. With the skills and abilities I possess, I am confident in contributing to achieving the goals and success of the team.
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
                                                <div className="text-header-center-experience-section">Experience</div>
                                            </div>
                                            <div className="col-12">
                                                <div class="mb-5 heading-border-white" />
                                            </div>
                                            <div className="col-12">
                                                <div className="text-header-subject-experience-section">
                                                    <i className="fa fa-laptop" /> Full Stack Web Developer
                                                </div>
                                                <div className="text-header-sub-subject-experience-section">October 2018 - Present</div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-subject-experience-section">
                                                    Hatari NEXT and CODE-D 789 are the companies where I began my career as a programmer. They specialize in digital business at the organizational level, with over 10 years of expertise. I have had the privilege of working with them on various projects, including the development of organizational software, mobile applications, and websites. These projects are intricately integrated with the core-banking system of a globally renowned Thai financial institution.
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-subject-experience-section">
                                                    Some notable projects I have contributed to include the Marketplace website for KMA App of KrungSri Ayudhya Bank, WPF STEL for counter staff of Siam Commercial Bank, and the Seanheng website for managing the online business of a company's vendors.
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-subject-experience-section">
                                                    Over the course of my four-year collaboration with them, I have had the opportunity to develop both hard and soft skills. This experience has opened doors for skill enhancement and has allowed me to showcase my abilities through successful project developments. I genuinely appreciate everyone in the company, as I believe reaching this point would not have been possible without the teamwork and collective efforts.
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-subject-experience-section">
                                                    Looking for a new job this time, I see this as an opportunity for mutual acquaintance and learning. I am confident that my skills and experiences can contribute to solving problems and propel the organization toward its goals. I hope for the chance to work together. Thank you
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="text-subject-experience-section" style={{ textAlign: 'end' }}>
                                                    Thiwat Piyasupkij
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
                                            <div className="text-header-center">Portfolio</div>
                                        </div>
                                        <div className="col-12">
                                            <div class="mb-5 heading-border-black" />
                                        </div>
                                        <div className="col-12">
                                            <div class="port-head-cont-portfolio-section">
                                                <button className="btn-general-portfolio-section" onClick={() => this.onClickFilter(0)}>All</button>
                                                <button className="btn-general-portfolio-section" onClick={() => this.onClickFilter(1)}>Web Apps</button>
                                                <button className="btn-general-portfolio-section" onClick={() => this.onClickFilter(2)}>Web Backend</button>
                                                <button className="btn-general-portfolio-section" onClick={() => this.onClickFilter(3)}>Window Apps</button>
                                                <button className="btn-general-portfolio-section" onClick={() => this.onClickFilter(4)}>Class Library</button>
                                                <button className="btn-general-portfolio-section" onClick={() => this.onClickFilter(5)}>Workshop</button>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div class="row row-image-portfolio-section">
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 1 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog('KMA Marketplace')}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-kma-marketplace-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">KMA Marketplace</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 1 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog('KA Auto Softkeypad')}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-ka-auto-softkeypad-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">KA Auto Softkeypad</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 1 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog('Ekyc App')}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-ekyc-app-image2.jpg')} />
                                                    <div className="text-image-portfolio-section">Ekyc App</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 1 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog('Seanheng Chatbot')}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-seanheng-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">Seanheng Chatbot</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 4 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog('Thai Smart Card Reader Library')}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" style={{ border: '1px solid' }} src={require('../../Assets/Images/portfolio-thai-smart-card-reader-library-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">Thai Smart Card Reader Library</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 3 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog('WPF Smart Teller')}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-wpf-stel-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">WPF Smart Teller</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 2 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog('Kbol Backend FX Special Rate (SWIFT)')}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-kbol-backend-fx-special-rate-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">Kbol Backend FX Special Rate (SWIFT)</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 4 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog('Giving Forward Api Adapter Library')}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-giving-forward-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">Giving Forward Api Adapter Library</div>
                                                </div>
                                                <div className="col-4 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 5 ? null : { display: 'none' }}>
                                                    <div className="caption-port" onClick={() => this.onClickOpenDialog('Skill Development Workshop')}>
                                                        <div className="caption-port-content">
                                                            <div className="fa fa-search-plus fa-3x" />
                                                        </div>
                                                    </div>
                                                    <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-skill-development-workshop-image1.jpg')} />
                                                    <div className="text-image-portfolio-section">Skill Development Workshop</div>
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
                                            <div className="text-header-center">Skills</div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="contact">
                                <div className="row">
                                    <div className="contact-section">
                                        <div className="col-12">
                                            <div className="text-header-center">Contact</div>
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