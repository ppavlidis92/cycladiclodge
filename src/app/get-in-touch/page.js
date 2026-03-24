import ContactShell from "@/components/contact-shell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get In Touch | Cycladic Lodge Sifnos",
  description:
    "Contact Cycladic Lodge Sifnos for apartment stays, directions, and booking information in Katavati, Sifnos, Greece.",
  path: "/get-in-touch",
});

export default function GetInTouchPage() {
  return <ContactShell />;
}
