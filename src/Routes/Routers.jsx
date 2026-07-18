import { Routes, Route } from "react-router-dom"
import Comp from "../Components/comp"
import Sec from "../pages/SecPage"
import Error from "../Components/Error"

export default function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Comp />} />
            <Route path='/movie/:id' element={<Sec />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}
