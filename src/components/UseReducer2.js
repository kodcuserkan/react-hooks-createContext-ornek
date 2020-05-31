import React, { useReducer } from 'react';

const intialState = {
    initial0: 0,
    initial10: 100
};

const reducer = (state, action) => {

    switch (action.type) {
        case 'ekle1':
            return {...state, initial0 : state.initial0 + action.value};
        case 'cikar1':
            return {...state, initial0 : state.initial0 - action.value};
        case 'eklec2':
            return {...state, initial10 : state.initial10 + action.value};
        case 'cikarc2':
            return {...state, initial10 : state.initial10 - action.value};
        case 'reset':
            return intialState;
        default:
            return state;
    }

};

function UseReducer2() {

    const [counter, dispatch] = useReducer(reducer, intialState);

    console.log(counter);
    return (
        <div>
            <b>**Use Reducer Component</b>
            <center><b>State-1 : {counter.initial0}</b></center>
            <center><b>State-2 : {counter.initial10}</b></center>
            <center>
                <button onClick={() => dispatch({type :'ekle1', value: 1})}>Ekle 1</button>
                <button onClick={() => dispatch({type :'cikar1', value: 1})}>Çıkar 1</button>
                <button onClick={() => dispatch({type :'ekle1', value: 10})}>Ekle 10</button>
                <button onClick={() => dispatch({type :'cikar1', value: 10})}>Çıkar 10</button>
            </center>
            <center>
                <button onClick={() => dispatch({type :'eklec2', value: 5})}>Counter 2 Ekle 5</button>
                <button onClick={() => dispatch({type :'cikarc2', value: 5})}>Counter 2 Çıkar 5</button>
            </center>
            <center>
                <button onClick={() => dispatch({type :'reset'})}>Reset</button>
            </center>
        </div>
    )
}

export default UseReducer2;
