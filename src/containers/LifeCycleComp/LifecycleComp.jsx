import React, {Component} from 'react';
import './LifeCycleComp.css';
class LifeCycleComp extends Component {
   
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps');
        return null;
    } 

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    render(){
        console.log('render');
        return(
            <button className="btn"> Component Button </button>
        )
    }
}

export default LifeCycleComp;
