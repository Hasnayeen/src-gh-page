import React, {Component} from 'react';
import axios from 'axios';
import './Workflow.css';
import WorkflowCard from './WorkflowCard';

export default class Workflow extends Component {
    constructor(props) {
        super(props);
        this.state = {workflow: []};
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    render() {
        return (
            <div className="workflow">
                {this.state.workflow.map((item) => 
                    <WorkflowCard key={item.step} value={item} />
                )}
            </div>
        );
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/Hasnayeen/hasnayeen.github.io/master/data/workflow.json')
            .then((response) => {
                this.setState({workflow: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }
}