import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
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
                            What I'm doing now
                        </div>
                    </div>
                    <div className="py-3 text-grey-darker">
                        Updated: April 12, 2018
                    </div>
                    <div className="py-6 text-grey-darker">
                        I'm learning golang right now. Also learning about aws lambda. I'm making some lambda functions (<a href="https://github.com/hasnayeen/lambdas" className="no-underline text-blue-light">check here</a>) in golang for various purpose.
                    </div>
                    <div className="py-6 text-grey-darker">
                        I'm also learning french just for fun. J'aime apprendre!
                    </div>
                    <div className="py-6 text-grey-darker">
                        I'm currently reading <a href="https://www.amazon.com/Quiet-Power-Introverts-World-Talking/dp/0307352153" target="new" className="no-underline text-blue-light">"Quiet" by Susan Cain</a>.
                    </div>
                    <div className="py-6 text-grey-darker">
                        I'm very much into gardening right now. I'm trying to grow some vegetables and herbs (tomato, coriander, cucumber, red lettuce, rosemary etc.) in my very small 12 square feet balcony garden. I'm learning as much as I can about container & organic gardening.
                    </div>
                    <div className="pt-4 text-center leading-loose">
                        Inspired by <a href="https://sivers.org/nowff" target="new" className="no-underline text-blue-light">Derek Sivers</a>.
                    </div>
                </div>
            </div>
        )
    }
}