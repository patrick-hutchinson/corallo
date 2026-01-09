"use client";

import styles from "./Home.module.css";

import Text from "@/components/Text/Text";
import DownloadCatalogue from "@/components/DownloadCatalogue/DownloadCatalogue";
import { DeviceContext } from "@/context/DeviceContext";
import { useContext } from "react";

export default function Home({ site, home }) {
  const { isMobile } = useContext(DeviceContext);

  if (!site || !home) return undefined;
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <DownloadCatalogue file={home.catalogue} />
          <a href={`mailto:${site.email}`}>CONTACT ME</a>
        </header>

        <div className={styles.animation}>
          <video autoPlay muted playsInline loop>
            <source src={home.animation.asset.url} />
          </video>
        </div>
        <Text className={styles.introduction} text={home.introduction} />
      </main>
    </div>
  );
}
