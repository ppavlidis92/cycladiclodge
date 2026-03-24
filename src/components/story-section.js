"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "@/app/page.module.css";

export default function StorySection() {
  const { t } = useTranslation();
  const intro = t("story.intro", { returnObjects: true });
  const storyColumns = t("story.columns", { returnObjects: true });

  return (
    <section className={styles.storySection}>
      <div className={styles.storyIntro}>
        <div className={styles.storyCopy}>
          {intro.map((paragraph, index) => (
            <p
              key={paragraph}
              className={index === intro.length - 1 ? styles.storyParagraphGap : undefined}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className={styles.storyMarkWrap}>
          <Image
            src="/loading.png"
            alt=""
            aria-hidden="true"
            width={216}
            height={216}
            className={styles.storyMark}
          />
        </div>
      </div>

      <div className={styles.storyDivider} />

      <div className={styles.storyColumns}>
        {storyColumns.map((column) => (
          <article key={column.title} className={styles.storyColumn}>
            <h2 className={styles.storyColumnTitle}>{column.title}</h2>
            <div className={styles.storyColumnRule} />
            <div className={styles.storyColumnCopy}>
              {column.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className={styles.storyDivider} />
    </section>
  );
}
