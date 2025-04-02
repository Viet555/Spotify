import { Route, Routes } from "react-router-dom"
import Home from "../component/Home/Home.jsx";
const AppRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>
        </>
    )
}
export default AppRoute