import React, {Component} from 'react';

class Counter extends Component {
render(){
    return(
         <div className="counter">
        <button className="minus" >-</button>
        <input type="text" />
        <button className="plus">+</button>
    </div>
    )
}
}

export default Counter;
