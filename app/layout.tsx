import type { Metadata } from 'next';
import Link from 'next/link';
import { DM_Sans, Space_Grotesk } from 'next/font/google';

import { siteConfig } from '../site-config';
import './globals.css';

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.appName,
    template: `%s | ${siteConfig.appName}`,
  },
  description: siteConfig.siteTagline,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <div className="site-shell">
          <header className="site-header">
            <div className="container header-inner">
              <Link className="brand" href="/">
                <span className="brand-mark">Hysj</span>
                <span className="brand-subtitle">Outdoor journals, sharing, and support information</span>
              </Link>

              <nav className="nav-links" aria-label="Primary">
                <Link className="nav-link" href="/privacy">
                  Privacy
                </Link>
                <Link className="nav-link" href="/delete-account">
                  Delete account
                </Link>
                <Link className="nav-link" href="/support">
                  Support
                </Link>
              </nav>
            </div>
          </header>

          <main>{children}</main>

          <footer className="site-footer">
            <div className="container footer-inner">
              <div>
                <p className="footer-title">{siteConfig.appName}</p>
                <p className="footer-copy">{siteConfig.siteTagline}</p>
              </div>

              <div className="footer-links">
                <Link href="/privacy">Privacy</Link>
                <Link href="/delete-account">Delete account</Link>
                <Link href="/support">Support</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
