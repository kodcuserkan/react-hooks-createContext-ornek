import React, { useReducer } from 'react';
import './App.css';
import Comp1 from './components/Comp1';
//import GetPosts from './components/json-get';
//import UseRdcr from './components/UseReducer';
//import UserReducer2 from './components/UseReducer2';
// import UserReducer3 from './components/UseReducer3';

export const NameContext = React.createContext();
export const JobContext = React.createContext();
export const CountReducer = React.createContext();


const intialState = 0;
const reducer = (state, action) => {

  switch (action) {
    case 'ekle':
      return state + 1;
    case 'cikar':
      return state - 1;
    case 'reset':
      return intialState;
    default:
      return state;
  }

};

function App() {

  const [count, dispatch] = useReducer(reducer, intialState);

  return (

    <div className="App">
    <b>**App.js</b><br/>

    <h1>State count: {count}</h1>

      {
        /*<GetPosts />
        <div className="UseRdcrDiv">
          <UseRdcr />
        </div>
        <div className="UseRdcrDiv">
          <UserReducer2 />
        </div>
        <div className="UseRdcrDiv">
          <UserReducer3 />
        </div>
        */
      }
      <CountReducer.Provider value={ {counterValue: count, dispatchMethod: dispatch} }>
        <NameContext.Provider value={"Serkan Akman"}>
          <JobContext.Provider value={"React Developer"}>
            <Comp1 />
          </JobContext.Provider>
        </NameContext.Provider>
      </CountReducer.Provider>

    </div>
  );
}

export default App;
