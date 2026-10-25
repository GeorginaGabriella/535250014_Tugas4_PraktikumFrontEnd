import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand footer-logo">
            <span className="brand-mark">T</span>
            <span className="brand-name">
              TERRA<span>ENERGY</span>
            </span>
          </Link>

          <p>
            Powering today, shaping tomorrow. Building a better
            energy future through innovation and responsible progress.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/about">About Us</Link>
          <Link href="/projects">Our Projects</Link>
          <Link href="/news">Latest News</Link>
          <Link href="/sustainability">Sustainability</Link>
        </div>

        <div className="footer-column">
          <h3>Get in Touch</h3>
          <p>Terra Energy Company Profile</p>
          <p>Jakarta, Indonesia</p>
          <Link href="/about">Learn About Us ↗</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Terra Energy. Academic project.</p>
          <p>Powering Progress, Responsibly.</p>
        </div>
      </div>
    </footer>
  );
}