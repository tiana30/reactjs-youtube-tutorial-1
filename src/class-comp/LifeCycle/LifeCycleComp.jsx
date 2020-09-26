import React, {Component} from 'react';
import './LifeCycle.css';

class LifeCycleComp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log('Constructor dan nilai awal = ', props, this.state);
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps dan nilai = ', props, state);
        return null;
    } 

    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {

        }, 3000)
        this.setState({
            count: 2
        })
        console.log('Nilai : ', this.state.count);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate', prevProps, prevState);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState, snapshot);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    render(){
        return(
            <button className="btn"> Component Button {this.state.count} </button>
        )
    }
}

export default LifeCycleComp;