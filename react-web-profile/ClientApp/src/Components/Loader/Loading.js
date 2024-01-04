import React from 'react';
import { translate } from 'react-switch-lang';
import PropTypes from 'prop-types';

class Loading extends React.Component {

    render() {

        const { t, IsLoading, ShowText, HaveBackground } = this.props;

        return (
            <div id="divLoading" style={{ display: IsLoading ? 'block' : 'none' }}>
                <React.Fragment>
                    <div className="loading-background" style={{ display: HaveBackground ? 'block' : 'none' }}></div>
                    <div className="loading-center">
                        <div className="loader">
                        </div>
                        <div className="loading-text" style={{ display: ShowText ? "block" : "none", color: HaveBackground ? "#fff" : "#555" }}>
                            {t('component.loader.text-loading')}
                        </div>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}

Loading.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Loading);