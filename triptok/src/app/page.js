"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Modal from "./components/modal";

export default function Home() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className={styles.page}>
      <button className="openModalBtn" onClick={() => {setOpenModal(true)}}>testing</button>
      {openModal && <Modal closeModal={setOpenModal}/>}
      <main className={styles.main}>
        <div className="{stlyes.container}">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              letterSpacing: "2px",
              color: "#4f46e5",
              textShadow: "2px 2px 6px rgba(0,0,0,0.2)",
              marginBottom: "1rem",
            }}
          >
            Travel Time ✈️
          </h1>

          <ol>
            <li>Welcome to the base website for Travel Time.</li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className={styles.ctas}>
            <a className={styles.primary} href="#">
                Deploy now
            </a>
            <a className={styles.secondary} href="#">
              Read our docs
            </a>
            
          </div>
        </div>
      </main>

    <footer className={styles.footer}>Footer content here</footer>
  </div>
  );
}