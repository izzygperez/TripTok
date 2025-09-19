"use client"
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";

export default function Home() {
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
    <main>
      <header>
        <button className="home"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
</svg></button>
        <h1 className="title">TripTime</h1>
        <div className="dropdown">
          <button className="dropbtn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#013d5a" className="bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>  Categories</button>
          <div className="dropdown-content">
            <a id="dd1" href="#">Culture</a>
            <a id="dd2" href="#">Eat & Drink</a>
            <a id="dd3" href="#">Activities</a>
          </div>
        </div>
      </header>
      <article>
        <section className="locations">
          <h2 className="placeType">Historical Places</h2>
          <button className="address">
            <span className="addyName">Gyeongbokgung</span><br></br>
            <span>161 Sajik-ro, Jongno-gu, Seoul</span>
          </button>
          <button className="address">
            <span className="addyName">Bukchon Hanok Village</span><br></br>
            <span>37 Gyedong-gil, Jongno-gu, Seoul</span>
            </button>
          <h2 className="placeType">Cultural Landmarks</h2>
          <button className="address">
            <span className="addyName">DMZ</span><br></br>
            <span>???</span>
          </button>
          <button className="address">
            <span className="addyName">Han River</span><br></br>
            <span>330 Yeouidong-ro, Yeongdeungpo-gu, Seoul</span>
          </button>
        </section>
        <section className="imageFeed">
          <div className="imgGrid">
            <dialog ref={dialogRef} className="modal" >
              <button 
                className="closeBtn"
                onClick={closeModal}
              >
                X
              </button>
              <div className="polaroid-frame">
                {activeImage && (
                  <Image src={activeImage} alt={caption} width={400} height={400}></Image>
                )}
              </div>
              <h2>{caption}</h2>
            </dialog>
            <div className="pic">
              <button 
                onClick={() => {
                  setActiveImage("/images/gbg_history.jpg");
                  setCaption("Older Gyeongbokgung");
                }}
              >
                <Image src="/images/gbg_history.jpg" alt="Older Gyeongbokgung Image" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/gbg_inside.jpg")}>
                <Image src="/images/gbg_inside.jpg" alt="Gyeongbokgung Building" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/gbg_show.jpg")}>
                <Image src="/images/gbg_show.jpg" alt="Gyeongbokgung Parade" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/GBG.jpg")}>
                <Image src="/images/GBG.jpg" alt="Gyeongbokgung at Night" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/gbg(1).jpg")}>
                <Image src="/images/gbg(1).jpg" alt="Gyeongbokgung with Snow" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/gyeongbokgung.jpg")}>
                <Image src="/images/gyeongbokgung.jpg" alt="Gyeongbokgung" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/gbg_history.jpg")}>
                <Image src="/images/gbg_history.jpg" alt="Older Gyeongbokgung Image" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/gbg_inside.jpg")}>
                <Image src="/images/gbg_inside.jpg" alt="Gyeongbokgung Building" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/gbg_show.jpg")}>
                <Image src="/images/gbg_show.jpg" alt="Gyeongbokgung Parade" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/GBG.jpg")}>
                <Image src="/images/GBG.jpg" alt="Gyeongbokgung at Night" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/gbg(1).jpg")}>
                <Image src="/images/gbg(1).jpg" alt="Gyeongbokgung with Snow" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/gyeongbokgung.jpg")}>
                <Image src="/images/gyeongbokgung.jpg" alt="Gyeongbokgung" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/gbg_history.jpg")}>
                <Image src="/images/gbg_history.jpg" alt="Older Gyeongbokgung Image" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/gbg_inside.jpg")}>
                <Image src="/images/gbg_inside.jpg" alt="Gyeongbokgung Building" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/gbg_show.jpg")}>
                <Image src="/images/gbg_show.jpg" alt="Gyeongbokgung Parade" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/GBG.jpg")}>
                <Image src="/images/GBG.jpg" alt="Gyeongbokgung at Night" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/gbg(1).jpg")}>
                <Image src="/images/gbg(1).jpg" alt="Gyeongbokgung with Snow" fill></Image>
              </button>
            </div>
            <div className="pic">
              <button onClick={() => setActiveImage("/images/gyeongbokgung.jpg")}>
                <Image src="/images/gyeongbokgung.jpg" alt="Gyeongbokgung" fill></Image>
              </button>
            </div>
          </div>
        </section>
        <section className="notes">
          <h2>Notes</h2>
          <p>IDK SOMETHING</p>
        </section>
      </article>
    </main>
  );
}