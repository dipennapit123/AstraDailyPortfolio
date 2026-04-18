export type SiteFeature = {
  title: string;
  description: string;
};

export type SiteScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type SiteScreenshotGalleryItem = {
  title: string;
  description: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type SiteHeroScreen = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const site = {
  name: "AstraDaily",
  tagline: "Daily horoscopes with a calm, modern UI.",
  description:
    "AstraDaily is a horoscope app for quick daily insights, personalized by your zodiac sign.",
  metadataBaseUrl: "https://example.com",
  contactEmail: "dipennapit45@gmail.com",
  /** Blog — use `/blog` for the on-site page or an external URL (e.g. Medium, Substack) */
  blogUrl: "/blog",
  storeLinks: {
    ios: "https://example.com/ios",
    /** Google Play — listing opens when the app is published under this applicationId */
    android:
      "https://play.google.com/store/apps/details?id=com.dipennapit.astradaily",
  },
  demo: {
    title: "Product demo",
    /** Replace with your product demo watch URL */
    youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  },
  /** Home hero — two overlapping phone screenshots (source files in public/hero/) */
  /** Home hero: left-to-right = splash, then select-sign (see app/page.tsx) */
  heroScreens: [
    {
      src: "/hero/app-splash.png",
      alt: "AstraDaily — free daily horoscope splash with zodiac wheel",
      width: 508,
      height: 1024,
    },
    {
      src: "/hero/app-select-sign.png",
      alt: "AstraDaily — select your zodiac sign",
      width: 499,
      height: 1024,
    },
  ] satisfies SiteHeroScreen[],
  screenshots: [
    {
      src: "/screenshots/screenshot-1.svg",
      alt: "Daily horoscope screen",
      width: 1200,
      height: 800,
    },
    {
      src: "/screenshots/screenshot-2.svg",
      alt: "Zodiac selection screen",
      width: 1200,
      height: 800,
    },
    {
      src: "/screenshots/screenshot-3.svg",
      alt: "Settings screen",
      width: 1200,
      height: 800,
    },
  ] satisfies SiteScreenshot[],
  /** Home + /screenshots gallery (local marketing captures) */
  screenshotGallery: [
    {
      title: "Splash",
      description:
        "A calm entry with the zodiac wheel, loading state, and clear AI entertainment disclaimer.",
      src: "/screenshots/gallery/splash.png",
      alt: "AstraDaily splash screen with zodiac wheel",
      width: 576,
      height: 1024,
    },
    {
      title: "Select sign",
      description:
        "Pick from all twelve signs—your choice drives the horoscope you see.",
      src: "/screenshots/gallery/select-sign.png",
      alt: "AstraDaily select zodiac sign screen",
      width: 576,
      height: 1024,
    },
    {
      title: "Daily horoscope",
      description:
        "Read for your sign and switch between yesterday, today, and tomorrow.",
      src: "/screenshots/gallery/daily-horoscope.png",
      alt: "AstraDaily daily horoscope with day toggle",
      width: 576,
      height: 1024,
    },
    {
      title: "Love, career & wealth",
      description:
        "Structured sections for the areas that matter—still AI-generated for entertainment.",
      src: "/screenshots/gallery/love-career-wealth.png",
      alt: "AstraDaily horoscope sections for love, career, and wealth",
      width: 576,
      height: 1024,
    },
  ] satisfies SiteScreenshotGalleryItem[],
  features: [
    {
      title: "Fast daily read",
      description: "A clear daily horoscope without the noise.",
    },
    {
      title: "Personalized by sign",
      description: "Choose your zodiac sign and keep it synced.",
    },
    {
      title: "Modern, calm design",
      description: "Readable typography and a dark-first aesthetic.",
    },
    {
      title: "Built for mobile",
      description: "Simple flows for sign selection, reading, and settings.",
    },
  ] satisfies SiteFeature[],
} as const;

