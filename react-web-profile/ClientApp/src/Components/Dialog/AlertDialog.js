import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { translate } from 'react-switch-lang';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import * as alertDialogAction from "../../Actions/Dialog/AlertDialogAction";

export class AlertDialog extends React.Component {

    onClose = () => {
        const { AlertDialogAction } = this.props;
        AlertDialogAction.setAlertDialog(false, "");
    };

    render() {
        const { t, AlertDialog } = this.props;
        const theme = createTheme({
            overrides: {
                MuiDialog: {
                    paperFullWidth: {
                        maxWidth: '550px',
                        minHeight: '225px',
                        borderRadius: '10px',
                        overflow: 'unset'
                    }
                },
                MuiDialogContent: {
                    root: {
                        flex: '0.1 auto'
                    }
                },
                MuiDialogActions: {
                    root: {
                        justifyContent: 'center'
                    }
                },
            }
        });

        return (
            <React.Fragment>
                <ThemeProvider theme={theme}>
                    <Dialog
                        fullWidth={true}
                        maxWidth={true}
                        open={AlertDialog.alertstatus}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        style={{ zIndex: '10002' }}
                    >
                        <DialogContent style={{ padding: '0px', paddingTop: '0px' }}>
                            <div className="alert-detail">
                                <div className="alert-message">{AlertDialog.textbody ? AlertDialog.textbody : ''}</div>
                            </div>
                        </DialogContent>
                        <center>
                            <DialogActions>
                                <button onClick={() => this.onClose()} type="button" className="btn-close-portfolio-section">{t('component.alert-dialog.text-btn-close')}</button>
                            </DialogActions>
                        </center>
                    </Dialog>
                </ThemeProvider>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    AlertDialog: state.AlertDialog,
});

const mapDispatchToProps = dispatch => ({
    AlertDialogAction: bindActionCreators(alertDialogAction, dispatch),
});

AlertDialog.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(connect(mapStateToProps, mapDispatchToProps)(AlertDialog));
