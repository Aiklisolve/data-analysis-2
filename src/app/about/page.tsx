"use client";
import Link from "next/link";

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <header
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(10,10,20,0.6), rgba(10,10,20,0.6)), url('/about-hero-background.jpg')`,
        }}
      >
        <div className="max-w-3xl px-6 animate-fade-up">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            About <span className="text-indigo-300">Data Analysis 2</span>
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            Built to demonstrate how modern analytics can transform everyday data into clear,
            actionable stories that drive growth, efficiency, and smarter decisions.
          </p>
        </div>
      </header>

      {/* INTRO SECTION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-20 px-6 animate-fade-up">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-slate-800">
            A clear, customizable analytics experience
          </h2>
          <p className="text-slate-600 mb-5">
            This demo showcases a lightweight, customizable analytics workflow built with
            Next.js, Tailwind CSS, and Chart.js. It connects data, visuals, and narrative into a
            single, cohesive interface. Users can filter, compare, and explore performance
            without complex setup.
          </p>
          <p className="text-slate-600 mb-5">
            The goal is to illustrate the essentials of a modern data platform: speed,
            clarity, and adaptability. The layout mimics real-world use cases—from client demos to
            executive briefings—so you can easily extend or embed it into production systems.
          </p>

          <div className="flex gap-3 mt-6">
            <Link href="/dashboard" className="btn btn-primary">
              Open Dashboard
            </Link>
            <Link href="/" className="btn">
              Back Home
            </Link>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-xl hover:scale-[1.02] transition-all duration-500">
          <img
            src="/workspace-dashboard.jpg"
            alt="Data analytics workspace"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ANALYTICS DETAILS SECTION */}
      <section className="bg-gray-50 py-20 px-6 animate-fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-slate-800 text-center">
            Our Approach to Data Analytics
          </h2>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
            The demo simulates the data journey: from ingestion to visualization, focusing on
            simplicity and interpretability. The process reflects real data analytics workflows
            while keeping visuals minimal and elegant.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                Data Preparation
              </h3>
              <p className="text-slate-600 text-sm">
                Raw CSV data is cleaned, aggregated, and aligned to categories. Outliers are
                automatically flagged, and missing values interpolated for smoother visualization.
              </p>
              <img src="/data-cleaning-process.jpg" alt="Data preparation" className="rounded-lg mt-4" />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                Visualization
              </h3>
              <p className="text-slate-600 text-sm">
                Using Chart.js, data is translated into interactive bar and line charts. Each chart
                responds to filters, highlighting trends and seasonality for quick interpretation.
              </p>
              <img src="/chart-visualization-scene.jpg" alt="Visualization charts" className="rounded-lg mt-4" />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                Insights
              </h3>
              <p className="text-slate-600 text-sm">
                Key performance indicators like revenue, order volume, and basket size are summarized
                and compared across time frames. Visuals are optimized for presentation and
                storytelling.
              </p>
              <img src="/analytics-report-summary.jpg" alt="Insights visualization" className="rounded-lg mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto py-20 px-6 animate-fade-up">
        <h2 className="text-3xl font-semibold text-slate-800 mb-8 text-center">
          How the Analytics Workflow Operates
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed">
              Data analytics isn’t just about numbers; it’s about connecting performance metrics
              to decisions. This demo uses a simple, transparent flow:
            </p>
            <ul className="list-decimal ml-6 text-slate-700">
              <li>Upload or use the preloaded dataset.</li>
              <li>Apply date, region, and category filters.</li>
              <li>Render interactive visualizations using Chart.js.</li>
              <li>Generate KPIs and summaries dynamically.</li>
              <li>Export visuals or share reports in one click.</li>
            </ul>
            <p className="text-slate-600 mt-4">
              The emphasis is on usability — analytics that’s accessible to teams without technical
              backgrounds, but still powerful for data scientists.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-500">
            <img src="/data-workflow-diagram.jpg" alt="Workflow" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* GALLERY & DATA VISUALS */}
      <section className="bg-gray-50 py-20 px-6 animate-fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-800 mb-8 text-center">
            Gallery & Data Visuals
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            A glimpse into how <span className="font-semibold text-indigo-600">Data Analysis 2</span> brings information to life —
            transforming complex data into engaging, intuitive visuals. Below are two sample perspectives:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* IMAGE 1 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-white">
              <img
                src="/gallery-dashboard.jpg"
                alt="Data dashboard presentation"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Data Dashboard Overview</h3>
                <p className="text-slate-600 text-sm">
                  A clean, interactive dashboard displaying KPIs and performance trends. The layout emphasizes clarity —
                  key insights at a glance, powered by intuitive filtering and smart chart visuals.
                </p>
              </div>
            </div>

            {/* IMAGE 2 */}
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-white">
              <img
                src="/business-analyst-review.jpg"
                alt="Analyst reviewing data"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Human + Data Insights</h3>
                <p className="text-slate-600 text-sm">
                  Analytics is most powerful when humans interpret it. This visual captures the balance between data tools and
                  human decision-making, where dashboards inform strategy and creativity drives action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center py-20 animate-fade-up">
        <h2 className="text-3xl font-semibold mb-4 text-slate-800">
          Ready to build your analytics story?
        </h2>
        <p className="text-slate-600 mb-8">
          Explore the live demo, inspect the code, and adapt it for your next data-driven project.
        </p>
        <div className="flex justify-center gap-3">
          <Link href="/dashboard" className="btn btn-primary">
            Open Dashboard
          </Link>
          <Link href="/" className="btn">
            Back Home
            
          </Link>
        </div>
      </section>
    </main>
  );
}
