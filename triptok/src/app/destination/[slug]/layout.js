"use client";

import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";

const sectionsBySlug = {
  culture: [
    {
      title: "Historical Places",
      items: [
        { name: "Gyeongbokgung", address: "161 Sajik-ro, Jongno-gu, Seoul" },
        { name: "Bukchon Hanok Village", address: "37 Gyedong-gil, Jongno-gu, Seoul" },
      ],
    },
    {
      title: "Cultural Landmarks",
      items: [
        { name: "DMZ", address: "???" },
        { name: "Han River", address: "330 Yeouidong-ro, Yeongdeungpo-gu, Seoul" },
      ],
    },
  ],
  "food-drink": [
    {
      title: "Cafés",
      items: [
        { name: "Clementine", address: "5-1 Seoulsup 2-gil, Seongdong-gu, Seoul" },
        { name: "Cheongsudang Bakery", address: "31-9 Donhwamun-ro 11na-gil, Jongno District, Seoul" },
      ],
    },
    {
      title: "Restaurants",
      items: [
        { name: "Solsot Yeonnam Branch", address: "35 Donggyo-ro 38-gil, Mapo-gu, Seoul" },
        { name: "Ocheonjip", address: "31-10 Donhwamun-ro 11na-gil, Ikseon-dong, Jongno District, Seoul" },
      ],
    },
  ],
  activity: [
    {
      title: "Parks & Trails",
      items: [
        { name: "Han River", address: "330 Yeouidong-ro, Yeongdeungpo-gu, Seoul" },
        { name: "Bukhansan Hike", address: "Bukhansan National Park" },
      ],
    },
    {
      title: "Outdoor Adventures",
      items: [{ name: "Naksan Park Night Walk", address: "Seoul" }],
    },
  ],
};

const imagesBySlug = {
  culture: [
    { src: "/images/gbg_history.jpg", alt: "Older Gyeongbokgung Image" },
    { src: "/images/gbg_inside.jpg", alt: "Gyeongbokgung Building" },
    { src: "/images/gbg_show.jpg", alt: "Gyeongbokgung Parade" },
    { src: "/images/GBG.jpg", alt: "Gyeongbokgung at Night" },
    { src: "/images/gbg(1).jpg", alt: "Gyeongbokgung with Snow" },
    { src: "/images/gyeongbokgung.jpg", alt: "Gyeongbokgung" },
  ],
  "food-drink": [
    { src: "/images/food-drink/Clementine (1).jpg", alt: "Clementine dishes" },
    { src: "/images/food-drink/Clementine2.JPG", alt: "Clementine interior" },
  ],
  activity: [
    { src: "/images/activity/hanriver.jpg", alt: "Han River Park" },
  ],
};

const notesBySlug = {
  culture: ["IDK SMTH"],
  "food-drink": ["IDK SMTH"],
  activity: ["IDK SMTH"],
};

export default function DestinationPage() {
  const { slug } = useParams(); 
  const dialogRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null); 

  const sections = sectionsBySlug[slug] || [];
  const images = imagesBySlug[slug] || [];
  const notes = notesBySlug[slug] || [];

  // open/close modal + lock scroll without layout shift
  useEffect(() => {
    if (!activeImage) return;

    dialogRef.current?.showModal();

    // if modal is open, scroll bar is hidden (changes layout)
    // document.body.style.overflow = 'hidden'; 

    dialogRef.current?.addEventListener("close", closeModal);

    return () => {
      dialogRef.current?.removeEventListener('close', closeModal);    };
  }, [activeImage]);

  function closeModal(prevY) {
    dialogRef.current?.close();
    setActiveImage(undefined);
    document.body.style.overflow = '';
  }

  // if no slug is found, show "not found"
  if (!sectionsBySlug[slug]) {
    return (
      <main>
        <h1 className="title">Not Found</h1>
      </main>
    );
  }

  return (
    <main>
      <header>
        <button className="home">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi-house-door" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
          </svg>
        </button>
        <h1 className="title">TripTime</h1>

        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#013d5a" className="bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            Categories
          </button>
          <div className={styles.dropdownContent}>
            <a className={styles.dd1} href="/destination/culture">Culture</a>
            <a className={styles.dd2} href="/destination/food-drink">Eat & Drink</a>
            <a className={styles.dd3} href="/destination/activity">Activities</a>
          </div>
        </div>
      </header>

      <article className={styles.article}>
        <section className={styles.locations}>
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className={styles.placeType}>{section.title}</h2>
              {section.items.map((it) => (
                <button key={it.name} className={styles.address}>
                  <span className={styles.addyName}>{it.name}</span><br />
                  <span className={styles.span}>{it.address}</span>
                </button>
              ))}
            </div>
          ))}
        </section>

        <section className={styles.imageFeed}>
          <div className={styles.imgGrid}>
            <dialog ref={dialogRef} className={styles.modal}>
              <div className={styles.polaroidFrame}>
                {activeImage && (
                  <Image src={activeImage} alt="Selected" width={400} height={400} />
                )}
              </div>
              <button className={styles.closeBtn} onClick={() => closeModal()}>
                X
              </button>
            </dialog>

            {images.map((img) => (
              <div key={img.src} className={styles.pic}>
                <button onClick={() => setActiveImage(img.src)}>
                  <Image src={img.src} alt={img.alt || ""} fill />
                </button>
              </div>
            ))}
          </div>
        </section>

        {notes.length > 0 && (
          <section className={styles.notes}>
            <h2>Notes</h2>
            <ul>
              {notes.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          </section>
        )}
      </article>
    </main>
  );
}


