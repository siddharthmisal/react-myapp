import React, { useState, useEffect } from "react";

const LoginPage = () => {
    // State variables for username, password, and validation messages
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isUsernameValid, setIsUsernameValid] = useState(null);
    const [message, setMessage] = useState("");

    // Predefined list of usernames
    const validUsernames = ["Siddharth", "siddharth", "testUser"];

    // useEffect to validate username when it changes
    useEffect(() => {
        if (username.trim() === "") {
            setMessage(""); // Clear message if input is empty
            setIsUsernameValid(null); // Reset validity
            return;
        }

        if (validUsernames.includes(username)) {
            setIsUsernameValid(true);
            setMessage("✅ Username is valid");
        } else {
            setIsUsernameValid(false);
            setMessage("❌ Username is invalid");
        }
    }, [username]); // Dependency array ensures it runs when username changes

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isUsernameValid && password.trim() !== "") {
            alert("Login Successful!");
        } else {
            alert("Please fix the errors before submitting!");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "200px" }}>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{
                                borderColor: isUsernameValid === false ? "red" : "black",
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <p style={{ color: isUsernameValid === false ? "red" : "green" }}>
                    {message}
                </p>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
