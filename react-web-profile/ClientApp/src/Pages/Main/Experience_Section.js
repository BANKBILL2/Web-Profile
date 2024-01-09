import React from "react";
import { connect } from "react-redux";
import { translate } from 'react-switch-lang';
import PropTypes from 'prop-types';

class Experience_Section extends React.Component {
    render() {
        const { t } = this.props;

        return (
            <React.Fragment>
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
            </React.Fragment >
        );
    }
}

const mapStateToProps = state => ({
    Language: state.Language,
});

Experience_Section.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(connect(mapStateToProps)(Experience_Section));