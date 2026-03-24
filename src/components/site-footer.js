"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "@/components/site-footer.module.css";

export default function SiteFooter() {
  const pathname = usePathname();
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
          <p>Katavati, Apollonia</p>
          <p>Sifnos 84003, Greece</p>
          <p>Tel: +30 22840 32170</p>
          <p>
            Email:{" "}
            <a href="mailto:info@cycladiclodge.gr" className={styles.inlineLink}>
              info@cycladiclodge.gr
            </a>
          </p>
        </div>

        <div className={styles.mapColumn}>
          <div className={styles.mapFrame}>
            <iframe
              title="Cycladic Lodge Sifnos map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3187.875360328871!2d24.7193059!3d36.9650335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1498f35fd5ec2a7b%3A0x8596d9af3bea712c!2sCycladic%20Lodge%20Sifnos!5e0!3m2!1sen!2sgr!4v1774348870688!5m2!1sen!2sgr"
              className={styles.map}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>All rights reserved © Cycladic Lodge 2024</p>
        <button
          type="button"
          className={styles.cookieButton}
          onClick={() =>
            window.dispatchEvent(new CustomEvent("cycladic-open-cookie-settings"))
          }
        >
          Cookie Settings
        </button>
      </div>
    </footer>
  );
}
