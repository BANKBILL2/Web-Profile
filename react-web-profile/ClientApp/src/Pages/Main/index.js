import React from "react";
import LayoutMain from "../../Components/Layout/LayoutMain";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { translate } from 'react-switch-lang';
import { IsEmpty, CheckEmailFormat, IsSqlInjection } from '../../Helpers/HelperFunction';
import emailjs from 'emailjs-com';
import $ from "jquery";
import PropTypes from 'prop-types';
import AlertDialog from '../../Components/Dialog/AlertDialog';
import PortfolioDialog from '../../Components/Dialog/PortfolioDialog';
import Loading from '../../Components/Loader/Loading';
import * as webAction from '../../Actions/Web/WebAction';
import * as alertDialogAction from '../../Actions/Dialog/AlertDialogAction';
import * as portfolioDialogAction from '../../Actions/Dialog/PortfolioDialogAction';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            filterTypeSelected: 0,
            filterType: [
                { id: 0, value: 'All' },
                { id: 1, value: 'Web Apps' },
                { id: 2, value: 'Web Backend' },
                { id: 3, value: 'Window Apps' },
                { id: 4, value: 'Class Library' },
                { id: 5, value: 'Workshop' }
            ],
            skillsList: [],
            senderName: "",
            senderEmail: "",
            senderSubject: "",
            senderMessage: "",
            senderNameShowError: false,
            senderEmailShowError: false,
            senderSubjectShowError: false,
            senderMessageShowError: false,
            senderNameError: "",
            senderEmailError: "",
            senderSubjectError: "",
            senderMessageError: "",
            requestInputCheck: false
        };
    }

    componentDidMount() {
        this.getSkillsList();
    }

    componentDidUpdate(prevProps) {
        const { Language } = this.props
        if (prevProps.Language.language !== Language.language) this.getSkillsList();
    }

    getSkillsList() {
        const { t } = this.props;
        this.setState({
            skillsList: [
                { name: t('page.skills-section.text-skill-title1'), desc: t('page.skills-section.text-skill-desc1'), imageHeight: '100px', imagePath: require('../../Assets/Images/react-logo.png') },
                { name: t('page.skills-section.text-skill-title2'), desc: t('page.skills-section.text-skill-desc2'), imageHeight: '100px', imagePath: require('../../Assets/Images/bootstrap_logo.png') },
                { name: t('page.skills-section.text-skill-title3'), desc: t('page.skills-section.text-skill-desc3'), imageHeight: '100px', imagePath: require('../../Assets/Images/jquery_logo.png') },
                { name: t('page.skills-section.text-skill-title4'), desc: t('page.skills-section.text-skill-desc4'), imageHeight: '100px', imagePath: require('../../Assets/Images/aspnet_logo.png') },
                { name: t('page.skills-section.text-skill-title5'), desc: t('page.skills-section.text-skill-desc5'), imageHeight: '100px', imagePath: require('../../Assets/Images/wpf_logo.png') },
                { name: t('page.skills-section.text-skill-title6'), desc: t('page.skills-section.text-skill-desc6'), imageHeight: '100px', imagePath: require('../../Assets/Images/xamarin-logo.png') },
                { name: t('page.skills-section.text-skill-title7'), desc: t('page.skills-section.text-skill-desc7'), imageHeight: '75px', imagePath: require('../../Assets/Images/flutter-logo.png') },
                { name: t('page.skills-section.text-skill-title8'), desc: t('page.skills-section.text-skill-desc8'), imageHeight: '75px', imagePath: require('../../Assets/Images/spring-boot-logo.png') },
                { name: t('page.skills-section.text-skill-title9'), desc: t('page.skills-section.text-skill-desc9'), imageHeight: '100px', imagePath: require('../../Assets/Images/sql-server-logo.png') },
                { name: t('page.skills-section.text-skill-title10'), desc: t('page.skills-section.text-skill-desc10'), imageHeight: '100px', imagePath: require('../../Assets/Images/mysql_logo.png') },
                { name: t('page.skills-section.text-skill-title11'), desc: t('page.skills-section.text-skill-desc11'), imageHeight: '100px', imagePath: require('../../Assets/Images/kibana_logo.png') },
                { name: t('page.skills-section.text-skill-title12'), desc: t('page.skills-section.text-skill-desc12'), imageHeight: '70px', imagePath: require('../../Assets/Images/Jenkins_logo.png') },
                { name: t('page.skills-section.text-skill-title13'), desc: t('page.skills-section.text-skill-desc13'), imageHeight: '70px', imagePath: require('../../Assets/Images/microsoft-office-logo.png') },
                { name: t('page.skills-section.text-skill-title14'), desc: t('page.skills-section.text-skill-desc14'), imageHeight: '100px', imagePath: require('../../Assets/Images/wordpress-logo.png') },
                { name: t('page.skills-section.text-skill-title15'), desc: t('page.skills-section.text-skill-desc15'), imageHeight: '70px', imagePath: require('../../Assets/Images/photoshop_logo.png') },
                { name: t('page.skills-section.text-skill-title16'), desc: t('page.skills-section.text-skill-desc16'), imageHeight: '100px', imagePath: require('../../Assets/Images/vegas_pro_logo.png') },
            ]
        });
    }

    onClickFilter(type) {
        this.setState({ filterTypeSelected: type });
    }

    onClickOpenDialog(type) {
        const { PortfolioDialogAction } = this.props;

        PortfolioDialogAction.setPortfolioDialog(true, type);
    }

    async onClickSend() {
        const { t, AlertDialogAction } = this.props;
        const { senderName, senderEmail, senderSubject, senderMessage } = this.state;

        try {
            this.setState({ loading: true });

            if (IsSqlInjection(senderName) || IsSqlInjection(senderEmail) || IsSqlInjection(senderSubject) || IsSqlInjection(senderMessage)) {
                AlertDialogAction.setAlertDialog(true, t('page.contact-section.text-sql-injection-error'));
                return;
            }

            const templateParams = {
                sender_name: senderName,
                sender_email: senderEmail,
                sender_subject: senderSubject,
                sender_message: senderMessage
            };

            const response = await emailjs.send('service_3gugma8', 'template_0m9b78g', templateParams, '1PRE83bnFFtfKIumM')

            if (response.status === 200) {
                this.clearSenderInput();
                AlertDialogAction.setAlertDialog(true, t('page.contact-section.text-send-data-success'));
            }
            else AlertDialogAction.setAlertDialog(true, t('page.contact-section.text-send-data-fail') + response.text);

        } catch (error) {
            console.log('onClickSend: ', error);
            AlertDialogAction.setAlertDialog(true, error.text);
        } finally {
            this.setState({ loading: false });
        }
    }

    clearSenderInput() {
        this.setState({ senderName: "", senderEmail: "", senderSubject: "", senderMessage: "", requestInputCheck: false });
        $(document).ready(async function () {
            try {
                $('input').val('');
                $('textarea').val('');
            } catch (error) {
                console.log('clearSenderInput');
            }
        });
    }

    handleSenderName = (event) => {
        const value = event.target.value;
        this.validateInput(event);

        this.setState({ senderName: value }, () => {
            this.requestInputCheck();
        });
    }

    handleSenderEmail = (event) => {
        const value = event.target.value;
        this.validateInput(event);

        this.setState({ senderEmail: value }, () => {
            this.requestInputCheck();
        });
    }

    handleSenderSubject = (event) => {
        const value = event.target.value;
        this.validateInput(event);

        this.setState({ senderSubject: value }, () => {
            this.requestInputCheck();
        });
    }

    handleSenderMessage = (event) => {
        const value = event.target.value;
        this.validateInput(event);

        this.setState({ senderMessage: value }, () => {
            this.requestInputCheck();
        });
    }

    validateInput(event) {
        const { t } = this.props;

        if (event.target.id === 'senderName') {
            if (IsEmpty(event.target.value)) {
                this.setState({
                    senderNameShowError: true,
                    senderNameError: t('page.contact-section.input-name-error2')
                });
            }
            else {
                const regexp = new RegExp("^([ก-๛a-zA-Z ]+)$");
                if (!regexp.test(event.target.value))//validate th-eng Name
                {
                    this.setState({
                        senderNameShowError: true,
                        senderNameError: t('page.contact-section.input-name-error')
                    });
                }
                else {
                    this.setState({ senderNameShowError: false });
                }
            }
        }
        else if (event.target.id === 'senderEmail') {
            if (IsEmpty(event.target.value)) {
                this.setState({
                    senderEmailShowError: true,
                    senderEmailError: t('page.contact-section.input-email-error2')
                });
            }
            else {
                if (!CheckEmailFormat(event.target.value)) //validate Number
                {
                    this.setState({
                        senderEmailShowError: true,
                        senderEmailError: t('page.contact-section.input-email-error')
                    });
                } else {
                    this.setState({ senderEmailShowError: false });
                }
            }
        }
        else if (event.target.id === 'senderSubject') {
            if (IsEmpty(event.target.value)) {
                this.setState({
                    senderSubjectShowError: true,
                    senderSubjectError: t('page.contact-section.input-subject-error')
                });
            }
            else {
                this.setState({ senderSubjectShowError: false });
            }
        }
        else if (event.target.id === 'senderMessage') {
            if (IsEmpty(event.target.value)) {
                this.setState({
                    senderMessageShowError: true,
                    senderMessageError: t('page.contact-section.input-message-error')
                });
            }
            else {
                this.setState({ senderMessageShowError: false });
            }
        }
    }

    requestInputCheck() {
        const { senderName, senderEmail, senderSubject, senderMessage, senderNameShowError,
            senderEmailShowError, senderSubjectShowError, senderMessageShowError } = this.state;

        if (!IsEmpty(senderName) && !IsEmpty(senderEmail) && !IsEmpty(senderSubject) &&
            !IsEmpty(senderMessage) && !senderNameShowError && !senderEmailShowError &&
            !senderSubjectShowError && !senderMessageShowError) {
            this.setState({ requestInputCheck: true });
        }
        else {
            this.setState({ requestInputCheck: false });
        }
    }

    render() {
        const { t } = this.props;
        const { loading, filterTypeSelected, skillsList, senderNameShowError, senderEmailShowError,
            senderSubjectShowError, senderMessageShowError, senderNameError, senderEmailError,
            senderSubjectError, senderMessageError, requestInputCheck } = this.state;

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
                                        <div className="col-12">
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
                                                <div className="mb-5 heading-border-white" />
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
                                            <div className="mb-5 heading-border-black" />
                                        </div>
                                        <div className="col-12">
                                            <div className="port-head-cont-portfolio-section">
                                                <button className={filterTypeSelected === 0 ? "btn-general-portfolio-section active" : "btn-general-portfolio-section"} onClick={() => this.onClickFilter(0)}>{t('page.portfolio-section.text-btn-all')}</button>
                                                <button className={filterTypeSelected === 1 ? "btn-general-portfolio-section active" : "btn-general-portfolio-section"} onClick={() => this.onClickFilter(1)}>{t('page.portfolio-section.text-btn-web-apps')}</button>
                                                <button className={filterTypeSelected === 2 ? "btn-general-portfolio-section active" : "btn-general-portfolio-section"} onClick={() => this.onClickFilter(2)}>{t('page.portfolio-section.text-btn-web-backend')}</button>
                                                <button className={filterTypeSelected === 3 ? "btn-general-portfolio-section active" : "btn-general-portfolio-section"} onClick={() => this.onClickFilter(3)}>{t('page.portfolio-section.text-btn-window-apps')}</button>
                                                <button className={filterTypeSelected === 4 ? "btn-general-portfolio-section active" : "btn-general-portfolio-section"} onClick={() => this.onClickFilter(4)}>{t('page.portfolio-section.text-btn-class-library')}</button>
                                                <button className={filterTypeSelected === 5 ? "btn-general-portfolio-section active" : "btn-general-portfolio-section"} onClick={() => this.onClickFilter(5)}>{t('page.portfolio-section.text-btn-workshop')}</button>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row row-image-portfolio-section">
                                                <div className="col-md-4 col-sm-6 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 1 ? null : { display: 'none' }}>
                                                    <div className="frame-image-portfolio-section">
                                                        <div className="caption-port" onClick={() => this.onClickOpenDialog(1)}>
                                                            <div className="caption-port-content">
                                                                <div className="fa fa-search-plus fa-3x" />
                                                            </div>
                                                        </div>
                                                        <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-kma-marketplace-image1.jpg')} />
                                                    </div>
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project1')}</div>
                                                </div>
                                                <div className="col-md-4 col-sm-6 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 1 ? null : { display: 'none' }}>
                                                    <div className="frame-image-portfolio-section">
                                                        <div className="caption-port" onClick={() => this.onClickOpenDialog(2)}>
                                                            <div className="caption-port-content">
                                                                <div className="fa fa-search-plus fa-3x" />
                                                            </div>
                                                        </div>
                                                        <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-ka-auto-smartq-image1.jpg')} />
                                                    </div>
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project2')}</div>
                                                </div>
                                                <div className="col-md-4 col-sm-6 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 1 ? null : { display: 'none' }}>
                                                    <div className="frame-image-portfolio-section">
                                                        <div className="caption-port" onClick={() => this.onClickOpenDialog(3)}>
                                                            <div className="caption-port-content">
                                                                <div className="fa fa-search-plus fa-3x" />
                                                            </div>
                                                        </div>
                                                        <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-ekyc-app-image2.jpg')} />
                                                    </div>
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project3')}</div>
                                                </div>
                                                <div className="col-md-4 col-sm-6 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 1 ? null : { display: 'none' }}>
                                                    <div className="frame-image-portfolio-section">
                                                        <div className="caption-port" onClick={() => this.onClickOpenDialog(4)}>
                                                            <div className="caption-port-content">
                                                                <div className="fa fa-search-plus fa-3x" />
                                                            </div>
                                                        </div>
                                                        <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-seanheng-image1.jpg')} />
                                                    </div>
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project4')}</div>
                                                </div>
                                                <div className="col-md-4 col-sm-6 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 4 ? null : { display: 'none' }}>
                                                    <div className="frame-image-portfolio-section">
                                                        <div className="caption-port" onClick={() => this.onClickOpenDialog(5)}>
                                                            <div className="caption-port-content">
                                                                <div className="fa fa-search-plus fa-3x" />
                                                            </div>
                                                        </div>
                                                        <img className="image-portfolio-section" style={{ border: '1px solid' }} src={require('../../Assets/Images/portfolio-thai-smart-card-reader-library-image1.jpg')} />
                                                    </div>
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project5')}</div>
                                                </div>
                                                <div className="col-md-4 col-sm-6 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 3 ? null : { display: 'none' }}>
                                                    <div className="frame-image-portfolio-section">
                                                        <div className="caption-port" onClick={() => this.onClickOpenDialog(6)}>
                                                            <div className="caption-port-content">
                                                                <div className="fa fa-search-plus fa-3x" />
                                                            </div>
                                                        </div>
                                                        <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-scb-stel-image1.jpg')} />
                                                    </div>
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project6')}</div>
                                                </div>
                                                <div className="col-md-4 col-sm-6 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 2 ? null : { display: 'none' }}>
                                                    <div className="frame-image-portfolio-section">
                                                        <div className="caption-port" onClick={() => this.onClickOpenDialog(7)}>
                                                            <div className="caption-port-content">
                                                                <div className="fa fa-search-plus fa-3x" />
                                                            </div>
                                                        </div>
                                                        <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-kbol-backend-fx-special-rate-image1.jpg')} />
                                                    </div>
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project7')}</div>
                                                </div>
                                                <div className="col-md-4 col-sm-6 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 4 ? null : { display: 'none' }}>
                                                    <div className="frame-image-portfolio-section">
                                                        <div className="caption-port" onClick={() => this.onClickOpenDialog(8)}>
                                                            <div className="caption-port-content">
                                                                <div className="fa fa-search-plus fa-3x" />
                                                            </div>
                                                        </div>
                                                        <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-giving-forward-image1.jpg')} />
                                                    </div>
                                                    <div className="text-image-portfolio-section">{t('page.portfolio-section.text-project8')}</div>
                                                </div>
                                                <div className="col-md-4 col-sm-6 column-image-portfolio-section" style={filterTypeSelected === 0 || filterTypeSelected === 5 ? null : { display: 'none' }}>
                                                    <div className="frame-image-portfolio-section">
                                                        <div className="caption-port" onClick={() => this.onClickOpenDialog(9)}>
                                                            <div className="caption-port-content">
                                                                <div className="fa fa-search-plus fa-3x" />
                                                            </div>
                                                        </div>
                                                        <img className="image-portfolio-section" src={require('../../Assets/Images/portfolio-skill-development-workshop-image1.jpg')} />
                                                    </div>
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
                                        <div className="background-cover-skill-section">
                                            <div className="col-12">
                                                <div className="text-header-center-skill-section">{t('page.skills-section.text-title')}</div>
                                            </div>
                                            <div className="col-12 p-lg-5 p-3">
                                                <div className="row">
                                                    {skillsList.map(({ name, desc, imageHeight, imagePath }, i) =>
                                                        <div id={`skill-id${i}`} className="col-md-3 col-sm-6">
                                                            <div className="skill-item-skill-section">
                                                                <div className="skill-item-image-cover-skill-section">
                                                                    <img className="skill-item-image-skill-section" src={imagePath} />
                                                                </div>
                                                                <h2><span className="counter">{name}</span></h2>
                                                                <div>{desc}</div>
                                                            </div>
                                                        </div>
                                                    )};
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section id="contact">
                                <div className="row">
                                    <div className="contact-section p-3 p-lg-5 d-flex flex-column">
                                        <div className="text-header-center" style={{ margin: '0px 0px 50px 0px' }}>{t('page.contact-section.text-title')}</div>
                                        <div className="row text-contact-section">
                                            <div className="col-md-9">
                                                <div class="heading-border-light"></div>
                                                <p>{t('page.contact-section.text-sentence')}</p>
                                                <div className="row con-form-contact-section">
                                                    <div className="col-md-12">
                                                        <input id="senderName" type="text" name="full-name" placeholder={t('page.contact-section.text-name')} className="form-control" onChange={this.handleSenderName} />
                                                        {senderNameShowError ?
                                                            <div className="error-contact-section">{senderNameError}</div>
                                                            :
                                                            null
                                                        }
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input id="senderEmail" type="text" name="email" placeholder={t('page.contact-section.text-email')} className="form-control" onChange={this.handleSenderEmail} />
                                                        {senderEmailShowError ?
                                                            <div className="error-contact-section">{senderEmailError}</div>
                                                            :
                                                            null
                                                        }
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input id="senderSubject" type="text" name="subject" placeholder={t('page.contact-section.text-subject')} className="form-control" onChange={this.handleSenderSubject} />
                                                        {senderSubjectShowError ?
                                                            <div className="error-contact-section">{senderSubjectError}</div>
                                                            :
                                                            null
                                                        }
                                                    </div>
                                                    <div className="col-md-12">
                                                        <textarea id="senderMessage" placeholder={t('page.contact-section.text-message')} onChange={this.handleSenderMessage} />
                                                        {senderMessageShowError ?
                                                            <div className="error-contact-section">{senderMessageError}</div>
                                                            :
                                                            null
                                                        }
                                                    </div>
                                                    <div className="col-md-12 sub-but contact-side-button">
                                                        <button className={`btn-contact-section btn-general-contact-section ${requestInputCheck ? 'btn-send-contact-section' : 'btn-send-contact-section-disable'}`} role="button" disabled={requestInputCheck ? false : true} onClick={() => this.onClickSend()}>{t('page.contact-section.text-btn-send')}</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-12">
                                                <div className="contact-cont2">
                                                    <div className="contact-phone contact-side-desc-contact-section contact-box-desc-contact-section">
                                                        <h3>
                                                            <i className="fa fa-phone cl-atlantis fa-1x" /> {t('page.contact-section.text-phone')}
                                                        </h3>
                                                        <p>095-630-3856</p>
                                                    </div>
                                                    <div className="contact-mail contact-side-desc-contact-section contact-box-desc-contact-section">
                                                        <h3>
                                                            <i className="fa fa-envelope cl-atlantis fa-1x" /> {t('page.contact-section.text-email')}
                                                        </h3>
                                                        <address className="">
                                                            Email: <a href="mailto:thiwatpiyasupkij@gmail.com" className="address-details-contact-section">thiwatpiyasupkij@gmail.com</a>
                                                        </address>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </LayoutMain >
                <PortfolioDialog />
                <AlertDialog />
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
    AlertDialogAction: bindActionCreators(alertDialogAction, dispatch),
    PortfolioDialogAction: bindActionCreators(portfolioDialogAction, dispatch)
});

Main.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(connect(mapStateToProps, mapDispatchToProps)(Main));