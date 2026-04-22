import type { Metadata } from 'next';

import { hasPlaceholderContact, siteConfig } from '../../site-config';

const deletionSteps = [
  'Send the request from the same email address you use for your Hysj account.',
  'Use a clear subject such as "Hysj account deletion request".',
  'Include enough information for us to identify the correct account without sharing your password.',
  'We may contact you to verify the request before deletion is processed.',
  'Once confirmed, the hosted account and app data tied to that account will be removed from the active system.',
];

const deletionNotes = [
  'Locally cached data on your device may remain until you sign out, clear app storage, or uninstall the app.',
  'Deletion requests are currently handled manually during the testing phase.',
  `The normal response target is within ${siteConfig.deletionRequestWindowDays} days.`,
];

export const metadata: Metadata = {
  title: 'Delete account',
  description: 'How to request deletion of a Hysj account and hosted app data.',
};

export default function DeleteAccountPage() {
  return (
    <div className="page-wrap">
      <section className="page-hero">
        <div className="container section-stack fade-rise">
          <span className="eyebrow">Account deletion</span>
          <h1 className="page-title">How to request deletion of your Hysj account.</h1>
          <p className="page-copy">
            Hysj testers can request permanent account deletion by contacting the support address below. Do not send
            passwords or other secrets in the request.
          </p>

          {hasPlaceholderContact ? (
            <div className="callout callout-warn">
              Replace the placeholder support email before publishing this page or linking it from the app.
            </div>
          ) : null}
        </div>
      </section>

      <section className="page-section">
        <div className="container section-stack">
          <article className="panel section-card fade-rise delay-1">
            <h2>Deletion request contact</h2>
            <p>
              Send deletion requests to{' '}
              <a className="text-link" href={`mailto:${siteConfig.supportEmail}`}>
                {siteConfig.supportEmail}
              </a>
              .
            </p>
          </article>

          <div className="copy-grid">
            <article className="panel section-card fade-rise delay-2">
              <h2>Steps</h2>
              <ol className="step-list">
                {deletionSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>

            <article className="panel section-card fade-rise delay-3">
              <h2>Important notes</h2>
              <ul className="list-block">
                {deletionNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
