import type { Metadata } from 'next';

import { hasPlaceholderContact, siteConfig } from '../../site-config';

const privacySections = [
  {
    title: 'Account and profile data',
    points: ['Email address', 'Email-verification state', 'Profile names and display names when a user provides them'],
  },
  {
    title: 'User-created content',
    points: ['Entry titles and notes', 'Category-specific entry values', 'Event timestamps and visibility settings'],
  },
  {
    title: 'Location and place data',
    points: [
      'Entry coordinates when the user sets or confirms a location',
      'Current device location only when the user explicitly asks Hysj to fill it',
      'Nearby place-name suggestions derived from map-provider services',
    ],
  },
  {
    title: 'Media and metadata',
    points: [
      'Uploaded entry images',
      'Normalized display and thumbnail variants',
      'Extracted image metadata such as timestamp or GPS coordinates when present in EXIF data',
    ],
  },
  {
    title: 'Sharing and group data',
    points: ['Share requests', 'Direct grants', 'Group memberships and invites', 'Stored contact email addresses used for sharing'],
  },
  {
    title: 'Device and operational data',
    points: ['Auth session state needed to keep the user signed in', 'Stored language preference needed for app localization'],
  },
];

const currentExclusions = [
  'No live ads in the current testing build',
  'No paid subscriptions in the current testing build',
  'No third-party advertising or billing SDKs in the current testing build',
  'No background location collection',
  'No full offline entry cache or offline map packs in the current testing build',
];

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'What Hysj stores and how privacy is handled during the current testing phase.',
};

export default function PrivacyPage() {
  return (
    <div className="page-wrap">
      <section className="page-hero">
        <div className="container section-stack fade-rise">
          <span className="eyebrow">Privacy policy</span>
          <h1 className="page-title">What Hysj handles in the current testing phase.</h1>
          <p className="page-copy">
            This page describes the current Hysj testing build. It will be updated when the app adds major new data
            flows such as monetization or offline storage.
          </p>

          <div className="meta-strip">
            <span>Last updated {siteConfig.legalUpdatedAt}</span>
            <span>Current release track: {siteConfig.releaseStage}</span>
          </div>

          {hasPlaceholderContact ? (
            <div className="callout callout-warn">
              Replace the placeholder privacy contact before publishing this page publicly.
            </div>
          ) : null}
        </div>
      </section>

      <section className="page-section">
        <div className="container section-stack">
          <div className="copy-grid">
            {privacySections.map((section, index) => (
              <article className={`panel section-card fade-rise delay-${(index % 3) + 1}`} key={section.title}>
                <h2>{section.title}</h2>
                <ul className="list-block">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <article className="panel section-card fade-rise delay-2">
            <h2>What is not enabled yet</h2>
            <ul className="list-block">
              {currentExclusions.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="panel section-card fade-rise delay-3">
            <h2>Questions about privacy</h2>
            <p>
              For privacy questions, contact{' '}
              <a className="text-link" href={`mailto:${siteConfig.privacyEmail}`}>
                {siteConfig.privacyEmail}
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
