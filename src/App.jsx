// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/todo';
import Index from './components/Bharat-Clock/index';
import Fragment from './components/Fragments/Fragment';
import Map from './components/Map Method/map';
import ConditionRenderting from './components/Conditions/ConditionalRendering';
import DataPassing from './components/Props/DataPassing';
import Index_CSS_Module from './components/CSS-Modules/index-css-module';

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <Todo></Todo>
    // <Index></Index>
    // <Fragment></Fragment>
    // <Map />
    // <ConditionRenderting> </ConditionRenderting>
    // <DataPassing></DataPassing>
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-8">
            <Index_CSS_Module></Index_CSS_Module>
          </div>
        </div>
      </div>
    </>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // 
  )
}

export default App
