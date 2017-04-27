import React, {Component} from 'react';
import './ProfileCard.css';
import pic from '../square.jpg';

export default class ProfileCard extends Component {
    render() {
        return (
            <div className="profile-card">
                <img src={pic} className="profile-img" alt=""/>
                <div className="profile-text">
                    <h4 className="profile-name">Full Stack Developer</h4>
                    <p>
                        <i className="fa fa-envelope"></i>
                        <a className="social-link" href="mailto:searching.nehal@gmail.com">
                            searching.nehal@gmail.com
                        </a>
                    </p>
                    <p>
                        <i className="fa fa-link"></i>
                        <a className="social-link" href="hasnayeen.github.io">
                            hasnayeen.github.io
                        </a>
                    </p>
                    <p>
                        <i className="fa fa-github"></i>
                        <a className="social-link" href="https://github.com/iluminar">
                            iluminar
                        </a>
                    </p>
                    <p>
                        <i className="fa fa-stack-overflow"></i>
                        <a className="social-link" href="http://stackoverflow.com/users/4017672/nehal-hasnayeen">
                            users/4017672
                        </a>
                    </p>
                    <p>
                        <i className="fa fa-twitter"></i>
                        <a className="social-link" href="https://github.com/hasnayeen">
                            nhasnayeen
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}