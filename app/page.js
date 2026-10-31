export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="logo">GreenLeaf <span>Cafe</span></div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Fresh coffee, homemade bakery, made with care every morning.</h1>
        <p>
          GreenLeaf Cafe is a small neighbourhood cafe. We bake fresh every day,
          brew carefully, and welcome everyone like family.
        </p>
        <a className="btn" href="#menu">See today&apos;s menu</a>
        <a className="btn secondary" href="#contact">Visit us</a>
      </section>

      <section className="section" id="services">
        <h2>What we do</h2>
        <div className="grid">
          <div className="card"><h3>Fresh Coffee</h3><p>Espresso, cappuccino, latte and filter coffee, brewed to order.</p></div>
          <div className="card"><h3>Homemade Bakery</h3><p>Croissants, cakes, cookies and fresh bread, baked in-house daily.</p></div>
          <div className="card"><h3>Catering</h3><p>Small events, office mornings and family gatherings — we bring the cafe to you.</p></div>
        </div>
      </section>

      <section className="section" id="menu">
        <h2>Menu highlights</h2>
        <div className="grid">
          <div className="card"><h3>Cappuccino</h3><p>Rich espresso, steamed milk and a soft foam top.</p><p className="price">$3.50</p></div>
          <div className="card"><h3>Butter Croissant</h3><p>Flaky, buttery and baked fresh every morning.</p><p className="price">$2.80</p></div>
          <div className="card"><h3>Chocolate Cake Slice</h3><p>Our most loved homemade cake, served all day.</p><p className="price">$4.20</p></div>
        </div>
      </section>

      <section className="section">
        <h2>What customers say</h2>
        <div className="grid">
          <div className="card"><p>“The best coffee in the neighbourhood, and the croissants sell out fast for a reason.”</p><p><strong>— A happy regular</strong></p></div>
          <div className="card"><p>“A calm, friendly place to work, meet friends, or just slow down for a while.”</p><p><strong>— A local visitor</strong></p></div>
        </div>
      </section>

      <section className="section" id="contact">
        <h2>Visit GreenLeaf Cafe</h2>
        <div className="hours">
          <p><strong>Opening hours</strong><br />Monday – Friday: 8:00 AM – 7:00 PM<br />Saturday – Sunday: 9:00 AM – 8:00 PM</p>
          <p><strong>Contact</strong><br />Email: hello@greenleafcafe.example<br />Phone: +92 300 0000000 (test number)</p>
          <p>This is a test landing page built with Next.js, deployed on Vercel.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 GreenLeaf Cafe — A test small-business landing page.</p>
      </footer>
    </main>
  );
}
