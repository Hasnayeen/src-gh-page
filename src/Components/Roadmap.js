import React, {Component} from 'react';
import './Roadmap.css';
import data from './../target.json';

export default class Roadmap extends Component {
    render() {
        return (
            <div className="roadmap">
                <div className="roadmap-card">
                    <h1 className="roadmap-heading">Target 2017</h1>
                    <ul className="list">
                        {data.map((item) => 
                            <li key={item.id}><input type="checkbox" checked={item.completed}  />
                            <label>{item.description}</label></li>
                            )}
                    </ul>
                </div>
            </div>
        );
    }
}