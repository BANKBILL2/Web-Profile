import React from "react";
import LayoutMain from "../../Components/Layout/LayoutMain";
import About_Section from './About_Section';
import Experience_Section from './Experience_Section';
import Portfolio_Section from './Portfolio_Section';
import Skills_Section from './Skills_Section';
import Education_Section from './Education_Section';
import Contact_Section from './Contact_Section';

class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <LayoutMain>
                    <div className="container-fluid main-layout" style={{ padding: '0px' }}>
                        <About_Section />
                        <Experience_Section />
                        <Portfolio_Section />
                        <Skills_Section />
                        <Education_Section />
                        <Contact_Section />
                    </div>
                </LayoutMain >
            </React.Fragment >
        );
    }
}

export default Main;