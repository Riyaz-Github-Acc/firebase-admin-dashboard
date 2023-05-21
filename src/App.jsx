import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";

import "./App.module.scss";
import { productInputs, userInputs } from "./Pages/New/FormSource";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
    const { currentUser } = useContext(AuthContext);

    const RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/login" />;
    };

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route
                            index
                            element={
                                <RequireAuth>
                                    <Home />
                                </RequireAuth>
                            }
                        />
                        <Route path="login" element={<Login />} />

                        <Route path="users">
                            <Route
                                index
                                element={
                                    <RequireAuth>
                                        <List />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path=":userId"
                                element={
                                    <RequireAuth>
                                        <Single />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path="new"
                                element={
                                    <RequireAuth>
                                        <New
                                            inputs={userInputs}
                                            title="Add New User"
                                        />
                                    </RequireAuth>
                                }
                            />
                        </Route>

                        <Route path="products">
                            <Route
                                index
                                element={
                                    <RequireAuth>
                                        <List />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path=":productId"
                                element={
                                    <RequireAuth>
                                        <Single />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path="new"
                                element={
                                    <RequireAuth>
                                        <New
                                            inputs={productInputs}
                                            title="Add New Product"
                                        />
                                    </RequireAuth>
                                }
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
