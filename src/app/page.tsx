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
    <Container size={1600} p="md">
      {/* Hero Section */}
      <Stack align="center">
        <Stack align="center">
          <Text style={{ fontSize: 36, color: "var(--mantine-color-gray-6)", textAlign: "right" }}>{quote.quote}</Text>
          <Text style={{ fontSize: 18, color: "var(--mantine-color-gray-6)", textAlign: "right" }}>~{quote.author}</Text>
        </Stack>
      </Stack>
    </Container>
  );
}
