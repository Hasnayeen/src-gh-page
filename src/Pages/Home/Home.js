/* eslint-disable */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from "./Components/Post";
import Project from "./Components/Project";
import SocialLinks from "./Components/SocialLinks";
import pic from '../../logo.png';

export default class Home extends Component {
    render() {
        return (
            <div className="w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center mb-8">
                <div className="lg:h-16 h-8"></div>
                <div className="w-5/6 xl:w-1/2 flex flex-col justify-center items-center bg-grey-lightest py-4 lg:px-12 px-4 shadow text-grey-dark text-base leading-normal rounded">
                    <img src={pic} alt="" className="w-24 h-24 rounded-full" />
                    <div className="text-orange-light lg:text-2xl text-2xl py-4 uppercase tracking-wide text-center">
                        Nehal <span className="pl-2">Hasnayeen</span>
                    </div>
                    <div className="pb-8 text-center">
                        A full-stack developer from <span className="text-orange">Dhaka, Bangladesh</span> writing code for food.
                        <Link to="/about" className="no-underline text-blue-light" > Learn more →</Link>
                    </div>
                    <SocialLinks></SocialLinks>
                    <div className="flex flex-row justify-around bg-grey-lightest px-8 w-full border-t border-red-lightest">
                        <Link to="/about" className="no-underline text-grey-darker py-4 hover:border-orange-dark border-b border-transparent">About</Link>
                        <a href="" className="border-l border-red-lightest py-4"></a>
                        <Link to="/reading" className="no-underline text-grey-darker py-4 hover:border-orange-dark border-b border-transparent">Reading</Link>
                        <a href="" className="border-r border-red-lightest py-4"></a>
                        <Link to="/now" className="no-underline text-grey-darker py-4 hover:border-orange-dark border-b border-transparent">Now</Link>
                    </div>
                    <div className="w-full pt-8 border-t border-red-lightest">
                        <div className="text-sm pb-2 font-thin text-grey-darker">
                            Posts
                        <Link to="/posts" className="float-right no-underline text-blue hover:font-semibold">See All</Link>
                        </div>
                        {window.data.posts.map((post, i=1) => {
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
                        {window.data.projects.map((project, i = 1) => {
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

    componentWillMount() {
        if (window.data.posts.length < 1) {
            axios.get('https://bbgz75j470.execute-api.us-east-1.amazonaws.com/prod/posts')
                .then((response) => {
                    var resp = JSON.parse(response.data.body);
                    window.data.posts = Object.keys(resp).map((key) => {
                        let date = new Date(resp[key].firstPublishedAt);
                        let item = {
                            id: resp[key].id,
                            title: resp[key].title,
                            slug: resp[key].uniqueSlug,
                            date: date.toLocaleString('en-us', { month: 'long' }) + ' ' + date.getDate() + ',' + date.getFullYear(),
                            published: resp[key].firstPublishedAt
                        };
                        return item;
                    })
                    window.data.posts.sort((a, b) => {
                        if (a.published > b.published) return -1;
                        if (a.published < b.published) return 1;
                        return 0;
                    })
                    this.forceUpdate();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
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
