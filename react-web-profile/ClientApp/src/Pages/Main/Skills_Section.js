import React from "react";
import { connect } from "react-redux";
import { translate } from 'react-switch-lang';
import PropTypes from 'prop-types';

class Skills_Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skillsList: [],
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

    render() {
        const { t } = this.props;
        const { skillsList } = this.state;

        return (
            <React.Fragment>
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
            </React.Fragment >
        );
    }
}

const mapStateToProps = state => ({
    Language: state.Language,
});

Skills_Section.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(connect(mapStateToProps)(Skills_Section));