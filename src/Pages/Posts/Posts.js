import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Post from './Components/Post';

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }
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
                            All Posts
                        </div>
                    </div>
                    {this.state.posts.map((post) => 
                        <Post key={post.id} post={post} />
                    )}
                </div>
            </div>
        );
    }

    componentDidMount () {
        axios.get('https://bbgz75j470.execute-api.us-east-1.amazonaws.com/prod/posts')
            .then((response) => {
                var resp = JSON.parse(response.data.body);
                var posts = Object.keys(resp).map((key) => {
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
                posts.sort((a, b) => {
                    if (a.published > b.published) return -1;
                    if (a.published < b.published) return 1;
                    return 0;
                })
                this.setState({posts: posts});
            })
            .catch((error) => {
                console.log(error);
            })
    }
}