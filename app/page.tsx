"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { fetchCollectionFromApi } from "./packages/responses/fetchCollectionFromApi";
import { Collection } from "./packages/interfaces/collection";

export default function Home() {
  const [collection, setCollection] = useState<Collection | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCollectionFromApi(1);
      setCollection(data);
    }
    fetchData();
  }, []);

  console.log(collection);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1> The Jersey Project - My Collection </h1>
      </main>

      <section className={styles.grid}>
        {collection ? (
          collection.jerseys.map((jersey) => (
            <div key={jersey.id} className={styles.jersey}>
              <div className={styles.imageWrapper}>
                <Image
                  src={jersey.image}
                  alt={`${jersey.team} ${jersey.season} ${jersey.type} jersey`}
                  layout="fill"
                />
              </div>
              <div className={styles.information}>
                <h2 className={styles.teamName}>{jersey.team}</h2>
                <div className={styles.season}>
                  {jersey.season} {jersey.type} uniform
                </div>
                <div className={styles.countryName}>{jersey.country}</div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </div>
  );
}
