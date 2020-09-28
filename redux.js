const redux = require('redux')
const createStore = redux.createStore;

//Inisiasi nilai awal state object
const InitState = {
    value: 0, age: 17
}

//Reducer membuat tipe action yang ingin dijalankan dan fungsinya
const AppReducer = (state=InitState, action) => {
    console.log(action);
    switch(action.type)
    {
        case 'ADD_AGE':
            return{
                ...state,
                age: state.age + 1
            }
        case 'ADD_VALUE':
            return {
                ...state,
                value: state.value + 3
            }
        default:
            return state;
    }
}

//Store 
const store = createStore(AppReducer);
console.log(store.getState());

//Subscription
store.subscribe(() =>
{
    console.log('store changed',store.getState())
})

//Dispatching untuk memanggil action yang ingin dilakukan
store.dispatch({type: 'ADD_AGE'});
store.dispatch({type: 'ADD_VALUE'});

console.log(store.getState());

//untuk melihat hasilnya jalankan perintah node redux.js di terminal