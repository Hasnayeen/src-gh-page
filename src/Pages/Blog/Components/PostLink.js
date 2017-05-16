import React, {Component} from 'react';
import './PostLink.css';

export default class PostLink extends Component {
  render() {
    return (
      <div className="post-link" key={this.props.post.id}>
        <h2><a href={this.props.post.url}>{this.props.post.title}</a></h2>
        <h4>Published {this.props.post.date}</h4>
      </div>
        );
    }
}
