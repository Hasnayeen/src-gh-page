import React, {Component} from 'react';
import axios from 'axios';
import './Roadmap.css';

export default class Roadmap extends Component {
    constructor(props) {
        super(props);
        this.state = {targets: []};
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    render() {
        return (
            <div className="roadmap">
                <div className="roadmap-card">
                    <h1 className="roadmap-heading">Target 2017</h1>
                    <ul className="list">
                        {this.state.targets.map((item) => 
                            <li key={item.id}><input type="checkbox" checked={item.completed}  />
                            <label>{item.description}</label></li>
                            )}
                    </ul>
                </div>
            </div>
        );
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/master/data/target.json')
            .then((response) => {
                this.setState({targets: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }
}