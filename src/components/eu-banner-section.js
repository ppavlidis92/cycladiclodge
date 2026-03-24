"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "@/app/page.module.css";

const bannerItems = [
  {
    key: "el",
    imageSrc: "/eubanner/eubanner%20gr.jpg",
    pdfSrc: "/eubanner/TOURISMOS_WEB_AFISA%20GR.pdf",
    title: "EU funding banner in Greek",
  },
  {
    key: "en",
    imageSrc: "/eubanner/eubanners%20en.jpg",
    pdfSrc: "/eubanner/TOURISMOS_WEB_AFISA_EN.pdf",
    title: "EU funding banner in English",
  },
];

export default function EuBannerSection() {
  const { i18n } = useTranslation();
  const [activeBanner, setActiveBanner] = useState(null);

  const visibleBanner = useMemo(() => {
    if (i18n.language === "el") {
      return bannerItems[0];
    }

    return bannerItems[1];
  }, [i18n.language]);

  useEffect(() => {
    if (!activeBanner) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveBanner(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeBanner]);

  return (
    <>
      <section className={styles.euBannerSection} aria-label="European Union funding banners">
        <div className={styles.euBannerGrid}>
          <button
            type="button"
            className={styles.euBannerButton}
            onClick={() => setActiveBanner(visibleBanner)}
            aria-label={`Open ${visibleBanner.title} PDF`}
          >
            <Image
              src={visibleBanner.imageSrc}
              alt={visibleBanner.title}
              width={840}
              height={280}
              className={styles.euBannerImage}
            />
          </button>
        </div>
      </section>

      {activeBanner ? (
        <div
          className={styles.euBannerModal}
          role="dialog"
          aria-modal="true"
          aria-label={activeBanner.title}
          onClick={() => setActiveBanner(null)}
        >
          <div className={styles.euBannerModalCard} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.euBannerModalClose}
              onClick={() => setActiveBanner(null)}
              aria-label="Close PDF preview"
            >
              ×
            </button>

            <iframe
              src={activeBanner.pdfSrc}
              title={activeBanner.title}
              className={styles.euBannerModalFrame}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
