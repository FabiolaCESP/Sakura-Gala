import { BrowserRouter, Route, Routes } from "react-router"
import App from "../App"
import Instructions from "../pages/instructions/instructions"


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/instructions" element={<Instructions />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router


{/* {/* <Route path="/discover" element={<Discover/>}/> */}

// LINK FOR COMPONENTS //

//import { Link } from 'react-router';

{/* <Link to="/join">
<button className="Join-Now">Join Now</button>
</Link> */}

// AÑADIR CADA LINK PARA CADA PÁGINA QUE SE QUIERE LINKEAR
//PARA CADA ANCHOR Y CADA BOTÓN QUE TENGA LINKS