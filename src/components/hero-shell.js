import Image from "next/image";
import ImageCarousel from "@/components/image-carousel";
import EuBannerSection from "@/components/eu-banner-section";
import SiteHeader from "@/components/site-header";
import StorySection from "@/components/story-section";
import StructuredData from "@/components/structured-data";
import { siteUrl } from "@/lib/seo";
import styles from "@/app/page.module.css";

export default function HeroShell() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Cycladic Lodge Sifnos",
    url: siteUrl,
    image: `${siteUrl}/hero.jpg`,
    logo: `${siteUrl}/logo.png`,
    email: "info@cycladiclodge.gr",
    telephone: "+302284032170",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Katavati",
      addressLocality: "Sifnos",
      postalCode: "84003",
      addressCountry: "GR",
    },
  };

  return (
    <main className={styles.page}>
      <StructuredData data={data} />
      <section className={styles.heroFrame}>
        <SiteHeader />

        <div className={styles.heroVisual}>
          <Image
            src="/hero.jpg"
            alt="Exterior view of Cycladic Lodge apartments in Sifnos"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroShade} />

          <aside className={styles.awardCard}>
            <span className={styles.awardCaption}>Awarded to</span>
            <strong className={styles.awardTitle}>Cycladic Lodge Sifnos</strong>
            <div className={styles.awardFooter}>
              <div>
                <span className={styles.awardBrand}>Booking.com</span>
                <span className={styles.awardMeta}>Traveller Review Awards 2026</span>
              </div>
              <span className={styles.awardScore}>9.2</span>
            </div>
          </aside>
        </div>
      </section>

      <StorySection />
      <ImageCarousel />
      <EuBannerSection />
    </main>
  );
}
