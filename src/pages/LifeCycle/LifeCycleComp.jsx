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
        this.setState({
            count: 2
            })
        }, 3000)
        
        console.log('Nilai : ', this.state.count);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate');
        //console.log('nextProps : ', nextProps);
        console.log('State', this.state);
        console.log('nextState', nextState);
        console.groupEnd();
        if(nextProps.count !== 4){
            return true;
        }
        return false;
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

    handleChange = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <button className="btn" onClick={this.handleChange}> Component Button {this.state.count} </button>
        )
    }
}

export default LifeCycleComp;