import SiteHeader from "@/components/site-header";
import styles from "@/app/page.module.css";

export default function BlankPageShell() {
  return (
    <main className={styles.page}>
      <section className={styles.subpageFrame}>
        <SiteHeader />
        <div className={styles.subpageContent} />
      </section>
    </main>
  );
}
