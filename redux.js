const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0, age: 17
}
//Reducer
const rootReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) 
   { 
    case 'ADD_AGE':
        return {
            ...state,
            age: state.age + 1
        }
    case 'ADD_VALUE':
        return {
            ...state,
            value: state.value + 10
        }
    default:
        return state;
    }
    
}

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log('store change: ',store.getState());
})


//Dispatching 
store.dispatch({type: 'ADD_AGE'});
store.dispatch({type: 'ADD_VALUE'}, newValuee = 12);
console.log(store.getState());



