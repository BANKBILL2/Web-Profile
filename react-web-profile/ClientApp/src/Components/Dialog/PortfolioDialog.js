import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { translate } from 'react-switch-lang';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import * as portfolioDialogAction from "../../Actions/Dialog/PortfolioDialogAction";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

export class PortfolioDialog extends React.Component {

    onClickClose = () => {
        const { PortfolioDialogAction } = this.props;
        PortfolioDialogAction.setPortfolioDialog(false, '');
    };

    render() {

        const { t, PortfolioDialog } = this.props;
        let maxWidth, minHeight;
        let theme = createMuiTheme({
            overrides: {
                MuiDialog: {
                    paperFullWidth: {
                        maxWidth: '550px',
                        minHeight: '225px',
                        borderRadius: '0px',
                        border: '10px solid #dbdbdb',
                        zoom: '80%'
                    }
                },
            }
        });

        theme = createMuiTheme({
            overrides: {
                MuiDialog: {
                    paperFullWidth: {
                        maxWidth: maxWidth,
                        minHeight: minHeight,
                        borderRadius: '0px',
                        border: '10px solid #dbdbdb'
                    }
                },
                MuiDialogContent: {
                    root: {
                        flex: '0.1 auto'
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
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        style={{ zIndex: '10002' }}
                    >
                        <DialogContent style={{ padding: '0px', paddingTop: '0px' }}>
                            <div className="layout">
                                <div className="transfer-alert-detail2">
                                    <div className="alert-detail">Test</div>
                                </div>
                            </div>
                        </DialogContent>
                        <center>
                            <DialogActions>
                                <button onClick={() => this.onClickClose()} type="button" className="alert-cancel-button">Close</button>
                            </DialogActions>
                        </center>
                    </Dialog>
                </ThemeProvider>
                }
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
