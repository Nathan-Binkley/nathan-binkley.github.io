"use client";
import {
  Container,
  Title,
  Text,
  Stack,
  Group,
  Badge,
  Card,
  Grid,
  ThemeIcon,
  Anchor,
  Divider,
  Box
} from "@mantine/core";
import { MdCode, MdStorage, MdCloud, MdEmojiEvents, MdEmail, MdPhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Container size="lg" py="xl">
      {/* Hero Section */}
      <Stack gap="xl" mb="xl">
        <Box ta="center">
          <Title order={1} size="3rem" fw={700} mb="md">
            Nathaniel Binkley
          </Title>
          <Text size="xl" c="dimmed" mb="lg">
            Software Engineer focused on API development and Financial Technology
          </Text>
          <Group justify="center" gap="md">
            <Anchor href="mailto:nbinkl4483@gmail.com" c="blue">
              <Group gap="xs">
                <MdEmail size={16} />
                <Text>nbinkl4483@gmail.com</Text>
              </Group>
            </Anchor>
            <Anchor href="tel:8646097067" c="blue">
              <Group gap="xs">
                <MdPhone size={16} />
                <Text>864-609-7067</Text>
              </Group>
            </Anchor>
            <Anchor href="https://github.com/Nathan-Binkley" c="blue" target="_blank">
              <Group gap="xs">
                <FaGithub size={16} />
                <Text>GitHub</Text>
              </Group>
            </Anchor>
          </Group>
        </Box>
      </Stack>

      {/* Key Achievements */}
      <Card shadow="sm" padding="lg" radius="md" withBorder mb="xl">
        <Title order={2} mb="md" c="blue">Key Achievements</Title>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Group mb="sm">
              <ThemeIcon color="green" size="lg" radius="xl">
                <MdEmojiEvents size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Revenue Growth</Text>
                <Text size="sm" c="dimmed">Increased ARR from $12M → $53M in 14 months</Text>
              </div>
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Group mb="sm">
              <ThemeIcon color="blue" size="lg" radius="xl">
                <MdStorage size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Database Migration</Text>
                <Text size="sm" c="dimmed">Zero-downtime MongoDB → SQL migration, 95% performance improvement</Text>
              </div>
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Group mb="sm">
              <ThemeIcon color="orange" size="lg" radius="xl">
                <MdCode size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Cost Reduction</Text>
                <Text size="sm" c="dimmed">Reduced mail ad costs by $3M+ per month at Capital One</Text>
              </div>
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Group mb="sm">
              <ThemeIcon color="purple" size="lg" radius="xl">
                <MdCloud size={20} />
              </ThemeIcon>
              <div>
                <Text fw={600}>Tech Leadership</Text>
                <Text size="sm" c="dimmed">Led engineering teams at Series A startup</Text>
              </div>
            </Group>
          </Grid.Col>
        </Grid>
      </Card>

      {/* Experience Highlights */}
      <Card shadow="sm" padding="lg" radius="md" withBorder mb="xl">
        <Title order={2} mb="md" c="blue">Recent Experience</Title>
        <Stack gap="md">
          <div>
            <Group justify="space-between" mb="xs">
              <Text fw={600} size="lg">Backend Software Engineer</Text>
              <Badge color="blue">Bosscat</Badge>
            </Group>
            <Text size="sm" c="dimmed" mb="xs">June 2023 - September 2024</Text>
            <Text size="sm">Led backend development contributing to $50M ARR growth from $11M. Managed database migration and payment processing integrations.</Text>
          </div>

          <Divider />

          <div>
            <Group justify="space-between" mb="xs">
              <Text fw={600} size="lg">Full Stack Software Engineer</Text>
              <Badge color="green">Capital One</Badge>
            </Group>
            <Text size="sm" c="dimmed" mb="xs">February 2022 - June 2023</Text>
            <Text size="sm">Developed microservices for PDF contract processing and reduced operational costs by $3M+ monthly.</Text>
          </div>
        </Stack>
      </Card>

      {/* Skills */}
      <Card shadow="sm" padding="lg" radius="md" withBorder mb="xl">
        <Title order={2} mb="md" c="blue">Technical Skills</Title>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Text fw={600} mb="xs">Languages</Text>
            <Group gap="xs">
              <Badge size="sm">Java</Badge>
              <Badge size="sm">Python</Badge>
              <Badge size="sm">Go</Badge>
              <Badge size="sm">TypeScript</Badge>
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Text fw={600} mb="xs">Frameworks</Text>
            <Group gap="xs">
              <Badge size="sm">Spring Boot</Badge>
              <Badge size="sm">React</Badge>
              <Badge size="sm">Node.js</Badge>
              <Badge size="sm">Angular</Badge>
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Text fw={600} mb="xs">Databases</Text>
            <Group gap="xs">
              <Badge size="sm">PostgreSQL</Badge>
              <Badge size="sm">MongoDB</Badge>
              <Badge size="sm">Redis</Badge>
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Text fw={600} mb="xs">DevOps</Text>
            <Group gap="xs">
              <Badge size="sm">AWS</Badge>
              <Badge size="sm">Docker</Badge>
              <Badge size="sm">Jenkins</Badge>
            </Group>
          </Grid.Col>
        </Grid>
      </Card>

      {/* Featured Projects */}
      <Card shadow="sm" padding="lg" radius="md" withBorder mb="xl">
        <Title order={2} mb="md" c="blue">Featured Projects</Title>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder padding="md" radius="md">
              <Text fw={600} mb="xs">Consi | consiapp.com</Text>
              <Text size="sm" c="dimmed" mb="sm">Full-stack application with Java Spring Boot backend and React/NextJS frontend</Text>
              <Group gap="xs">
                <Badge size="xs" color="blue">Java</Badge>
                <Badge size="xs" color="cyan">React</Badge>
                <Badge size="xs" color="green">AWS</Badge>
                <Badge size="xs" color="purple">Stripe</Badge>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card withBorder padding="md" radius="md">
              <Text fw={600} mb="xs">Discord Bot</Text>
              <Text size="sm" c="dimmed" mb="sm">Wordle score tracking bot with utility features for Discord servers</Text>
              <Group gap="xs">
                <Badge size="xs" color="yellow">Python</Badge>
                <Badge size="xs" color="blue">Discord.py</Badge>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </Card>

      {/* Education & Involvement */}
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title order={2} mb="md" c="blue">Education & Leadership</Title>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text fw={600} mb="xs">Bachelor of Science in Computer Science</Text>
            <Text size="sm" c="dimmed">Clemson University | 2021</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text fw={600} mb="xs">Director, CUhackit</Text>
            <Text size="sm" c="dimmed">Clemson University | 2018-2021</Text>
          </Grid.Col>
        </Grid>
      </Card>
    </Container>
  );
}
