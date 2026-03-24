import Image from "next/image";
import SiteHeader from "@/components/site-header";
import styles from "@/app/page.module.css";

const experienceSections = [
  {
    title: "SEA",
    images: [
      "/experience/sea/1-4-scaled.jpg",
      "/experience/sea/2-4-scaled.jpg",
      "/experience/sea/3-4-scaled.jpg",
    ],
    paragraphs: [
      [
        "From the well-known beaches of Chrysopigi, Platis",
        "Gialos, and Vathi, to the picturesque spots of",
        "Cheronissos and Kamares - and our own hidden gems",
        "like Glyfo, Fasolou, Saoures, and Poulati - you'll",
        "always find a place to cool off.",
      ],
      [
        "You'll dive in, swim around - green waters or blue,",
        "whatever calls to you.",
        "Until sunset. Beneath the tamarisk trees, where the sea",
        "whispers its sweetest secrets.",
      ],
    ],
  },
  {
    title: "STROLL",
    images: [
      "/experience/stroll/1-5-scaled.jpg",
      "/experience/stroll/2-5-scaled.jpg",
      "/experience/stroll/3-5-scaled.jpg",
    ],
    paragraphs: [
      [
        "Up to the Kastro for the most dreamy sunset, with",
        "views across the Aegean. And down the narrow alleys",
        "of Artemonas, where the scent of sweets and loukoumi",
        "fills the air.",
      ],
      [
        "End up in the steno - our cozy alleyway spot - for",
        "that first drink, a little buzz, and maybe a dance to",
        "shake off the day. Only to find yourself back there",
        "again - tomorrow.",
      ],
    ],
  },
  {
    title: "DELIGHT",
    images: [
      "/experience/delight/1-6-scaled.jpg",
      "/experience/delight/2-6-scaled.jpg",
      "/experience/delight/3-6-scaled.jpg",
    ],
    paragraphs: [
      [
        "Tselementes. One word, a world of flavors, memories,",
        "and images. Mizithra, Manoura, Sunday Revithia, and",
        "Mastelo.",
      ],
      [
        "By the sea or tucked away in a hidden little taverna",
        "between the greenery and the cobbled streets. In your",
        "swimsuit, or just whatever's light and easy - savoring",
        "the most delightful tastes of the island.",
      ],
    ],
  },
];

export default function ExperienceShell() {
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
                      alt={`${section.title} experience`}
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
