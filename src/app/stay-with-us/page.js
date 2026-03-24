import StayWithUsShell from "@/components/stay-with-us-shell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Stay With Us | Cycladic Lodge Sifnos",
  description:
    "Explore the rooms at Cycladic Lodge Sifnos, including Vathy, Fykiada, Vroulidia, and Fasolou, with amenities, room details, and photo galleries.",
  path: "/stay-with-us",
});

export default function StayWithUsPage() {
  return <StayWithUsShell />;
}
