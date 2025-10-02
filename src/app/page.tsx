import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div
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
      <span role="img" aria-label="hammer" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        🛠️
      </span>
      <span>Under construction...</span>
    </div>
  );
}
