"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import SiteHeader from "@/components/site-header";
import styles from "@/app/page.module.css";

const sectionImages = {
  sea: [
    "/experience/sea/1-4-scaled.jpg",
    "/experience/sea/2-4-scaled.jpg",
    "/experience/sea/3-4-scaled.jpg",
  ],
  stroll: [
    "/experience/stroll/1-5-scaled.jpg",
    "/experience/stroll/2-5-scaled.jpg",
    "/experience/stroll/3-5-scaled.jpg",
  ],
  delight: [
    "/experience/delight/1-6-scaled.jpg",
    "/experience/delight/2-6-scaled.jpg",
    "/experience/delight/3-6-scaled.jpg",
  ],
};

export default function ExperienceShell() {
  const { t } = useTranslation();
  const translatedSections = t("experience.sections", { returnObjects: true });
  const experienceSections = translatedSections.map((section) => ({
    ...section,
    images: sectionImages[section.id] ?? [],
  }));

  return (
    <main className={styles.page}>
      <section className={styles.subpageFrame}>
        <SiteHeader />

        <section className={styles.experienceSection}>
          {experienceSections.map((section) => (
            <article key={section.title} className={styles.experienceBlock}>
              <div className={styles.experienceGallery}>
                {section.images.map((image) => (
                  <div key={image} className={styles.experienceImageWrap}>
                    <Image
                      src={image}
                      alt={t("experience.labels.imageAlt", {
                        section: section.title,
                        index: section.images.indexOf(image) + 1,
                      })}
                      fill
                      sizes="(max-width: 820px) 90vw, 22vw"
                      className={styles.experienceImage}
                    />
                  </div>
                ))}
              </div>

              <div className={styles.experienceCopy}>
                <h2 className={styles.experienceTitle}>{section.title}</h2>
                <div className={styles.experienceRule} />
                <div className={styles.experienceParagraphs}>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.join(" ")} className={styles.experienceParagraph}>
                      {paragraph.map((line) => (
                        <span key={line} className={styles.experienceLine}>
                          {line}
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
