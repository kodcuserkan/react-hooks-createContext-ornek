import React, { useContext } from 'react';
import { NameContext, JobContext, CountReducer } from '../App';

function Comp3() {
    const CounterContext = useContext(CountReducer);

    return (
        // kolay olmayan yöntem 
        <div>
            <NameContext.Consumer>
                {
                    Name => <div className="NamePlusJob">
                        <JobContext.Consumer>
                            {

                                Job =>
                                    <div>
                                        <b>**COMP3</b>
                                        <h1>Name : {Name}, Job: {Job}</h1>
                                        <h3>(Eski createContext yöntemi kullanılarak hazırlandı)</h3>
                                    </div>

                            }
                        </JobContext.Consumer>
                    </div>
                }
            </NameContext.Consumer>

            {/* KOLAY YÖNTEM  */}
            <center>
                <button onClick={() => CounterContext.dispatchMethod('ekle')}>Ekle</button>
                <button onClick={() => CounterContext.dispatchMethod('cikar')}>Çıkar</button>
                <button onClick={() => CounterContext.dispatchMethod('reset')}>Reset</button>
            </center>

        </div>

    )
}

export default Comp3;
