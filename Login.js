import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'; // Importing the CSS module

function Login() {
    const [user, setUser] = useState(''); // To store the username input
    const [password, setPassword] = useState(''); // To store the password input
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const navigate = useNavigate(); // Hook to navigate to different routes

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
        // Validate if both username and password fields are not empty
        if (!user || !password) {
            alert('Please enter both username and password.');
            return; // Stop the function if validation fails
        }

        // Check user credentials against predefined list
        if (validUsers[user] && validUsers[user] === password) {
            console.log('Logging in with', user, password);
            localStorage.setItem('user', user); // Simulate a successful login and save user to local storage
            navigate('/homework-list'); // Navigate to another route on successful login
        } else {
            alert('Invalid username or password.'); // Alert if credentials are incorrect
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
