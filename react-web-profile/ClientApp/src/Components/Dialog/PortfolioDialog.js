import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { translate } from 'react-switch-lang';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { EnumPortfolioProject } from '../../Helpers/Enum';
import PropTypes from 'prop-types';
import * as portfolioDialogAction from "../../Actions/Dialog/PortfolioDialogAction";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

export class PortfolioDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: 0,
        };
        window.addEventListener('resize', this.updateScreenWidth);
    }

    componentDidMount() {
        this.updateScreenWidth();
    }

    updateScreenWidth = () => {
        this.setState({ screenWidth: window.innerWidth });
    };

    onClickClose = (type) => {
        const { PortfolioDialogAction } = this.props;
        PortfolioDialogAction.setPortfolioDialog(false, type);
    };

    GetImagePath(type) {
        switch (EnumPortfolioProject(type)) {
            case 'KMA Marketplace':
                return require('../../Assets/Images/portfolio-kma-marketplace-image2.jpg');
            case 'Krungsri Auto SmartQ':
                return require('../../Assets/Images/portfolio-ka-auto-smartq-image2.jpg');
            case 'Ekyc App':
                return require('../../Assets/Images/portfolio-ekyc-app-image3.jpg');
            case 'Seanheng Chatbot':
                return require('../../Assets/Images/portfolio-seanheng-image2.jpg');
            case 'Thai Smart Card Reader Library':
                return require('../../Assets/Images/portfolio-thai-smart-card-reader-library-image2.jpg');
            case 'SCB Smart Teller':
                return require('../../Assets/Images/portfolio-scb-stel-image2.jpg');
            case 'Kbol Backend FX Special Rate (SWIFT)':
                return require('../../Assets/Images/portfolio-kbol-backend-fx-special-rate-image2.jpg');
            case 'Giving Forward Api Adapter Library':
                return require('../../Assets/Images/portfolio-giving-forward-image2.jpg');
            case 'Skill Development Workshop':
                return require('../../Assets/Images/portfolio-skill-development-workshop-image2.jpg');
            default:
                return require('../../Assets/Images/portfolio-kma-marketplace-image2.jpg');
        } 
    }

    render() {
        const { screenWidth } = this.state;
        const { t, PortfolioDialog } = this.props;
        const theme = createMuiTheme({
            overrides: {
                MuiDialog: {
                    paper: {
                        overflowY: 'none'
                    },
                    paperFullWidth: {
                        maxWidth: '1280px',
                        minHeight: '650px',
                        borderRadius: '10px',
                        overflowX: 'unset',
                        paddingBottom: '20px'
                    }
                },
                MuiDialogContent: {
                    root: {
                        flex: '0.1 auto',
                        overflowY: 'none'
                    }
                }
            }
        });

        return (
            <React.Fragment>
                <ThemeProvider theme={theme}>
                    <Dialog
                        fullWidth={true}
                        maxWidth={true}
                        open={PortfolioDialog.dialogStatus}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        style={{ zIndex: '10002' }}
                    >
                        <DialogContent style={{ padding: '0px', paddingTop: '0px' }}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="text-header-center-portfolio-section">{t(`component.portfolio-dialog.project${PortfolioDialog.type}.text-project${PortfolioDialog.type}-title`)}</div>
                                    <div className="close-modal-portfolio-section" type="button" onClick={() => this.onClickClose(PortfolioDialog.type)}>
                                        <div className="lr">
                                            <div className="rl"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-5 heading-border-black" />
                                </div>
                                {screenWidth > 768 ?
                                    <br />
                                    :
                                    null
                                }
                                <div className="col-12" style={{ marginTop: screenWidth > 768 ? '15px' : '' }}>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 image-portfolio-cover-section-dialog">
                                            <img className="image-portfolio-section-dialog" src={this.GetImagePath(PortfolioDialog.type)} />
                                        </div>
                                        <div className="col-md-6 col-sm-12" style={{ padding: '0px 75px 0px 35px' }}>
                                            <p className="image-portfolio-section-dialog-text-desc">
                                                {t(`component.portfolio-dialog.project${PortfolioDialog.type}.text-project${PortfolioDialog.type}-subject`)}
                                            </p>
                                            <ul className="image-portfolio-section-dialog-text-detail">
                                                <li>Client: <strong>{t(`component.portfolio-dialog.project${PortfolioDialog.type}.text-project${PortfolioDialog.type}-client`)}</strong></li>
                                                <li>Date: <strong>{t(`component.portfolio-dialog.project${PortfolioDialog.type}.text-project${PortfolioDialog.type}-date`)}</strong></li>
                                                <li>Service: <strong>{t(`component.portfolio-dialog.project${PortfolioDialog.type}.text-project${PortfolioDialog.type}-service`)}</strong></li>
                                            </ul>
                                            <button className="btn-close-portfolio-section" onClick={() => this.onClickClose(PortfolioDialog.type)}>
                                                <i className="fa fa-times" /> {t('component.portfolio-dialog.text-btn-close')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    PortfolioDialog: state.PortfolioDialog
});

const mapDispatchToProps = dispatch => ({
    PortfolioDialogAction: bindActionCreators(portfolioDialogAction, dispatch)
});

PortfolioDialog.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(connect(mapStateToProps, mapDispatchToProps)(PortfolioDialog));
