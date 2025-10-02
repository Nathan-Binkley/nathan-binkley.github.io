import React from "react";

const Footer: React.FC = () => (
    <footer style={{
        width: "100%",
        padding: "1rem 0",
        background: "#f5f5f5",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "#666",
        borderTop: "1px solid #e5e5e5"
    }}>
        © {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
);

export default Footer;
