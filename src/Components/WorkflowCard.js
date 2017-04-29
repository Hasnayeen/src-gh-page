import React, {Component} from 'react';
import './WorkflowCard.css';

export default class WorkflowCard extends Component {
    render() {
        return (
            <div className="flow-card">
                <div className="flow-text">
                    <h4 className="flow-name">{this.props.value.name}</h4>
                    <p className="flow-description">{this.props.value.desc}</p>
                </div>
            </div>
        );
    }
}