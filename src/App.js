
import './App.css';
// import Converter from './components/Converter'
// import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import LeftSection from './components/LeftSectionSetup';
import RightSection from './components/RightSection';
import UnitSets from './components/UnitSets';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './components/RoutersPages/Home';

// inport UnitSets
function App() {

  const component1Style = {
    flex: '2', // Takes up 20% of the container width
   
  };

  const component2Style = {
    flex: '8', // Takes up 80% of the container width
    
  };

  return 
  
     <div className="App">
      {/* <h1>
        hi hello
      </h1> */}
      {/* <Converter/> */}
      {/* <Dropdown/> */}
      
      <Navbar />
     <div className='home-body'>
    <div style={component1Style}> <LeftSection /></div>
     <div style={component2Style}> <RightSection /></div>


     </div>

     {/* <UnitSets /> */}


    </div>

    
  //  <BrowserRouter>
  //   <Routes>
  //     <Route path="./components/RouterPages" element={<Home />} />
  //   </Routes>
  //  </BrowserRouter>
}

export default App;
