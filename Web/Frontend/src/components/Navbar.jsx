import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from "sonner";
import { Logout } from "../Redux/Action/UserAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutMe = () => {
        navigate("/");
    };
    const user = useSelector((state) => state.user.user);
    console.log(user);
    return (
        <>
            <Toaster richColors></Toaster>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h5 className="navbar-brand">Without Warning</h5>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">
                                    Register
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/register"
                                    className="nav-link"
                                    onClick={(e) => {
                                        dispatch(Logout());
                                        logoutMe();
                                    }}
                                >
                                    Logout
                                </Link>
                            </li>
                            {user.isAdmin && (
                                <li className="nav-item">
                                    <Link to="/Admin" className="nav-link">
                                        Admin
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
