import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Form from "../pages/Form";
import Navbar from "./Navbar";
import Layout from "./pages/Layout";
import { SignIn } from "./SignIn";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/navbar" element={<Navbar />} />
                <Route path="/" element={<Navbar />} />
            </Routes>
        </BrowserRouter>
    );
}