import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (emailAddress === "Milap" && password === "Milap123@") {
            navigate('/dashboard');
        } else {
            alert('Please valid data');
        }
    }

    return (
        <div className="cover">
            <h2>Login</h2>
            <form>
                <div className="display">
                    <label>Email Address:</label>
                    <input type="text" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                </div>
                <div className="display">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="button" className="login-button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login;
