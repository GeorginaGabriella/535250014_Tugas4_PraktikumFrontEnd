import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center" }}>
        <p className="section-label">404 — Page Not Found</p>
        <h1 className="section-title">
          Looks like you are off the grid.
        </h1>
        <p className="section-description" style={{ marginInline: "auto" }}>
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="primary-button"
          style={{ marginTop: "28px" }}
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}