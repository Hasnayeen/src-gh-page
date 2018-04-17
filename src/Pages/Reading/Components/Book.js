import React, { Component } from 'react';

export default class Post extends Component {
    render() {
        return (
            <div className="py-4 border-t" key={this.props.book.id}>
                <a className="no-underline text-xl font-semibold text-grey-darker" href={this.props.book.url} target="_blank">
                    {this.props.book.title}
                </a>
                <div className="text-xs">by <span className="text-sm text-grey-darkest pl-1">{this.props.book.author}</span></div>
            </div>
        );
    }
}
