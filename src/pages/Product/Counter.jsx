import React, {Component} from 'react';
//import {connect} from 'react-redux'; //1. lakukan import dahulu
import {AppContext} from '../../pages/Home/Home'; //1. import
class Counter extends Component {
render(){
//     return(
//         <div className="counter">
//         <button className="minus" onClick={this.props.handleMinus}>-</button> {/*6. mengatur fungsi handleMinus dari props connect*/}
//         <input type="text" value={this.props.order} />  {/*5. nilai order */}
//         <button className="plus" onClick={this.props.handlePlus}>+</button> {/*7. mengatur fungsi handlePlus dari props connect */}
//         </div>
//      )
    //2. buat consumer (children) dan valuenya di dapat dari provider
    return(
        <AppContext.Consumer>
        {(value) => {
            return(
            <div className="counter">
            <button className="minus" onClick={() => value.dispatch({type:"MINUS_ORDER"})}>-</button> {/*6. mengatur fungsi handleMinus dari props connect*/}
            <input type="text" value={value.state.totalOrder} />  {/*5. nilai order */}
            <button className="plus" onClick={() => value.dispatch({type:"PLUS_ORDER"})}>+</button> {/*7. mengatur fungsi handlePlus dari props connect */}
            </div>
    )
        }}
        </AppContext.Consumer>
    )
    
}
}

// const StateProps = (state) => { //3. membuat nilai order dari globalstate totalOrder
//     return {
//         order: state.totalOrder
//     }
// }

// const DispatchProps = (dispatch) => { //4. membuat dispatch dengan action yang akan dipanggil 
//     return {
//         handleMinus : () => dispatch({type: 'MINUS_ORDER'}), //object yang berisi fungsi dispatch 
//         handlePlus : () => dispatch({type: 'PLUS_ORDER'}) 
//     }
// }

//export default connect(StateProps, DispatchProps)(Counter); //2. inisialisasi connect dengan state dan dispatch dengan nama custom
export default Counter; //3. kembalikan seperti semula