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


    return (
        <div>
            <b>**Use Reducer Component</b>
            <center><b>State : {counter}</b></center>
            <center>
                <button onClick={() => dispatch('ekle')}>Ekle</button>
                <button onClick={() => dispatch('cikar')}>Çıkar</button>
                <button onClick={() => dispatch('reset')}>Reset</button>
            </center>
        </div>
    )
}

export default UseReducer;
