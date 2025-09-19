"use client"
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const cards = [
    { src: "/images/gbg_show.jpg", label: "Culture", slug: "culture" },
    { src: "/images/hanPark.jpg", label: "Eat & Drink", slug: "eat-drink" },
    { src: "/images/GBG.jpg", label: "Activities", slug: "activities" },
  ];
  const dialogRef = useRef(null);
  const [activeImage, setActiveImage] = useState()
  const [caption, setCaption] = useState()

  console.log('active image', activeImage)

  useEffect(() => {
    if (!activeImage) return;

    dialogRef.current?.showModal();

    // if modal is open you can't scroll the page
    // may shift the page 
    // document.body.style.overflow = 'hidden'; 
    
    dialogRef.current?.addEventListener('close', closeModal); // when the action of closing the modal occurs call the function closeModal
  
    return () => {
      dialogRef.current?.removeEventListener('close', closeModal);
    }
  }, [activeImage])

  function closeModal() {
    dialogRef.current?.close();
    setActiveImage(undefined);
    document.body.style.overflow = '';
  }

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
