import React, { useState, useMemo } from 'react'

function UseMemo() {

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);


    const increment = () => {
        setCounter(counter + 1);
        console.log("increment-1 çalıştı")
    }

    const increment2 = () => {
        setCounter2(counter2 + 1)
        console.log("increment-2 çalıştı")

    }

    const cift = useMemo(() => {
        console.log("cift çalıştı")
        return counter % 2 === 0 ? true: false
    },[counter])



    return (
        <div>
            <div className="divOne">
                <button onClick={increment} >Counter - 1 : {counter}</button>
                <span>Sayı bir {cift ? "Çift" : "Tek"} sayıdır.</span>
            </div>
            <div className="divTwo">
                <button  onClick={increment2} >Counter - 2 : {counter2}</button>
            </div>
        </div>
    )
}

export default UseMemo;
