import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './base.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import {createStore } from 'redux';
import reducer from 'redux/reducerIndex';


// 开始创建一个store对象
const store = createStore(reducer);


store.subscribe(() => {
    const state = store.getState()
    console.log(state, 'state')
})
store.dispatch({
    type: 'EDIT_INFO',
    name: 'admin',
    pwd: 'admin',
    avator: ''
})

/* function Tem() {
    return (
        <div>
            <button onClick></button>
        </div>
    )
} */

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App /> 
        </Router>
    </Provider>,
    document.getElementById('root')
)
