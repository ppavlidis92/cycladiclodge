import "./globals.css";
import I18nProvider from "@/components/i18n-provider";
import CookieConsent from "@/components/cookie-consent";
import SiteFooter from "@/components/site-footer";
import { buildMetadata, siteUrl } from "@/lib/seo";

export const metadata = {
  ...buildMetadata({
    title: "Cycladic Lodge | Apartments in Sifnos",
    description:
      "Cycladic Lodge offers boutique apartments in Sifnos, Greece, with thoughtfully designed stays, island experiences, and direct contact information.",
  }),
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/loading.png",
    shortcut: "/loading.png",
    apple: "/loading.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          {children}
          <SiteFooter />
          <CookieConsent />
        </I18nProvider>
      </body>
    </html>
  );
}
