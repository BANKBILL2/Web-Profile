import React from "react";
import { connect } from "react-redux";
import { translate } from 'react-switch-lang';
import PropTypes from 'prop-types';

class About_Section extends React.Component {
    render() {
        const { t } = this.props;

        return (
            <React.Fragment>
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
            </React.Fragment >
        );
    }
}

const mapStateToProps = state => ({
    Language: state.Language,
});

About_Section.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(connect(mapStateToProps)(About_Section));