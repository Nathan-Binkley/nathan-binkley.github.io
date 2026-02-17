import { Paper, Title, Text, Stack, Group, Anchor, Box } from '@mantine/core';
import { IconMail, IconPhone, IconBrandGithub } from '@tabler/icons-react';

export function ContactSection() {
    return (
        <Paper p="xl" radius="md" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
            <Stack {...({ gap: "md" } as any)}>
                <Title order={2}>Contact</Title>
                <Group {...({ gap: "xl" } as any)} wrap="wrap">
                    <Group {...({ gap: "sm" } as any)}>
                        <IconMail size={20} />
                        <Anchor href="mailto:nbinkl4483@gmail.com" target="_blank">
                            nbinkl4483@gmail.com
                        </Anchor>
                    </Group>
                    <Group {...({ gap: "sm" } as any)}>
                        <IconPhone size={20} />
                        <Text>864-609-7067</Text>
                    </Group>
                    <Group {...({ gap: "sm" } as any)}>
                        <IconBrandGithub size={20} />
                        <Anchor href="https://github.com/Nathan-Binkley" target="_blank">
                            github.com/Nathan-Binkley
                        </Anchor>
                    </Group>
                </Group>
                <Text size="sm" c="dimmed" mt="md">
                    United States
                </Text>
            </Stack>
        </Paper>
    );
}

