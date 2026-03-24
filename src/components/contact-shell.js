import SiteHeader from "@/components/site-header";
import StructuredData from "@/components/structured-data";
import { siteUrl } from "@/lib/seo";
import styles from "@/app/page.module.css";

export default function ContactShell() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Cycladic Lodge Sifnos contact information",
    mainEntity: {
      "@type": "LodgingBusiness",
      name: "Cycladic Lodge Sifnos",
      url: `${siteUrl}/get-in-touch`,
      telephone: "+302284032170",
      email: "info@cycladiclodge.gr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Katavati",
        addressLocality: "Sifnos",
        postalCode: "84003",
        addressCountry: "GR",
      },
    },
  };

  return (
    <main className={styles.page}>
      <StructuredData data={data} />
      <section className={`${styles.subpageFrame} ${styles.contactFrame}`}>
        <SiteHeader />

        <section className={styles.contactSection}>
          <div className={styles.contactMapWrap}>
            <iframe
              title="Cycladic Lodge Sifnos contact map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3187.875360328871!2d24.7193059!3d36.9650335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1498f35fd5ec2a7b%3A0x8596d9af3bea712c!2sCycladic%20Lodge%20Sifnos!5e0!3m2!1sen!2sgr!4v1774348870688!5m2!1sen!2sgr"
              className={styles.contactMap}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className={styles.contactInfo}>
            <h1 className={styles.contactTitle}>Contact info</h1>
            <div className={styles.contactDetails}>
              <p>Katavati, Sifnos 84003, Greece</p>
              <p>+302284032170</p>
              <p>info@cycladiclodge.gr</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
