//"use client";

import ClientDestination from "./ClientDestination";
import styles from "./page.module.css";

export default async function DestinationPage({ params }) {
  // const { slug } = await params;

  const unwrapped = await params;
  console.log("slug params", unwrapped);

  const { slug } = unwrapped;

  return (
    <main className={styles.wrapper}>
      <ClientDestination slug={slug} />
    </main>
  );
}