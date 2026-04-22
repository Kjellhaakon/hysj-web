import type { Metadata } from 'next';

import { hasPlaceholderContact, siteConfig } from '../../site-config';

const supportChecklist = [
  'What you were trying to do',
  'Which device and operating system you used',
  'Whether the issue happened during sign-in, entry editing, sharing, groups, or media upload',
  'Any screenshots or short screen recordings that make the problem easier to reproduce',
];

export const metadata: Metadata = {
  title: 'Support',
  description: 'Support and tester contact information for Hysj.',
};

export default function SupportPage() {
  return (
    <div className="page-wrap">
      <section className="page-hero">
        <div className="container section-stack fade-rise">
          <span className="eyebrow">Support</span>
          <h1 className="page-title">How to get help during Hysj testing.</h1>
          <p className="page-copy">
            Use this page for tester support, bug reports, and rollout questions tied to the current mobile app build.
          </p>

          {hasPlaceholderContact ? (
            <div className="callout callout-warn">
              Replace the placeholder support email before sending testers to this page.
            </div>
          ) : null}
        </div>
      </section>

      <section className="page-section">
        <div className="container section-stack">
          <article className="panel section-card fade-rise delay-1">
            <h2>Support contact</h2>
            <p>
              Email{' '}
              <a className="text-link" href={`mailto:${siteConfig.supportEmail}`}>
                {siteConfig.supportEmail}
              </a>{' '}
              for login issues, tester questions, and bug reports.
            </p>
          </article>

          <div className="copy-grid">
            <article className="panel section-card fade-rise delay-2">
              <h2>Include this in a bug report</h2>
              <ul className="list-block">
                {supportChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="panel section-card fade-rise delay-3">
              <h2>Current rollout scope</h2>
              <ul className="list-block">
                <li>Private testing release track</li>
                <li>Online-first app behavior</li>
                <li>No live monetization in the current build</li>
                <li>No full offline entry or offline map support yet</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
