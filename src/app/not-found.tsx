import Link from "next/link";

export default function NotFound() {
    return (
        <div
            style={{
                minHeight: "70vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: "1.5rem",
            }}
        >
            <h1 style={{ fontSize: "4rem", fontWeight: 700, marginBottom: 0 }}>404</h1>
            <h2 style={{ fontSize: "2rem", fontWeight: 500, marginTop: 0 }}>
                Page Not Found
            </h2>
            <p style={{ color: "#666", maxWidth: 400 }}>
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/"
                style={{
                    display: "inline-block",
                    padding: "0.75rem 2rem",
                    background: "#171717",
                    color: "#fafafa",
                    borderRadius: "0.5rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "background 0.2s",
                }}
            >
                Go Home
            </Link>
        </div>
    );
}
