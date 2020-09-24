import React, {Component} from 'react';
import './LifeCycleComp.css';
//import {connect} from 'react-redux';
import {GlobalConsumer} from '../../../context/context';
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
                <p>Total Order : {this.props.state.totalOrder}</p>
           </div>  
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

//export default connect(mapStateToProps)(LifeCycleComp);
export default GlobalConsumer(LifeCycleComp);
