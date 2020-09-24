import React, {Component} from 'react';
import './LifeCycleComp.css';
//import {connect} from 'react-redux';
import {RootContext} from '../../Home/Home';

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
            <RootContext.Consumer>
            {
                (value) => {
                    return(
           <div>
           <hr />
                <p>Lifecycle Component</p>
            <hr />
                <button className="btn"> Component Button </button>
                <p>Total Order : {value.state.totalOrder}</p>
           </div>  )
                }
            }
            </RootContext.Consumer>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

//export default connect(mapStateToProps)(LifeCycleComp);
export default LifeCycleComp;
