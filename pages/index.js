import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* HERO SECTION */}
      <header className={styles.heroSection}>
        <nav className={styles.navbar}>
          <div className={styles.logoWrap}>
            <span className={styles.logoSVG}>
              {/* Inline SVG Logo */}
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="12" fill="var(--accent)"/>
                <path d="M12 28L20 12L28 28H12Z" fill="#fff"/>
              </svg>
            </span>
            <span className={styles.logoText}>Project Management App</span>
          </div>
          <a href="#pricing" className={styles.navCTA}>Get Started</a>
        </nav>
        <div className={styles.heroContent}>
          <div className={styles.heroTextCol}>
            <h1 className={styles.heroTitle}>
              Clean, Collaborative <span className={styles.accent}>Project Management</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Empower your team with real-time collaboration, customizable dashboards, automated tracking, and seamless integrations. Everything you need to drive project success in one intuitive SaaS platform.
            </p>
            <a href="#pricing" className={styles.heroCTA}>Start Free Trial</a>
          </div>
          <div className={styles.heroImageCol}>
            {/* Hero Illustration SVG */}
            <svg width="360" height="280" viewBox="0 0 360 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.heroSVG} aria-hidden="true">
              <rect x="22" y="40" width="316" height="180" rx="24" fill="#fff" stroke="var(--accent)" strokeWidth="3"/>
              <rect x="48" y="66" width="264" height="40" rx="10" fill="var(--accent-light)" opacity="0.18"/>
              <rect x="48" y="122" width="100" height="24" rx="6" fill="var(--accent)" opacity="0.88"/>
              <rect x="160" y="122" width="152" height="24" rx="6" fill="var(--accent-light)" opacity="0.8"/>
              <rect x="48" y="158" width="264" height="24" rx="6" fill="var(--accent-dark)" opacity="0.18"/>
              <g>
                <circle cx="320" cy="54" r="8" fill="var(--accent)"/>
                <circle cx="40" cy="188" r="6" fill="var(--accent-light)"/>
                <circle cx="80" cy="40" r="4" fill="var(--accent-dark)"/>
                <circle cx="320" cy="206" r="4" fill="var(--accent-dark)"/>
              </g>
            </svg>
          </div>
        </div>
      </header>

      {/* FEATURES SECTION */}
      <section className={styles.featuresSection} id="features">
        <h2 className={styles.sectionTitle}>Key Features</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <span className={styles.featureSVG}>
              {/* Collaboration SVG */}
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none"><circle cx="21" cy="21" r="21" fill="#F2F1FF"/><path d="M15 24c0-2.21 2.91-4 6.5-4s6.5 1.79 6.5 4v2c0 .55-.45 1-1 1h-11c-.55 0-1-.45-1-1v-2z" fill="#6C63FF"/><circle cx="21.5" cy="16" r="4" fill="#6C63FF"/></svg>
            </span>
            <h3>Real-time Collaboration</h3>
            <p>Work together live on tasks, boards, and timelines—wherever your team is.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureSVG}>
              {/* Dashboard SVG */}
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none"><circle cx="21" cy="21" r="21" fill="#F2F1FF"/><rect x="12" y="14" width="18" height="14" rx="3" fill="#897CFF"/><rect x="15" y="17" width="4" height="8" rx="2" fill="#fff"/><rect x="23" y="17" width="4" height="5" rx="2" fill="#fff"/></svg>
            </span>
            <h3>Customizable Dashboards</h3>
            <p>Design project views to fit your workflow—kanban, timeline, calendar, and more.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureSVG}>
              {/* Task Tracking SVG */}
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none"><circle cx="21" cy="21" r="21" fill="#F2F1FF"/><rect x="14" y="17" width="14" height="3" rx="1.5" fill="#4D42CC"/><rect x="14" y="23" width="10" height="3" rx="1.5" fill="#4D42CC"/><circle cx="29" cy="24.5" r="2" fill="#6C63FF"/></svg>
            </span>
            <h3>Automated Task Tracking</h3>
            <p>Stay on top of progress with smart notifications, reminders, and status updates.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureSVG}>
              {/* Integrations SVG */}
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none"><circle cx="21" cy="21" r="21" fill="#F2F1FF"/><path d="M28 21a7 7 0 11-14 0 7 7 0 0114 0z" fill="#897CFF"/><rect x="20" y="13" width="2" height="16" rx="1" fill="#fff"/><rect x="13" y="20" width="16" height="2" rx="1" fill="#fff"/></svg>
            </span>
            <h3>Seamless Integrations</h3>
            <p>Connect Slack, Google Drive, and more—no friction, just flow.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureSVG}>
              {/* Analytics SVG */}
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none"><circle cx="21" cy="21" r="21" fill="#F2F1FF"/><rect x="13" y="23" width="4" height="6" rx="2" fill="#4D42CC"/><rect x="19" y="17" width="4" height="12" rx="2" fill="#897CFF"/><rect x="25" y="20" width="4" height="9" rx="2" fill="#6C63FF"/></svg>
            </span>
            <h3>Advanced Analytics</h3>
            <p>Visualize project health with custom, exportable reports and dashboards.</p>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS SECTION */}
      <section className={styles.integrationsSection} id="integrations">
        <h2 className={styles.sectionTitle}>Seamless Integrations</h2>
        <p className={styles.integrationsDesc}>
          Connect your favorite tools and supercharge your workflow.
        </p>
        <div className={styles.integrationsGrid}>
          <div className={styles.integrationItem}>
            <span>
              {/* Slack SVG */}
              <svg width="38" height="38" viewBox="0 0 38 38"><rect width="38" height="38" rx="10" fill="#F8F8FF"/><g><circle cx="13" cy="19" r="3" fill="#6C63FF"/><rect x="11.5" y="8" width="3" height="8" rx="1.5" fill="#6C63FF"/><rect x="8" y="13.5" width="8" height="3" rx="1.5" fill="#6C63FF"/><circle cx="25" cy="19" r="3" fill="#4D42CC"/><rect x="23.5" y="22" width="3" height="8" rx="1.5" fill="#4D42CC"/><rect x="22" y="23.5" width="8" height="3" rx="1.5" fill="#4D42CC"/></g></svg>
            </span>
            <span>Slack</span>
          </div>
          <div className={styles.integrationItem}>
            <span>
              {/* Google Drive SVG */}
              <svg width="38" height="38" viewBox="0 0 38 38"><rect width="38" height="38" rx="10" fill="#F8F8FF"/><polygon points="12,30 19,17 26,30" fill="#6C63FF"/><polygon points="19,17 12,30 7,21" fill="#4D42CC"/><polygon points="19,17 31,21 26,30" fill="#897CFF"/></svg>
            </span>
            <span>Google Drive</span>
          </div>
          <div className={styles.integrationItem}>
            <span>
              {/* Trello SVG */}
              <svg width="38" height="38" viewBox="0 0 38 38"><rect width="38" height="38" rx="10" fill="#F8F8FF"/><rect x="11" y="12" width="16" height="14" rx="3" fill="#6C63FF"/><rect x="14" y="15" width="4" height="8" rx="2" fill="#fff"/><rect x="22" y="15" width="4" height="8" rx="2" fill="#fff"/></svg>
            </span>
            <span>Trello</span>
          </div>
          <div className={styles.integrationItem}>
            <span>
              {/* GitHub SVG */}
              <svg width="38" height="38" viewBox="0 0 38 38"><rect width="38" height="38" rx="10" fill="#F8F8FF"/><path d="M19 12c-4 0-7 3-7 7 0 3 2 5.5 4.7 6.4.3.1.3-.1.3-.2v-1c-1.9.4-2.3-.8-2.3-.8-.3-.7-.6-.9-.6-.9-.5-.3.1-.3.1-.3.6 0 .9.6.9.6.5.9 1.3.6 1.7.5.1-.4.2-.6.4-.7-1.5-.2-3.1-.7-3.1-3.3 0-.7.2-1.3.6-1.8-.1-.2-.3-.8.1-1.7 0 0 .5-.2 1.8.7a6.2 6.2 0 013.3 0c1.3-.9 1.8-.7 1.8-.7.4.9.2 1.5.1 1.7.4.5.6 1.1.6 1.8 0 2.6-1.6 3.1-3.1 3.3.2.2.4.5.4 1v1.5c0 .1.1.3.3.2A7 7 0 0026 19c0-4-3-7-7-7z" fill="#4D42CC"/></svg>
            </span>
            <span>GitHub</span>
          </div>
          <div className={styles.integrationItem}>
            <span>
              {/* Zapier SVG */}
              <svg width="38" height="38" viewBox="0 0 38 38"><rect width="38" height="38" rx="10" fill="#F8F8FF"/><circle cx="19" cy="19" r="7" fill="#897CFF"/><rect x="18" y="11" width="2" height="16" rx="1" fill="#fff"/><rect x="11" y="18" width="16" height="2" rx="1" fill="#fff"/><rect x="14.25" y="14.25" width="2" height="9.5" rx="1" transform="rotate(-45 14.25 14.25)" fill="#fff"/><rect x="21.75" y="14.25" width="2" height="9.5" rx="1" transform="rotate(45 21.75 14.25)" fill="#fff"/></svg>
            </span>
            <span>Zapier</span>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className={styles.testimonialsSection} id="testimonials">
        <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.avatarWrap}>
              <svg width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#F2F1FF"/><circle cx="28" cy="24" r="10" fill="#6C63FF"/><rect x="15" y="38" width="26" height="7" rx="3.5" fill="#897CFF"/></svg>
            </div>
            <p className={styles.testimonialText}>
              "This platform completely transformed our team's productivity. The collaboration tools are outstanding, and the dashboards make it so easy to track every project."
            </p>
            <div className={styles.testimonialName}>Sarah K., Product Manager</div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.avatarWrap}>
              <svg width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#F2F1FF"/><circle cx="28" cy="24" r="10" fill="#4D42CC"/><rect x="15" y="38" width="26" height="7" rx="3.5" fill="#6C63FF"/></svg>
            </div>
            <p className={styles.testimonialText}>
              "Integrating with our existing tools was seamless. Automated tracking keeps our projects on time without the micromanagement. Highly recommend!"
            </p>
            <div className={styles.testimonialName}>James L., CTO</div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.avatarWrap}>
              <svg width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#F2F1FF"/><circle cx="28" cy="24" r="10" fill="#897CFF"/><rect x="15" y="38" width="26" height="7" rx="3.5" fill="#4D42CC"/></svg>
            </div>
            <p className={styles.testimonialText}>
              "The analytics and reporting features give us real insight into project health. It’s intuitive, clean, and our team loves using it."
            </p>
            <div className={styles.testimonialName}>Priya D., Operations Lead</div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className={styles.pricingSection} id="pricing">
        <h2 className={styles.sectionTitle}>Pricing Plans</h2>
        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <div className={styles.pricingLabel}>Starter</div>
            <div className={styles.pricingValue}><span>$</span>0<span className={styles.pricingPeriod}>/mo</span></div>
            <ul className={styles.pricingFeatures}>
              <li>Up to 3 projects</li>
              <li>Real-time collaboration</li>
              <li>Basic integrations</li>
              <li>Email support</li>
            </ul>
            <a href="#contact" className={styles.pricingCTA}>Get Started</a>
          </div>
          <div className={styles.pricingCard + ' ' + styles.pricingCardHighlight}>
            <div className={styles.pricingLabel}>Pro</div>
            <div className={styles.pricingValue}><span>$</span>12<span className={styles.pricingPeriod}>/mo</span></div>
            <ul className={styles.pricingFeatures}>
              <li>Unlimited projects</li>
              <li>Custom dashboards</li>
              <li>All integrations</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
            </ul>
            <a href="#contact" className={styles.pricingCTA + ' ' + styles.pricingCTAAccent}>Start Free Trial</a>
          </div>
          <div className={styles.pricingCard}>
            <div className={styles.pricingLabel}>Enterprise</div>
            <div className={styles.pricingValue}>Custom</div>
            <ul className={styles.pricingFeatures}>
              <li>Custom onboarding</li>
              <li>Personalized analytics</li>
              <li>Dedicated account manager</li>
              <li>Enterprise integrations</li>
              <li>24/7 support</li>
            </ul>
            <a href="#contact" className={styles.pricingCTA}>Contact Sales</a>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={styles.faqSection} id="faq">
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          <details className={styles.faqItem}>
            <summary>Can I try Project Management App for free?</summary>
            <div className={styles.faqContent}>Absolutely! Our Starter plan is free forever, and you can start a free trial of Pro any time.</div>
          </details>
          <details className={styles.faqItem}>
            <summary>Do you offer discounts for teams or nonprofits?</summary>
            <div className={styles.faqContent}>Yes, we offer volume and nonprofit discounts. Contact us for custom quotes!</div>
          </details>
          <details className={styles.faqItem}>
            <summary>Which integrations are available?</summary>
            <div className={styles.faqContent}>We support Slack, Google Drive, Trello, GitHub, Zapier, and more. See our Integrations section above.</div>
          </details>
          <details className={styles.faqItem}>
            <summary>Is my data secure?</summary>
            <div className={styles.faqContent}>Yes, we use industry-standard security and encryption to keep your data safe.</div>
          </details>
          <details className={styles.faqItem}>
            <summary>Can I switch plans or cancel at any time?</summary>
            <div className={styles.faqContent}>You can upgrade, downgrade, or cancel anytime—no contracts or hidden fees.</div>
          </details>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className={styles.contactSection} id="contact">
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <form className={styles.contactForm} autoComplete="off" name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.formRow}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <textarea name="message" placeholder="How can we help you?" rows="4" required></textarea>
          <button type="submit" className={styles.formCTA}>Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogoWrap}>
            <span className={styles.logoSVG}>
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="12" fill="var(--accent)"/>
                <path d="M12 28L20 12L28 28H12Z" fill="#fff"/>
              </svg>
            </span>
            <span className={styles.footerLogoText}>Project Management App</span>
          </div>
          <nav className={styles.footerNav}>
            <a href="#features">Features</a>
            <a href="#integrations">Integrations</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className={styles.footerLegal}>© {new Date().getFullYear()} Project Management App. All rights reserved.</div>
      </footer>
    </div>
  );
}
