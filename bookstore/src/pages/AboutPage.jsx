import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>This is a bookstore application built with React.</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
}

export default AboutPage;