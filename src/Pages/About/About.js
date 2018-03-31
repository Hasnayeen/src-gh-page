import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], projects: [] };
    }

    render() {
        return (
            <div className="w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center mb-8">
                <div className="lg:h-16 h-8"></div>
                <div className="w-5/6 xl:w-1/2 flex flex-col justify-center items-center bg-grey-lightest py-4 lg:px-12 px-4 shadow text-grey-dark text-base leading-normal rounded">
                    <div className="text-orange-light lg:text-2xl text-2xl py-4 uppercase tracking-wide text-center">
                        About Me
                    </div>
                    <Link className="shadow px-4 py-2 no-underline text-grey-darker text-3xl" to="/">
                        <i className="fa fa-home"></i>
                    </Link>
                    <div className="py-8 text-center">A full-stack developer from <span className="text-orange">Dhaka, Bangladesh</span> writing code for food.</div>
                </div>
            </div>
        )
    }
}