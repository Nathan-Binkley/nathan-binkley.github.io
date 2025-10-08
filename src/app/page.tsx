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
  Box,
  useMantineTheme
} from "@mantine/core";
import { MdCode, MdStorage, MdCloud, MdEmojiEvents, MdEmail, MdPhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import quotes from "./data/quotes.json";

const startDate = new Date("2025-10-08");

function getTodaysQuote() {
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return quotes[diffDays % quotes.length];
}

export default function Home() {

  const theme = useMantineTheme();

  const quote = getTodaysQuote();

  return (
    <Container size="lg" p="xl" px="15px">
      {/* Hero Section */}
      <Stack gap="xl" px="15px" align="center">
        <Stack align="center" gap="md">
          <Text style={{ fontSize: 42, color: "var(--mantine-color-gray-6)", textAlign: "right" }}>{quote.quote}</Text>
          <Text style={{ fontSize: 24, color: "var(--mantine-color-gray-6)", textAlign: "right" }}>~{quote.author}</Text>
        </Stack>
      </Stack>
    </Container>
  );
}
