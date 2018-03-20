import React, { Component } from 'react';
import axios from 'axios';

export default class SocialLinks extends Component {
    constructor(props) {
        super(props);
        this.state = { links: [] };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    render() {
        return (
            <div className="flex flex-row justify-around bg-grey-lightest lg:px-8 py-8 w-full border-t border-red-lightest">
                {this.state.links.map((item) => 
                    <a key={item.id} className="shadow px-4 py-2 no-underline text-grey-darker text-3xl" href={item.url}>
                        <i className={item.icon}></i>
                    </a>
                )}
            </div>
        )
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/master/data/social-link.json')
            .then((response) => {
                this.setState({ links: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }
}