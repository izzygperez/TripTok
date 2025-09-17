import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const cards = [
    { src: "/gbg_show.jpg", label: "Culture", slug: "culture" },
    { src: "/hanPark.jpg", label: "Eat & Drink", slug: "eat-drink" },
    { src: "/GBG.jpg", label: "Activities", slug: "activities" },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>TripTime</h1>
        <select className={styles.dropdown}>
          <option>Seoul, South Korea</option>
          <option>Tokyo, Japan</option>
          <option>Paris, France</option>
        </select>
      </header>

      <main className={styles.cards}>
        {cards.map((card, i) => (
          <a
            key={i}
            href={`/destination/${card.slug}`} // dynamic route
            className={styles.card}
          >
            <Image
              src={card.src}
              alt={card.label}
              width={320}
              height={450}
              className={styles.image}
              priority
            />
            <p className={styles.label}>{card.label}</p>
          </a>
        ))}
      </main>
    </div>
  );
}
