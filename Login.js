import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'; // Importing the CSS module

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // Predefined user credentials
    const validUsers = {
        'student1': 'password1',
        'student2': 'password2',
        'student3': 'password3',
        'student4': 'password4',
        'student5': 'password5',
        'student6': 'password6',
        'student7': 'password7',
        'student8': 'password8',
        'student9': 'password9',
        'student10': 'password10'
    };

    const handleLogin = () => {
        console.log('Logging in with', user, password);
        // Check if the user credentials are valid
        if (validUsers[user] && validUsers[user] === password) {
            localStorage.setItem('user', user); // Simulate a successful login and save user to local storage
            navigate('/homework-list'); // Navigate to another route on successful login
        } else {
            alert('Invalid login'); // Alert invalid login
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle the password visibility
    };

    return (
        <div className={styles.container}>
            <div className={styles.formGroup}>
                <label className={styles.label}>Username:</label>
                <input
                    type="text"
                    className={styles.input}
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    placeholder="Enter username"
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Password:</label>
                <input
                    type={showPassword ? "text" : "password"}
                    className={styles.input}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
                <button onClick={togglePasswordVisibility} className={styles.toggleButton}>
                    {showPassword ? '🙈' : '👁️'}
                </button>
            </div>
            <button onClick={handleLogin} className={styles.loginButton}>Login</button>
            <div className={styles.forgotPassword}>
                <a href="#forgot" onClick={() => alert('Redirect to forgot password page')} className={styles.forgotLink}>
                    Forgot Password?
                </a>
            </div>
        </div>
    );
}

export default Login;
