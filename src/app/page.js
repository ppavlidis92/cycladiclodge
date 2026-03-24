import HeroShell from "@/components/hero-shell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cycladic Lodge | Apartments in Sifnos",
  description:
    "Discover Cycladic Lodge in Sifnos: boutique apartments, island-inspired hospitality, curated gallery highlights, and a peaceful stay in Katavati.",
  path: "/",
});

export default function Home() {
  return <HeroShell />;
}
