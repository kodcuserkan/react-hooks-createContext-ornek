import React, { useReducer } from 'react';

const intialState = 0;
const reducer = (state, action) => {

    switch (action) {
        case 'ekle':
            return state +1;
        case 'cikar':
            return state -1;
        case 'reset': 
            return intialState;
        default:
            return state;
    }

};

function UseReducer() {

    const [counter, dispatch] = useReducer(reducer, intialState);
    const [counter2, dispatch2] = useReducer(reducer, intialState);


    return (
        <div>
            <b>**Use Reducer Component</b>
            <center><b>State : {counter}</b></center>
            <center><b>State 2 : {counter2}</b></center>
            <center>
                <button onClick={() => dispatch('ekle')}>Ekle</button>
                <button onClick={() => dispatch('cikar')}>Çıkar</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
            </center>
            <center>
                <button onClick={() => dispatch2('ekle')}>Ekle 2</button>
                <button onClick={() => dispatch2('cikar')}>Çıkar 2</button>
                <button onClick={() => dispatch2('reset')}>Reset 2</button>
            </center>
        </div>
    )
}

export default UseReducer;
