import react from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Secret from "./pages/Secret"
import SurveyForm from "./pages/SurveyForm.jsx"
import SurveyList from "./pages/SurveyList.jsx"
// import Createbooks from "./pages/Createbooks"
// import Deletebook from "./pages/Deletebook"
// import Editbook from "./pages/EditBook.jsx"
// import Home from "./pages/Home";
// import Showdetail from "./pages/Showdetail";
import Updatepassword from "./pages/Updatepassword.jsx"
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      
      <Route path='/' element={<Secret/>}/>
      
      <Route path='/update' element={<Updatepassword/>}/>
      <Route path='/survey' element={<SurveyForm/>}/>
      <Route path='/allsurvey' element={<SurveyList/>}/>
      
      
    </Routes>
    </BrowserRouter>
    
       
  );
}

export default App;
