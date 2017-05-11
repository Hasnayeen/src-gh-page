import React, {Component} from 'react';
import axios from 'axios';
import './ProfileCard.css';
import pic from '../square.jpg';

export default class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {links: []};
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    render() {
        return (
            <div className="profile-card">
                <img src={pic} className="profile-img" alt=""/>
                <div className="profile-text">
                    <h4 className="profile-name">Full Stack Developer</h4>
                    {this.state.links.map((item) => 
                        <p key={item.id}>
                            <i className={item.icon}></i>
                            <a className="social-link" href={item.url}>
                                {item.username}
                            </a>
                        </p>
                    )}
                </div>
            </div>
        );
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/master/data/social-link.json')
            .then((response) => {
                this.setState({links: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }
}