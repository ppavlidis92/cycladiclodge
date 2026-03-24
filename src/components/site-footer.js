"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { getGoogleMapEmbedUrl } from "@/lib/maps";
import styles from "@/components/site-footer.module.css";

export default function SiteFooter() {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const isContactPage = pathname === "/get-in-touch";

  return (
    <footer
      className={`${styles.footer} ${isContactPage ? styles.footerTightTop : ""}`}
    >
      <div className={styles.mainRow}>
        <div className={styles.logoColumn}>
          <Image
            src="/logo.png"
            alt="Cycladic Lodge logo"
            width={360}
            height={120}
            className={styles.logo}
          />
        </div>

        <div className={styles.infoColumn}>
          <p>{t("footer.addressLineOne")}</p>
          <p>{t("footer.addressLineTwo")}</p>
          <p>{t("footer.phone")}</p>
          <p>
            {t("footer.email")}{" "}
            <a href="mailto:info@cycladiclodge.gr" className={styles.inlineLink}>
              info@cycladiclodge.gr
            </a>
          </p>
        </div>

        <div className={styles.mapColumn}>
          <div className={styles.mapFrame}>
            <iframe
              title={t("footer.mapTitle")}
              src={getGoogleMapEmbedUrl(i18n.language)}
              className={styles.map}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>{t("footer.copyright")}</p>
        <button
          type="button"
          className={styles.cookieButton}
          onClick={() =>
            window.dispatchEvent(new CustomEvent("cycladic-open-cookie-settings"))
          }
        >
          {t("footer.cookieSettings")}
        </button>
      </div>
    </footer>
  );
}
