import ExperienceShell from "@/components/experience-shell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "The Experience | Cycladic Lodge Sifnos",
  description:
    "Experience Sifnos through sea, stroll, and delight: beaches, village walks, and local flavors curated by Cycladic Lodge.",
  path: "/the-experience",
});

export default function ExperiencePage() {
  return <ExperienceShell />;
}
