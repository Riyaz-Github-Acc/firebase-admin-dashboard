import styles from "./Login.module.scss";
import globalStyles from "../../App.module.scss";
import { useContext, useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navitage = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user });
                navitage("/");
            })
            .catch((error) => {
                setError(true);
            });
    };

    return (
        <form onSubmit={handleLogin} className={styles.login}>
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className={globalStyles.btn} type="submit">
                Login
            </button>
            {error && <span>Wrong Email or Password!</span>}
        </form>
    );
};

export default Login;
