/* eslint-disable */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from "./Components/Post";
import Project from "./Components/Project";
import SocialLinks from "./Components/SocialLinks";
import pic from '../../logo.png';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], projects: [] };
    }

    render() {
        return (
            <div className="w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center mb-8">
                <div className="lg:h-16 h-8"></div>
                <div className="w-5/6 xl:w-1/2 flex flex-col justify-center items-center bg-grey-lightest py-4 lg:px-12 px-4 shadow text-grey-dark text-base leading-normal rounded">
                    <img src={pic} alt="" className="w-24 h-24 rounded-full" />
                    <div className="text-orange-light lg:text-2xl text-2xl py-4 uppercase tracking-wide text-center">
                        Nehal <span className="pl-2">Hasnayeen</span>
                    </div>
                    <div className="pb-8 text-center">A full-stack developer from <span className="text-orange">Dhaka, Bangladesh</span> writing code for food.</div>
                    <SocialLinks></SocialLinks>
                    <div className="flex flex-row justify-around bg-grey-lightest px-8 w-full border-t border-red-lightest">
                        <Link to="about" className="no-underline text-grey-darker py-4 hover:border-orange-dark border-b border-transparent">About</Link>
                        <a href="" className="border-l border-red-lightest py-4"></a>
                        <a href="" className="no-underline text-grey-darker py-4 hover:border-orange-dark border-b border-transparent">Books</a>
                        <a href="" className="border-r border-red-lightest py-4"></a>
                        <a href="" className="no-underline text-grey-darker py-4 hover:border-orange-dark border-b border-transparent">Now</a>
                    </div>
                    <div className="w-full pt-8 border-t border-red-lightest">
                        <div className="text-sm pb-2 font-thin text-grey-darker">
                            Posts
                        <Link to="/posts" className="float-right no-underline text-blue hover:font-semibold">See All</Link>
                        </div>
                        {this.state.posts.map((post, i=1) => {
                            i++;
                            if (i < 3) {
                                return <Post key={post.id} post={post} />;
                            }
                        })}
                    </div>
                    <div className="w-full pt-8 border-t border-red-lightest">
                        <div className="text-sm pb-2 font-thin text-grey-darker">
                            Projects
                            <Link to="/projects" className="float-right no-underline text-blue hover:font-semibold">See All</Link>
                        </div>
                        {this.state.projects.map((project, i = 1) => {
                            i++;
                            if (i < 3) {
                                return <Project key={project.step} project={project} />;
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/master/data/blog.json')
            .then((response) => {
                this.setState({ posts: response.data.reverse() });
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/master/data/projects.json')
            .then((response) => {
                this.setState({ projects: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
