import React, {Component} from 'react';
import './Workflow.css';
import WorkflowCard from './WorkflowCard';
import data from './../workflow.json';

export default class Workflow extends Component {
    render() {
        return (
            <div className="workflow">
                {data.map((item) => 
                    <WorkflowCard key={item.step} value={item} />
                )}
            </div>
        );
    }

    componentDidMount() {

    }
}