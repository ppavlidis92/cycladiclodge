import Image from "next/image";
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
    { label: "Free WiFi", icon: WifiIcon, type: "ui" },
    { label: "Air condition", icon: Snowflake01Icon, type: "ui" },
    { label: "Parking", icon: Car01Icon, type: "ui" },
  ],
  [
    { label: "TV", icon: Monitor02Icon, type: "ui" },
    { label: "Wardrobe", icon: Columns02Icon, type: "ui" },
    { label: "Mini Fridge", icon: FlexAlignLeftIcon, type: "ui" },
  ],
  [
    { label: "Coffee/Tea Maker", icon: Monitor02Icon, type: "ui" },
    { label: "Iron", icon: "/ironing.svg", type: "image" },
    { label: "Hair dryer", icon: "/hairdryer.svg", type: "image" },
  ],
  [
    { label: "Personal Care products", icon: Star06Icon, type: "ui" },
    { label: "Safe Box", icon: Lock01Icon, type: "ui" },
    { label: "Towels", icon: File01Icon, type: "ui" },
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
  return (
    <main className={styles.page}>
      <section className={styles.subpageFrame}>
        <SiteHeader />

        <section className={styles.staySection}>
          <div className={styles.stayIntro}>
            <p>
              White and grey, nestled in green - in the heart of Sifnos, in
              Katavati.
            </p>
            <p>Four independent rooms, newly built and renovated in 2024,</p>
            <p>fully equipped and with private parking.</p>
          </div>

          <div className={styles.stayDivider} />

          <div className={styles.stayAmenities}>
            {amenityColumns.map((column, index) => (
              <div key={index} className={styles.stayAmenityColumn}>
                {column.map((item) => (
                  <div key={item.label} className={styles.stayAmenityItem}>
                    <span className={styles.stayAmenityIcon} aria-hidden="true">
                      <AmenityIcon item={item} />
                    </span>
                    <span>{item.label}</span>
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
