import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../reducers/index"
import thunk from 'redux-thunk';
 
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    );

export default store;

 /* function persistentReducer(reducer){
    
return (state,action)=>{
    
    const newState = reducer(state, action)
    localStorage.setItem("reduxState",  JSON.stringify(newState))
    return newState
}
}

let paramaux= JSON.parse(localStorage.getItem("reduxState"))


 const store = createStore(persistentReducer(rootReducer), paramaux||undefined,  applyMiddleware(thunk))

 export default store;  */