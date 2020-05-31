import React, { useContext } from 'react';
import Comp2 from './Comp2';
import { CountReducer } from '../App';

function Comp1() {
    const CounterContext = useContext(CountReducer);
    // console.log(CounterContext);
    return (
        <div>
                <b>**COMP1</b>
                <center>
                    <button onClick={() => CounterContext.dispatchMethod('ekle')}>Ekle</button>
                    <button onClick={() => CounterContext.dispatchMethod('cikar')}>Çıkar</button>
                    <button onClick={() => CounterContext.dispatchMethod('reset')}>Reset</button>
                </center>
                <Comp2 />
        </div>
    )
}

export default Comp1;
