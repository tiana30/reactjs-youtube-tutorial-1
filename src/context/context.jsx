import React, {Component, createContext} from 'react'; //1. import CreateContext

//Create Context
const AppContext = createContext(); //2. buat context baru
const Provider = AppContext.Provider; //3. buat provider baru

export const GlobalProvider = (Children) => {
    return(
        class ParentComp extends Component {
    //4. buat state
    state = {
        totalOrder:0
    }
    
    //5. buat method dispatch 
    dispatch = (action) => {
    switch(action.type){ //6. buat action sesuai type
        case "PLUS_ORDER": 
            return this.setState({
                totalOrder: this.state.totalOrder + 1
            })
    
        case "MINUS_ORDER":
            let totalOrder = 0;
            if(this.state.totalOrder > 0) {
            totalOrder = this.state.totalOrder - 1
            }
            return this.setState({
            totalOrder: totalOrder
        })
    
        default:
            return this.state;
        }
    }
    //6. buat provider 
    render() {
        return (
            <Provider value = {{
                state: this.state,
                dispatch: this.dispatch
            }}>
                <Children {...this.props}/>
            </Provider>
        )
    }

        }
    )
}