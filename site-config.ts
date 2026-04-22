export const siteConfig = {
  appName: 'Hysj',
  siteTagline: 'Public website and support pages for Hysj',
  releaseStage: 'Private testing',
  supportEmail: 'khberget5@gmail.com',
  privacyEmail: 'khberget5@gmail.com',
  legalUpdatedAt: '2026-04-22',
  deletionRequestWindowDays: 30,
};

export const hasPlaceholderContact = [siteConfig.supportEmail, siteConfig.privacyEmail].some((value) =>
  value.includes('replace-before-launch.example'),
);
