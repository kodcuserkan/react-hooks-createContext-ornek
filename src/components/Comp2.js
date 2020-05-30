import React, { useContext } from 'react';
import Comp3 from './Comp3';
import { NameContext, JobContext } from '../App';

// Kolay Yöntem 
function Comp2() {


    const name = useContext(NameContext);
    const job = useContext(JobContext);

    return (
        <div>
            <b>**COMP2</b>
            <h1>{ name } - {job }</h1>
            <h3>(useContext hooks u kullanılarak hazırlandı)</h3>
            <br/>
            <Comp3 />
        </div>
    )
}

export default Comp2;
