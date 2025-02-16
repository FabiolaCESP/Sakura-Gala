import { BrowserRouter, Route, Routes } from "react-router"
import App from "../App"
import Instructions from "../pages/instructions/Instructions"
import TarotReading from "../components/TarotReading/TarotReading"
import Instructions from "../pages/instructions/Instructions"
import Favorites from "../pages/favorites/Favorites"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/instructions" element={<Instructions />}/>
                <Route path="/tarotReading" element={<TarotReading />}/>
                <Route path="/favorites" element={<Favorites />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router

