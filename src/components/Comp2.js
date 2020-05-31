import React, { useContext } from 'react';
import Comp3 from './Comp3';
import { NameContext, JobContext, CountReducer } from '../App';

// Kolay Yöntem 
function Comp2() {

    const name = useContext(NameContext);
    const job = useContext(JobContext);
    const CounterContext = useContext(CountReducer);

    return (
        <div>
            <b>**COMP2</b>
            <h1>{name} - {job}</h1>
            <h3>(useContext hooks u kullanılarak hazırlandı)</h3>
            <center>
                <button onClick={() => CounterContext.dispatchMethod('ekle')}>Ekle</button>
                <button onClick={() => CounterContext.dispatchMethod('cikar')}>Çıkar</button>
                <button onClick={() => CounterContext.dispatchMethod('reset')}>Reset</button>
            </center>
            <br />
            <Comp3 />
        </div>
    )
}

export default Comp2;
