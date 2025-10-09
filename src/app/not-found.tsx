import { Stack, Text } from "@mantine/core";
import Link from "next/link";

export default function NotFound() {
    return (
        <Stack
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
            <Text style={{ fontSize: "4rem", fontWeight: 700, marginBottom: 0 }}>404</Text>
            <Text style={{ fontSize: "2rem", fontWeight: 500, marginTop: 0 }}>
                Page Not Found
            </Text>
            <Text style={{ color: "var(--foreground)", maxWidth: 400 }}>
                Sorry, the page you are looking for does not exist or has been moved.
            </Text>
            <Link
                href="/"
                style={{
                    display: "inline-block",
                    padding: "0.75rem 2rem",
                    background: "var(--background)",
                    color: "var(--foreground)",
                    borderRadius: "0.5rem",
                    border: "1px solid var(--foreground)",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "background 0.2s",
                }}
            >
                Go Home
            </Link>
        </Stack>
    );
}
