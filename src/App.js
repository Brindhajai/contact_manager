import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import {Routes,Route} from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Add from './Component/Add';
import Edit from './Component/Edit';
function App() {
  return (
    <div className="App">
      {/* /add /edit /:id /delete*/}
       <ToastContainer/>
       <Navbar/>
       <Routes>
        <Route exact path="/" Component={()=> <Home/>}/>
        <Route path="/add" Component={()=> <Add/>}/>
        <Route path="/edit/:id" Component={()=> <Edit/>}/>
        <Route path="/delete">delete contact book</Route>
       </Routes>
     
    </div>
  );
}

export default App;
