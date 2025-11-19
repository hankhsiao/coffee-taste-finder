"use client";

import Header from "./Header";
import Footer from "./Footer";

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

interface PageLayoutProps {
  title: string;
  logo?: string | React.ReactNode;
  children: React.ReactNode;
  socialLinks?: SocialLink[];
  copyrightText?: string;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
}

export default function PageLayout({
  title,
  logo,
  children,
  socialLinks,
  copyrightText,
  headerContent,
  footerContent,
}: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-paper text-primary-text">
      {/* Sticky Header */}
      <Header title={title} logo={logo} />

      {/* Header extra content (optional) */}
      {headerContent && (
        <div className="w-full bg-paper">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
            {headerContent}
          </div>
        </div>
      )}

      {/* Main Body - grows to fill available space */}
      <main className="flex-1 w-full">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Responsive padding - mobile first */}
          <div className="py-8 sm:py-10 md:py-12 lg:py-16">{children}</div>
        </div>
      </main>

      {/* Footer extra content (optional) */}
      {footerContent && (
        <div className="w-full bg-paper">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
            {footerContent}
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer socialLinks={socialLinks} copyrightText={copyrightText} />
    </div>
  );
}
