'use client';

import { Container, Title, Text, Button, Group, Stack, Box, Paper } from '@mantine/core';
import Image from 'next/image';
import { DailyQuote } from '@/components/DailyQuote';
import { Projects } from '@/components/Projects';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
    return (
        <Box style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
            <Container size="lg" py="xl">
                <Stack {...({ gap: "xl" } as any)}>
                    {/* Hero Section */}
                    <Paper p="xl" radius="md" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
                        <Group align="center" {...({ gap: "xl" } as any)} wrap="wrap">
                            <Box style={{ position: 'relative', width: 200, height: 200, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                                <Image
                                    src="/headshot.jpg"
                                    alt="Nathaniel Binkley"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                            </Box>
                            <Stack {...({ gap: "md" } as any)} style={{ flex: 1, minWidth: 300 }}>
                                <Title order={1} size="3rem">Nathaniel Binkley</Title>
                                <Title order={2} size="xl" c="dimmed">Software Engineer</Title>
                                <Text size="lg">
                                    Backend / Full Stack | API | Fintech / Payments / Integrations
                                </Text>
                                <Text>
                                    Software Engineer with 4+ years of experience building scalable backend systems and full-stack applications,
                                    with a strong focus on API development, cloud infrastructure, and payment integrations. Proven track record
                                    of driving business impact, contributing to revenue growth from $10M to $50M ARR within 14 months.
                                </Text>
                                <Group {...({ gap: "md" } as any)}>
                                    <Button
                                        component="a"
                                        href="/Nathaniel%20Binkley%20Resume.docx-10.pdf"
                                        download
                                        variant="filled"
                                        size="md"
                                    >
                                        Download Resume
                                    </Button>
                                    <Button
                                        component="a"
                                        href="https://github.com/Nathan-Binkley"
                                        target="_blank"
                                        variant="outline"
                                        size="md"
                                    >
                                        GitHub
                                    </Button>
                                </Group>
                            </Stack>
                        </Group>
                    </Paper>

                    {/* Daily Quote Section */}
                    <DailyQuote />

                    {/* Projects Section */}
                    <Projects />

                    {/* Contact Section */}
                    <ContactSection />
                </Stack>
            </Container>
        </Box>
    );
}

