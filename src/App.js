import React, { useReducer } from "react";
import "./App.css";
import Comp1 from "./components/Comp1";
import FetchData2 from "./components/FetchData2";
// import FetchData1 from './components/FetchData1'
//import GetPosts from './components/json-get';
//import UseRdcr from './components/UseReducer';
//import UserReducer2 from './components/UseReducer2';
//import UserReducer3 from './components/UseReducer3';
// import UseMemo from './components/UseMemo';
// import UseRef from './components/useRef';
// import UseRef2 from "./components/UseRef2";
import BenimHooklarim from "./components/MyOwnHooks";

export const NameContext = React.createContext();
export const JobContext = React.createContext();
export const CountReducer = React.createContext();

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "ekle":
      return state + 1;
    case "cikar":
      return state - 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, intialState);

  return (
    <div className="App">
      <b>**App.js</b>
      <br />
      <h1>State count: {count}</h1>
      <h3>Çekilen data:</h3>
      <FetchData2 /> <br />
      <BenimHooklarim />
      {/*
        <h3>**UseRef Kullanımı-2</h3>
        <UseRef2 />
      <h3>**UseRef Kullanımı</h3>
        <UseRef />
      <h3>Use Memo:</h3>
        <UseMemo /> <br/>
        <GetPosts />

        <div className="UseRdcrDiv">
          <UseRdcr />
        </div>
        <div className="UseRdcrDiv">
          <UserReducer2 />
        </div>
        <div className="UseRdcrDiv">
          <UserReducer3 />
        </div>
        */}
      <CountReducer.Provider
        value={{ counterValue: count, dispatchMethod: dispatch }}
      >
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
