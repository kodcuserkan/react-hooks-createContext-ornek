import React from 'react';
import TitleHook1 from './MyHooks/UseMyOwnHook1';
import TitleHook2 from './MyHooks/UseMyOwnHook2';
import Counter1 from './MyHooks/Counter1'
import Counter2 from './MyHooks/Counter2'
import MyForm from './MyHooks/Form'

function MyOwnHooks() {
    return (
        <div>
            <h3>**Benim Hooklarım</h3>
            <TitleHook1 />
            <TitleHook2 />
            <Counter1 />
            <Counter2 />
            <MyForm/>

        </div>
    )
}

export default MyOwnHooks
