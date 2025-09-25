import React from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out!</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
}

export default ContactPage;