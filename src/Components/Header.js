import React, {Component} from 'react';
import './Header.css';
import ProfileCard from './ProfileCard';

export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="intro">
                    <div className="title">
                        Nehal Hasnayeen
                    </div>
                    <div className="subtitle">
                        <p>Passionate self-motivated software craftsman</p>
                        <p>Keen, fast-learner and great attention to detail</p>
                        <p>Growth mindset and persistent in problem solving</p>
                    </div>
                </div>
                <div className="empty-card"></div>
                <ProfileCard />
            </div>
        );
    }
}