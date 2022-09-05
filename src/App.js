import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Employee from "./components/Employee";
import Laptop from "./components/Laptop";
import Popapp from "./components/Popapp";
import Testvalidation from "./components/Testvalidation";
import Secondtest from "./components/Secondtest";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="navigation" element={<Navigation/>}>
          <Route index element={<Employee/>}/>
          <Route path="employee" element={<Employee/>}/>
          <Route path="laptop" element={<Laptop/>}/>
         </Route>
         
          
        
        <Route path="popapp" element={<Popapp/>}/>
    </Routes> 
    
    {/* <Routes>
      <Route path="/" element={<Testvalidation/>}/>
      <Route path="secondtest" element={<Secondtest/>}/>
    </Routes> */}
    </div>
  );
}

export default App;
