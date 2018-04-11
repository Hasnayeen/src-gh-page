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
                <div className="w-5/6 xl:w-1/2 flex flex-col justify-center bg-grey-lightest py-8 lg:px-12 px-4 shadow text-grey-dark text-base leading-normal rounded">
                    <div className="text-orange-light py-4 uppercase tracking-wide">
                        <Link className="no-underline text-grey-darker absolute" to="/">
                            <i className="fa fa-arrow-left"></i>
                        </Link>
                        <div className="text-center" >
                            About Me
                        </div>
                    </div>
                    <div className="py-4 text-center text-xl leading-loose">
                        Introvert, day dreamer, minimalist, mostly realistic and sometimes idealistic.<br/>
                        I'm very lazy and love to sleep. <span className="text-teal-light">Ssshhh! Don't wake me up.</span>
                    </div>
                    <div className="pt-8 text-left text-xl text-grey-darker font-medium">
                        About Work
                    </div>
                    <div className="py-3 text-grey-darker">
                        I build simple & functional custom web applications with rich UX.
                    </div>
                    <div className="py-3 text-grey-darker">
                        I work on both backend (php7) and frontend (es6) mainly on Laravel & Vue/React stack. I follow TDD approach on both end for professional work. I use linux machine and docker based
                        tools for local development and production.
                    </div>
                    <div className="py-3 text-grey-darker">
                        I like to learn new stuff & experiment. I'm exploring golang, graphql and serverless technology and looking forward to learn React Native.
                        <a href="/now" className="no-underline text-blue-light"> Now?</a>
                    </div>
                    <div className="pt-4 text-left text-xl text-grey-darker font-medium">
                        Approach to Work
                    </div>
                    <div className="py-3 text-grey-darker">
                        I prefer simple & minimum approach to problem and build solution that is easily understandable & requires minimum amount of code. I don't like over engineering problem 
                        though I often refactor code to make it more maintainable. Code readibility and easy maintenance is the primary goal when I'm writing code.
                    </div>
                    <div className="pt-4 text-left text-xl text-grey-darker font-medium">
                        Work Timeline
                    </div>
                    <div className="py-3 text-grey-darker">
                        <span className="font-bold text-grey-darker text-lg">→</span> 2014: Started learning php to pursue a career in web development.
                    </div>
                    <div className="py-3 text-grey-darker">
                        <span className="font-bold text-grey-darker text-lg">→</span> 2015: Worked for Techbeeo Software Ltd BD to build new module and customizing existing module of a open source ERP system built on Java platform.
                    </div>
                    <div className="py-3 text-grey-darker">
                        <span className="font-bold text-grey-darker text-lg">→</span> 2015: Dedicated few months on learning Laravel & VueJS full time to become full stack developer.
                    </div>
                    <div className="py-3 text-grey-darker">
                        <span className="font-bold text-grey-darker text-lg">→</span> 2016: Worked for P1, Bashundhara Group. Built and maintained an API microservice for media management to serve several web and mobile application frontend using laravel and aws services.
                    </div>
                    <div className="py-3 text-grey-darker">
                        <span className="font-bold text-grey-darker text-lg">→</span> 2017: Worked for Small Success LLC (USA). Built and integrated a Q/A module in a existing application built on Laravel & VueJS stack.
                    </div>
                    <div className="py-3 text-grey-darker">
                        <span className="font-bold text-grey-darker text-lg">→</span> 2018: Exploring golang, graphql and aws lambda (serverless tech).
                    </div>
                </div>
            </div>
        )
    }
}