import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/css/app.css'
import EntryList from "./pages/EntryList";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup"




function App() {

  return (
    <BrowserRouter>
    <h1 className="header"> My Gratitude Journal</h1>
      <Routes>
        <Route index element= {<Signin/>} />
        <Route path="/signup" element= {<Signup/>}/>
        <Route path="/entrylist" element= {<EntryList/>}/>
      </Routes>
      
    </BrowserRouter>
   
  )
}

export default App
