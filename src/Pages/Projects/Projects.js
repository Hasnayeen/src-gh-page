import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Project from './Components/Project';

export default class Projects extends Component {
    render() {
        return (
            <div className="w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center mb-8">
                <div className="lg:h-16 h-8"></div>
                <div className="w-5/6 xl:w-1/2 flex flex-col justify-center bg-grey-lightest py-4 lg:px-12 px-4 shadow text-grey-dark text-base leading-normal rounded">
                    <div className="text-orange-light py-4 uppercase tracking-wide">
                        <Link className="no-underline text-grey-darker absolute" to="/">
                            <i className="fa fa-arrow-left"></i>
                        </Link>
                        <div className="text-center" >
                            All Projects
                        </div>
                    </div>
                    {window.data.projects.map((project) =>
                        <Project key={project.step} project={project} />
                    )}
                </div>
            </div>
        );
    }

    componentDidMount() {
        if (window.data.projects.length < 1) {
            axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/master/data/projects.json')
                .then((response) => {
                    window.data.projects = response.data;
                    this.forceUpdate();
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
}