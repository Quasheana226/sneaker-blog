// LOGIN

import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
    const { login } = useAuth(); // grab login function from context
    const navigate = useNavigate(); // grab navigate function from react router 

    const handleLogin = () => {
        login();
        navigate('/admin');

    }
    return (
        <div style={{ padding: '80px 32px', textAlign: 'center' }}>
            <h1 style={{ color: '#fff', marginBottom: '8px' }}>Admin Login</h1>
            <p style={{ color: '#888', marginBottom: '32px' }}>
                Click below to simulate logging in.
            </p>
            <button
                onClick={handleLogin}
                style={{
                    background: '#f97316',
                    color: '#000',
                    border: 'none',
                    padding: '14px 40px',
                    borderRadius: '10px',
                    fontSize: '15px',
                    fontWeight: 800,
                    cursor: 'pointer',
                }}
            >
                Log In
            </button>
        </div>


    )
}
export default LoginPage