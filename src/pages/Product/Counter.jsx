import React, {Component} from 'react';

class Counter extends Component {
    state = {
        order: 4,
        user: 'tia'
    }

    handleCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue); //membuat props baru dan dijalankan ketika nilai berubah
    }

    handlePlus = () => {
        this.setState({ //mengubah nilai state order dengan menambah satu
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order); //memberikan nilai state order pada counter
        })
    }

    handleMinus = () => {
       if(this.state.order > 0){
        this.setState({ //mengubah nilai state order dengan mengurangi satu
            order: this.state.order - 1
        }, () => {
            this.handleCounterChange(this.state.order); //memberikan nilai state order pada counter
        })
       }
    }

render(){
    return(
         <div className="counter">
        <button className="minus" onClick={this.handleMinus}>-</button>
        <input type="text" value={this.state.order} onChange = {this.handleCounterChange}/>
        <button className="plus" onClick={this.handlePlus}>+</button>
    </div>
    )
}
}

export default Counter;
