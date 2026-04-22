import Link from 'next/link';

import { hasPlaceholderContact, siteConfig } from '../site-config';

const quickLinks = [
  {
    href: '/privacy',
    title: 'Privacy policy',
    copy: 'What Hysj stores in the current testing phase and what is intentionally not enabled yet.',
  },
  {
    href: '/delete-account',
    title: 'Account deletion',
    copy: 'How testers can request permanent deletion of their Hysj account and hosted app data.',
  },
  {
    href: '/support',
    title: 'Support',
    copy: 'How to report bugs, sign-in issues, and tester feedback during the rollout phase.',
  },
];

const releaseFacts = [
  'The current site supports the private testing rollout for the Hysj mobile app.',
  'The app is online-first in the current release track.',
  'Ads, subscriptions, and full offline entry and map support are planned later, not live in this build.',
];

export default function HomePage() {
  return (
    <div className="page-wrap">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-panel panel fade-rise">
            <span className="eyebrow">Private testing website</span>
            <h1 className="hero-title">A public home for Hysj privacy, support, and account help.</h1>
            <p className="hero-copy">
              Hysj is an outdoor journaling and sharing app currently moving through limited Android testing. This site
              keeps the public, browser-openable pages needed for testers, reviewers, and future store rollout.
            </p>

            <div className="cta-row">
              <Link className="primary-link" href="/privacy">
                Read the privacy policy
              </Link>
              <Link className="secondary-link" href="/support">
                Get support
              </Link>
            </div>
          </div>

          <aside className="panel status-panel fade-rise delay-1">
            <p className="status-label">Current release track</p>
            <p className="status-value">{siteConfig.releaseStage}</p>
            <ul className="fact-list">
              {releaseFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="page-section">
        <div className="container section-stack">
          {hasPlaceholderContact ? (
            <div className="callout callout-warn fade-rise delay-2">
              Replace the placeholder support and privacy email addresses before publishing this site to Vercel.
            </div>
          ) : null}

          <div className="card-grid">
            {quickLinks.map((item, index) => (
              <Link className={`panel quick-card fade-rise delay-${index + 1}`} href={item.href} key={item.href}>
                <p className="card-kicker">Public page</p>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
                <span className="text-link">Open page</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
