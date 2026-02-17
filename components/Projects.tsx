import { Paper, Title, Text, Stack, Button, Group, Badge, Box } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

export function Projects() {
    return (
        <Paper p="xl" radius="md" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
            <Stack {...({ gap: "lg" } as any)}>
                <Title order={2}>Featured Projects</Title>

                <Paper p="lg" radius="md" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
                    <Stack {...({ gap: "md" } as any)}>
                        <Group {...({ justify: "space-between" } as any)} wrap="wrap">
                            <Box>
                                <Title order={3} c="white">Twanswatwr</Title>
                                <Text c="white" opacity={0.9} size="sm" mt="xs">
                                    Featured Project
                                </Text>
                            </Box>
                            <Badge size="lg" variant="light" color="white" style={{ color: '#667eea' }}>
                                Highlighted
                            </Badge>
                        </Group>
                        <Text c="white" size="lg">
                            A full-stack application showcasing backend expertise and modern development practices.
                        </Text>
                        <Group {...({ gap: "md" } as any)}>
                            <Button
                                component="a"
                                href="https://github.com/Nathan-Binkley/Twanswatwr"
                                target="_blank"
                                {...({ leftSection: <IconBrandGithub size={18} /> } as any)}
                                variant="white"
                                color="white"
                                style={{ color: '#667eea' }}
                            >
                                View on GitHub
                            </Button>
                        </Group>
                    </Stack>
                </Paper>

                <Paper p="lg" radius="md" style={{ border: '1px solid #e0e0e0' }}>
                    <Stack {...({ gap: "md" } as any)}>
                        <Title order={4}>Consi</Title>
                        <Text size="sm" c="dimmed">
                            Full-stack SaaS product built with Java Spring Boot, React/Next.js, and AWS infrastructure.
                        </Text>
                        <Text size="sm" c="dimmed">
                            <strong>Visit:</strong> <a href="https://consiapp.com" target="_blank" rel="noopener noreferrer">consiapp.com</a>
                        </Text>
                    </Stack>
                </Paper>

                <Paper p="lg" radius="md" style={{ border: '1px solid #e0e0e0' }}>
                    <Stack {...({ gap: "md" } as any)}>
                        <Title order={4}>Discord Bot</Title>
                        <Text size="sm" c="dimmed">
                            Python-based Discord bot using discord.py to track Wordle scores and provide utility commands.
                        </Text>
                    </Stack>
                </Paper>

                <Paper p="lg" radius="md" style={{ border: '1px solid #e0e0e0' }}>
                    <Stack {...({ gap: "md" } as any)}>
                        <Title order={4}>Twitter (X) Translator</Title>
                        <Text size="sm" c="dimmed">
                            Twitter bot that translated tweets from political figures during the 2020 election.
                            Gained over 6000+ followers and generated revenue through Patreon.
                        </Text>
                    </Stack>
                </Paper>
            </Stack>
        </Paper>
    );
}

