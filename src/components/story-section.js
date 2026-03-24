import Image from "next/image";
import styles from "@/app/page.module.css";

const storyColumns = [
  {
    title: "WHITE",
    lines: [
      "In Cycladic style, bathed in white that reflects the sun. Bright, warm, familiar.",
      "Minimal and pure.",
    ],
  },
  {
    title: "GRAY",
    lines: [
      "Sifnian stone and shutters.",
      "Sand and golden dust that glistens.",
      "You rush over burning sand. Then still. Watching, at ease.",
    ],
  },
  {
    title: "GREEN",
    lines: [
      "Up in the mountains, where green meets the sky.",
      "With peace and stillness. The tall chapels.",
      "Sifnos' quiet side, always serene.",
    ],
  },
];

export default function StorySection() {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyIntro}>
        <div className={styles.storyCopy}>
          <p>
            Calliope was born in 1870. At just eight years old, she left for
            Constantinople to work and send money back home.
          </p>
          <p>
            That was the beginning of what we now know as the &quot;Cycladic
            Lodge&quot; - something she slowly started to build, piece by piece.
          </p>
          <p>
            Back in her homeland, where her heart always belonged. Four
            generations later, in 2024, Olga returned to breathe new life into
            it - restoring it and opening its doors.
          </p>
          <p className={styles.storyParagraphGap}>
            She didn&apos;t just create a place to stay - she brought to life
            something warm, comforting, peaceful, and carefree. A space that
            offers not just rest, but a deep sense of calm and well-being - the
            kind we all search for under the open blue sky. Right where our
            heart belongs, in beautiful Sifnos.
          </p>
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
