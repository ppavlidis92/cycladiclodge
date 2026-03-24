"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  Car01Icon,
  Columns02Icon,
  File01Icon,
  FlexAlignLeftIcon,
  Lock01Icon,
  Monitor02Icon,
  Snowflake01Icon,
  Star06Icon,
  WifiIcon,
} from "@untitledui/icons-react/outline";
import SiteHeader from "@/components/site-header";
import StayRoomsShowcase from "@/components/stay-rooms-showcase";
import styles from "@/app/page.module.css";

const amenityColumns = [
  [
    { key: "wifi", icon: WifiIcon, type: "ui" },
    { key: "air", icon: Snowflake01Icon, type: "ui" },
    { key: "parking", icon: Car01Icon, type: "ui" },
  ],
  [
    { key: "tv", icon: Monitor02Icon, type: "ui" },
    { key: "wardrobe", icon: Columns02Icon, type: "ui" },
    { key: "fridge", icon: FlexAlignLeftIcon, type: "ui" },
  ],
  [
    { key: "coffee", icon: Monitor02Icon, type: "ui" },
    { key: "iron", icon: "/ironing.svg", type: "image" },
    { key: "hairdryer", icon: "/hairdryer.svg", type: "image" },
  ],
  [
    { key: "care", icon: Star06Icon, type: "ui" },
    { key: "safe", icon: Lock01Icon, type: "ui" },
    { key: "towels", icon: File01Icon, type: "ui" },
  ],
];

function AmenityIcon({ item }) {
  if (item.type === "image") {
    return (
      <Image
        src={item.icon}
        alt=""
        width={16}
        height={16}
        className={styles.stayAmenityIconImage}
      />
    );
  }

  const Icon = item.icon;

  return <Icon className={styles.stayAmenityIconSvg} aria-hidden="true" />;
}

export default function StayWithUsShell() {
  const { t } = useTranslation();
  const intro = t("stay.intro", { returnObjects: true });
  const amenityLabels = t("stay.amenities", { returnObjects: true });

  return (
    <main className={styles.page}>
      <section className={styles.subpageFrame}>
        <SiteHeader />

        <section className={styles.staySection}>
          <div className={styles.stayIntro}>
            {intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className={styles.stayDivider} />

          <div className={styles.stayAmenities}>
            {amenityColumns.map((column, index) => (
              <div key={index} className={styles.stayAmenityColumn}>
                {column.map((item, itemIndex) => (
                  <div key={item.key} className={styles.stayAmenityItem}>
                    <span className={styles.stayAmenityIcon} aria-hidden="true">
                      <AmenityIcon item={item} />
                    </span>
                    <span>{amenityLabels[index][itemIndex]}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className={styles.stayDivider} />

          <StayRoomsShowcase />
        </section>
      </section>
    </main>
  );
}
