import Image from "next/image";

export default function Loading() {
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
        width={180}
        height={180}
        priority
        style={{ width: "auto", height: "auto", maxWidth: "220px" }}
      />
    </main>
  );
}
