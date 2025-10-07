export default function Home() {
  return (
    <main className="landing-root">
      {/* HERO SECTION */}
      <header
        className="landing-hero"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(6,8,20,0.65), rgba(10,12,24,0.28)), url('/hero-bg.jpg')",
        }}
        aria-label="Hero"
      >
        <div className="container">
          <div className="hero-inner">
            <div className="hero-text fade-up">
              <h1>
                Turn <span className="accent">retail data</span> into clear, visual stories.
              </h1>

              <p className="hero-lead">
                Track KPIs, spot trends, compare categories and identify anomalies — all in a slick, presentation-ready
                analytics experience. Explore the demo dashboard or scroll for sample visuals, KPIs and feature highlights.
              </p>

              <div className="hero-actions">
                <a className="btn-primary" href="/dashboard">Open Dashboard</a>
                <a className="btn-ghost" href="/about">Learn More</a>
              </div>

              <div className="hero-meta">
                <div className="meta-item">
                  <div className="meta-label">Data Source</div>
                  <div className="meta-value">Demo retail dataset</div>
                </div>
                <div className="meta-item">
                  <div className="meta-label">Updated</div>
                  <div className="meta-value">Today — live preview</div>
                </div>
              </div>
            </div>

            <aside className="hero-aside floaty">
              <div className="metric">
                <div className="metric-label">Revenue (30d)</div>
                <div className="metric-value">$342,810</div>
                <div className="metric-sub positive">+14.2%</div>
              </div>

              {/* local sparkline image */}
              <img
                className="hero-spark"
                src="/hero-spark.jpg"
                alt="sparkline placeholder"
                loading="lazy"
              />

              <div className="mini-cta">
                <a className="btn-primary small" href="/dashboard">Open Demo</a>
                <a className="btn-ghost small" href="/docs">View docs</a>
              </div>
            </aside>
          </div>
        </div>

        {/* subtle decorative overlay SVG to add depth */}
        <svg className="hero-overlay" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
          <path d="M0,40 C360,0 1080,80 1440,40 L1440 80 L0 80 Z" fill="rgba(255,255,255,0.02)" />
        </svg>
      </header>

      {/* KEY KPI GRID */}
      <section className="container kpi-grid fade-up">
        <div className="kpi-card">
          <div className="kpi-title">Total Revenue</div>
          <div className="kpi-value">$4,120,540</div>
          <div className="kpi-note">Year to date • +9.8%</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">Orders (30d)</div>
          <div className="kpi-value">27,830</div>
          <div className="kpi-note">Avg order value $52.60</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">Conversion</div>
          <div className="kpi-value">3.8%</div>
          <div className="kpi-note">Sessions → Purchase</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">Active Stores</div>
          <div className="kpi-value">214</div>
          <div className="kpi-note">EMEA / APAC / NA</div>
        </div>
      </section>

      {/* ANALYTICS DETAIL SECTION */}
      <section className="container analytics-details fade-up">
        <div className="analytics-left">
          <h2>What the analytics show</h2>
          <p className="muted">
            The dashboard surfaces high-impact signals: trending SKUs, promotion lift by region, time-series anomalies,
            and cohort performance. Filters let you isolate by store cluster, category, or date range for fast root-cause analysis.
          </p>

          <ul className="detail-list">
            <li><strong>Trend detection:</strong> Auto-detected events and seasonal patterns with suggested baselines.</li>
            <li><strong>Promotion lift:</strong> Compare treated vs control stores and calculate incremental revenue.</li>
            <li><strong>Cohort analysis:</strong> Retention and repeat purchase behavior by acquisition channel.</li>
          </ul>

          <div className="analytics-actions">
            <a className="btn-primary" href="/dashboard">Explore analytics</a>
            <a className="btn-ghost" href="/tutorial">View tutorial</a>
          </div>
        </div>

        <div className="analytics-right">
          <img
            src="/analytics-detail.jpg"
            alt="Analytics dashboard screenshot"
            loading="lazy"
          />
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="container gallery fade-up">
        <h3>In-store moments</h3>
        <p className="muted">Contextual images that tie metrics to real-world operations.</p>

        <div className="gallery-grid">
          <figure>
            <img src="/gallery-display.jpg" alt="display" loading="lazy" />
            <figcaption>Merch displays</figcaption>
          </figure>
          <figure>
            <img src="/gallery-aisle.jpg" alt="aisle" loading="lazy" />
            <figcaption>Front aisle</figcaption>
          </figure>
          <figure>
            <img src="/gallery-staff.jpg" alt="staff" loading="lazy" />
            <figcaption>Team on floor</figcaption>
          </figure>
          <figure>
            <img src="/gallery-customers.jpg" alt="customers" loading="lazy" />
            <figcaption>Customers</figcaption>
          </figure>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container cta fade-up">
        <div className="cta-inner">
          <div>
            <h3>See it in action</h3>
            <p className="muted">Open the interactive demo and analyze the retail dataset in minutes.</p>
          </div>

          <div className="cta-actions">
            <a className="btn-primary" href="/dashboard">Open Demo</a>
            <a className="btn-ghost" href="/contact">Contact Sales</a>
          </div>
        </div>
      </section>
    </main>
  );
}
