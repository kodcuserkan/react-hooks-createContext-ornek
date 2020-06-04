import React from 'react';
import TitleHook1 from './MyHooks/UseMyOwnHook1';
import TitleHook2 from './MyHooks/UseMyOwnHook2';

function MyOwnHooks() {
    return (
        <div>
            <h3>**Benim Hooklarım</h3>
            <TitleHook1 />
            <TitleHook2 />
        </div>
    )
}

export default MyOwnHooks
