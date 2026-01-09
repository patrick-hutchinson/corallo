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
        {!isMobile && (
          <header className={styles.header}>
            <DownloadCatalogue file={home.catalogue} className={styles.link} />
            <a href={`mailto:${site.email}`} className={styles.link}>
              CONTACT ME
            </a>
          </header>
        )}

        {isMobile && <DownloadCatalogue file={home.catalogue} className={styles.link} />}

        <div className={styles.animation}>
          <video autoPlay muted playsInline loop>
            <source src={home.animation.asset.url} />
          </video>
        </div>
        <Text className={styles.introduction} text={home.introduction} />

        {isMobile && (
          <a href={`mailto:${site.email}`} className={styles.link}>
            CONTACT ME
          </a>
        )}
      </main>
    </div>
  );
}
