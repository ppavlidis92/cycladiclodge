"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import styles from "@/app/page.module.css";

const menuItems = [
  { key: "ourStory", href: "/" },
  { key: "stayWithUs", href: "/stay-with-us" },
  { key: "experience", href: "/the-experience" },
  { key: "contact", href: "/get-in-touch" },
];

export default function SiteHeader() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <header className={styles.topBar}>
      <Link className={styles.logoBlock} href="/" aria-label="Cycladic Lodge home">
        <Image
          src="/logo.png"
          alt="Cycladic Lodge logo"
          width={300}
          height={100}
          priority
          className={styles.logoImage}
        />
      </Link>

      <nav className={styles.nav} aria-label="Primary navigation">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.key}
              href={item.href}
              className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {t(`nav.${item.key}`)}
            </Link>
          );
        })}

        <label className={styles.languageSelectWrap}>
          <select
            aria-label={t("nav.language")}
            className={styles.languageSelect}
            value={i18n.language}
            onChange={(event) => i18n.changeLanguage(event.target.value)}
          >
            <option value="en">EN</option>
            <option value="el">EL</option>
          </select>
        </label>
      </nav>
    </header>
  );
}
