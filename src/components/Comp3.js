import React from 'react';
import { NameContext, JobContext } from '../App';

function Comp3() {
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

        </div>

    )
}

export default Comp3;
