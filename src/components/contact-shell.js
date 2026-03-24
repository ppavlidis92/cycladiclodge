"use client";

import { useTranslation } from "react-i18next";
import SiteHeader from "@/components/site-header";
import StructuredData from "@/components/structured-data";
import { getGoogleMapEmbedUrl } from "@/lib/maps";
import { siteUrl } from "@/lib/seo";
import styles from "@/app/page.module.css";

export default function ContactShell() {
  const { t, i18n } = useTranslation();

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
              title={t("contact.mapTitle")}
              src={getGoogleMapEmbedUrl(i18n.language)}
              className={styles.contactMap}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className={styles.contactInfo}>
            <h1 className={styles.contactTitle}>{t("contact.title")}</h1>
            <div className={styles.contactDetails}>
              <p>{t("contact.address")}</p>
              <p>+302284032170</p>
              <p>info@cycladiclodge.gr</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
