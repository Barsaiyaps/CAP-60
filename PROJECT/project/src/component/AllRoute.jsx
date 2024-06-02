import {Routes, Route} from "react-router-dom";

import HOME from "../navbar/home"
import LOGIN from "../navbar/login"
import LOGOUT from "../navbar/logout"

export default function AllRoute(){
    return(
        <Routes>
            <Route path="/" element={<HOME />} />
            <Route path="/login" element={<LOGIN />} />
            <Route path="/logout" element={<LOGOUT />} />
        </Routes>
    )
}