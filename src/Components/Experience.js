import React, {Component} from 'react';
import './Experience.css';

export default class Experience extends Component {
    render() {
        return (
            <div className="experience">
                <div className="experience-left">
                    <div className="experience-content">
                        <h2>P1, EWMGL, Bashundhara Group</h2>
                        <h3>Software Engineer</h3>
                        <h4>Jan, 2016 - May, 2017</h4>
                        <h5>Building and maintaining an API microservice for media management to serve several web and mobile application frontend.</h5>
                    </div>
                </div>
                <div className="experience-right">
                    <div className="experience-content">
                        <h2>Techbeeo Software Ltd</h2>
                        <h3>ERP Developer</h3>
                        <h4>Feb, 2015 - May, 2015</h4>
                        <h5>Building new module and customizing existing module of a open source ERP system built on Java platform.</h5>
                    </div>
                </div>
            </div>
        );
    }
}