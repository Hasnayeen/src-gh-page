import React, {Component} from 'react';
import axios from 'axios';
import PostLink from './Components/PostLink';
import './Blog.css';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }
    render() {
        return (
            <div className="blog">
                {this.state.posts.reverse().map((post) => 
                <PostLink key={post.id} post={post} />
                )}
            </div>
        );
    }

    componentDidMount () {
        axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/master/data/blog.json')
            .then((response) => {
                this.setState({posts: response.data});
            })
            .catch((error) => {
                console.log(error);
            })
    }
}