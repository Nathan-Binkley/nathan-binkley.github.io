import { Title, Text } from "@mantine/core";

export default function PersonalBlogPage() {
    return (
        <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
            <Title style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>
                Personal Blog
            </Title>
            <Text style={{ fontSize: "1.2rem", color: "#555", marginBottom: "2rem" }}>
                Here you'll find a selection of my personal and professional personal blog. More coming soon!
            </Text>
            {/* You can add a list or grid of project cards here in the future */}
        </main>
    );
}
