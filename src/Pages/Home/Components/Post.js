import React, { Component } from 'react';

export default class Post extends Component {
    render() {
        return (
            <div>
                <a href={this.props.post.url} className="no-underline text-blue-light text-lg">
                    {this.props.post.title} →
                                </a>
                <div className="text-grey-dark text-xs font-medium pb-4">
                    {this.props.post.date}
                </div>
            </div>
        )
    }
}
