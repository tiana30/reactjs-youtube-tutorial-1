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
           <div>
           <hr />
                <p>Lifecycle Component</p>
            <hr />
                <button className="btn"> Component Button </button>
           </div>  )
    }
}

export default LifeCycleComp;
