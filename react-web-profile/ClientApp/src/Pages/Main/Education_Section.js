import React from "react";
import { connect } from "react-redux";
import { translate } from 'react-switch-lang';
import PropTypes from 'prop-types';

class Education_Section extends React.Component {
    render() {
        const { t } = this.props;

        return (
            <React.Fragment>
                <section id="education">
                    <div className="row">
                        <div className="education-section">
                            <div className="background-cover-education-section">
                                <div className="col-12">
                                    <div className="text-header-center-education-section">{t('page.education-section.text-title')}</div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-5 heading-border-black" />
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-12 frame1-education-section">
                                            <div className="img-wrap-education-section">
                                                <div>
                                                    <div className="img-education-section">
                                                        <img src={require('../../Assets/Images/education-image1.jpg')} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="img-inner-education-section">
                                                        <img src={require('../../Assets/Images/education-image2.jpg')} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12 frame2-education-section">
                                            <div className="content-education-section">
                                                <span className="date-education-section swu">{t('page.education-section.text-date-swu')}</span>
                                                <h5 className="title-education-section"><b>{t('page.education-section.text-title-swu')}</b></h5>
                                                <p className="description-education-section">{t('page.education-section.text-description-swu')}</p>
                                            </div>
                                            <div className="content-education-section">
                                                <span className="date-education-section dpu">{t('page.education-section.text-date-dpu')}</span>
                                                <h5 className="title-education-section"><b>{t('page.education-section.text-title-dpu')}</b></h5>
                                                <p className="description-education-section">{t('page.education-section.text-description-dpu')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

const mapStateToProps = state => ({
    Language: state.Language,
});

Education_Section.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(connect(mapStateToProps)(Education_Section));