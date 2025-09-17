export default function Home() {
  return (
    <main>
      <header>
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
          <button className="address">Gyeongbokgung</button>
          <button className="address">Bukchon Hanok Village</button>
          <h2 className="placeType">Cultural Landmarks</h2>
          <button className="address">DMZ</button>
          <button className="address">Han River</button>
        </section>
        <section>
          <p>IMAGES</p>
        </section>
        <section className="notes">
          <h2>Notes</h2>
          <p>IDK SOMETHING</p>
        </section>
      </article>
    </main>
  );
}