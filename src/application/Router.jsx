import { BrowserRouter, Route, Routes } from "react-router"
import App from "../App"
// import PageInstructions from "../pages/instructions-page/instructions"
//DESCOMENTAR CON CADA LINK IMPORTADO


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
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