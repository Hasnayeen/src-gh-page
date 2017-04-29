import React, {Component} from 'react';
import './Roadmap.css';

export default class Roadmap extends Component {
    render() {
        return (
            <div className="roadmap">
                <div className="roadmap-card">
                    <h1 className="roadmap-heading">Target 2017</h1>
                    <ul className="list">
                        <li>
                            Get experienced with docker swarm
                        </li>
                        <li>
                            Get familiar with RancherOS
                        </li>
                        <li>
                            Build an app with electron
                        </li>
                    </ul>
                    <ul className="list">
                        <li>
                            Use rethinkdb for real time app
                        </li>
                        <li>
                            Learn more about asynchronous i/o
                        </li>
                        <li>
                            Run application in AWS Lambda
                        </li>
                    </ul>
                    <ul className="list">
                        <li>
                            Learn functional programming concept
                        </li>
                        <li>
                            Build simple project with elixir
                        </li>
                        <li>
                            Build simple project with rust
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}