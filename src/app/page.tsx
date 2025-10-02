import Image from "next/image";
import styles from "./page.module.css";
import { Stack, Text } from "@mantine/core";

export default function Home() {
  return (
    <Stack
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        fontSize: "2rem",
        textAlign: "center",
      }}
    >
      <Text role="img" aria-label="hammer" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        🛠️
      </Text>
      <Text>Under construction...</Text>
    </Stack>
  );
}
