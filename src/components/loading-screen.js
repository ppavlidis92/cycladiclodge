"use client";

import Image from "next/image";

export default function LoadingScreen() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#ffffff",
      }}
    >
      <Image
        src="/loading.png"
        alt="Loading"
        width={270}
        height={270}
        priority
        style={{ width: "auto", height: "auto", maxWidth: "330px" }}
      />
    </main>
  );
}
