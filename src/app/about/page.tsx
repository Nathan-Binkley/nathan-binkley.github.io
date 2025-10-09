import { Title } from "@mantine/core";
import { Text } from "@mantine/core";

export default function AboutPage() {
    return (
        <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
            <Title order={1} size="h1" mb="md">
                About
            </Title>
            <Text size="lg" color="dimmed" mb="md">
                Here you'll find a selection of my personal and professional about. More coming soon!
            </Text>
            {/* You can add a list or grid of about cards here in the future */}
        </main>
    );
}
