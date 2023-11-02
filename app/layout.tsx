import "./ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description:
    "The official Next.js Learn Dashboard built with App Router. By Ramon Metzker",
  metadataBase: new URL("https://nextjs-dashboard-tau-wheat.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nextjs-dashboard-tau-wheat.vercel.app",
    siteName: "Acme Dashboard",
    images: [
      {
        url: "https://nextjs-dashboard-tau-wheat.vercel.app/opengraph-image.png",
        width: 1686,
        height: 882,
        alt: "Acme Dashboard",
      },
    ],
    title: "Acme Dashboard",
    description:
      "The official Next.js Learn Dashboard built with App Router. By Ramon Metzker",
  },
  authors: [
    {
      name: "Ramon Metzker",
      url: "https://github.com/ramonmetzker",
    },
  ],
  twitter: {
    card: "summary_large_image",
    creator: "@ramon_tsx",
    creatorId: "ramon_tsx",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialised`}>{children}</body>
    </html>
  );
}
