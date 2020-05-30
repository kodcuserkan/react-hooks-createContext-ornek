import React from 'react';
import './App.css';
// eslint-disable-next-line
import GetPosts from './components/json-get';
import Comp1 from './components/Comp1';
import UseRdcr from './components/UseReducer'

export const NameContext = React.createContext();
export const JobContext = React.createContext();

function App() {
  return (

    <div className="App">

      {/*<GetPosts />*/}

      <div className="UseRdcrDiv">
        <UseRdcr />
      </div>
      

      <NameContext.Provider value={"Serkan Akman"}>
        <JobContext.Provider value={"React Developer"}>
          <Comp1 />
        </JobContext.Provider>
      </NameContext.Provider>

    </div>
  );
}

export default App;
