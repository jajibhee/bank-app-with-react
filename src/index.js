import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore} from "redux";
import { Provider} from "react-redux";

const initialState = {
    username: "User",
    totalAmount: 2500701
}

function reducer(state=initialState, action){
    switch (action.type) {
        case "DECREMENT":
            return{
                ...state,
                totalAmount: state.totalAmount - action.amount,
                username: 'bhee'
            }
        default:
            return state;
    }
}


const store = createStore(reducer);
ReactDOM.render(<Provider store={store}><App></App></Provider>, document.getElementById('root'));

