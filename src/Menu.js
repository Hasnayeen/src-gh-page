import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {style: {visibility: 'hidden'}};
    }
    showMenu = (e) => {
        if (this.state.style.visibility === 'hidden') {
            this.setState({style: {visibility: 'visible'}})
        } else {
            this.setState({style: {visibility: 'hidden'}})
        }
    }
    render() {
        return (
            <div>
                <div className="menu-bars" onClick={this.showMenu}>
                    <i className="fa fa-bars"></i>
                </div>
                <div className="menu-bg">
                </div>
                <ul className="menu-links" style={this.state.style}>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="blog">BLOG</Link>
                    </li>
                </ul>
            </div>
        );
    }
}