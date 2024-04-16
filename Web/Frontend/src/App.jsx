import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { MyStore } from "./Redux/Store/MyStore";
import "./App.css";
const App = () => {
    return (
        <div>
            <Provider store={MyStore}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Admin" element={<Admin />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
};

export default App;
