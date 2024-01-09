import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { translate } from 'react-switch-lang';
import { IsEmpty, CheckEmailFormat, IsSqlInjection } from '../../Helpers/HelperFunction';
import emailjs from 'emailjs-com';
import $ from "jquery";
import PropTypes from 'prop-types';
import AlertDialog from '../../Components/Dialog/AlertDialog';
import Loading from '../../Components/Loader/Loading';
import * as alertDialogAction from '../../Actions/Dialog/AlertDialogAction';

class Contact_Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
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
        const { loading, senderNameShowError, senderEmailShowError, senderSubjectShowError,
            senderMessageShowError, senderNameError, senderEmailError, senderSubjectError,
            senderMessageError, requestInputCheck } = this.state;

        return (
            <React.Fragment>
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
    AlertDialogAction: bindActionCreators(alertDialogAction, dispatch),
});

Contact_Section.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(connect(mapStateToProps, mapDispatchToProps)(Contact_Section));