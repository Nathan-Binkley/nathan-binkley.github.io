import { Title, Text } from "@mantine/core";

export default function ContactPage() {
    return (
        <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
            <Title order={1} size="h1" mb="md">
                Contact
            </Title>
            <Text size="lg" color="dimmed" mb="md">
                Here you'll find a selection of my personal and professional contact information. More coming soon!
            </Text>
            {/* You can add a list or grid of project cards here in the future */}
        </main>
    );
}
