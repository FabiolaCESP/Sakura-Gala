import { BrowserRouter, Route, Routes } from "react-router";
import App from  "../App";
import Discover from "../pages/discover/Discover.jsx";
import Join from "../pages/join/Join.jsx";

function Router (){
return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/discover" element={<Discover/>}/>
          <Route path="/join" element={<Join/>}/>
        </Routes>        
    </BrowserRouter>
  )
}

export default Router;
