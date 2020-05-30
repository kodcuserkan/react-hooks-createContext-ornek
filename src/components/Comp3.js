import React from 'react';
import { NameContext, JobContext } from '../App';

function Comp3() {
    return (

        <div>
            <NameContext.Consumer>
                {
                    Name => <div className="NamePlusJob">
                        <JobContext.Consumer>
                            {
                                Job => <h1>Name : {Name}, Job: {Job}</h1>
                            }
                        </JobContext.Consumer>
                    </div>
                }
            </NameContext.Consumer>

        </div>

    )
}

export default Comp3;
