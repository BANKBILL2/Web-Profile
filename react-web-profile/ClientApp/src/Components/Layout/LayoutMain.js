import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { translate } from 'react-switch-lang';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';

class LayoutMain extends Component {

    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {
        return (
            <React.Fragment>
                <div className="content-body">
                    <div className="row">
                        <div className="col-12">
                            <Sidebar />
                        </div>
                        <div className="col-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <button className="topBtn" onClick={() => this.topFunction()} id="topBtn" title="Go to top">Top</button>
            </React.Fragment >
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

LayoutMain.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(connect(mapStateToProps, mapDispatchToProps)(LayoutMain));