"use client";

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

interface FooterProps {
  socialLinks?: SocialLink[];
  copyrightText?: string;
}

export default function Footer({
  socialLinks = [],
  copyrightText = "© 2025 Coffee Taste Finder. All rights reserved.",
}: FooterProps) {
  return (
    <footer className="w-full bg-paper border-t border-border mt-12 sm:mt-16 md:mt-20">
      {/* Full-bleed section */}
      <div className="w-full">
        {/* Centered content container */}
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Responsive padding */}
          <div className="py-8 sm:py-10 md:py-12">
            {/* Social media section */}
            {socialLinks.length > 0 && (
              <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    aria-label={link.label}
                    className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-light-accent hover:bg-coffee text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-lg sm:text-xl">{link.icon}</span>
                  </a>
                ))}
              </div>
            )}

            {/* Copyright section */}
            <div className="text-center">
              <p className="text-muted-text text-xs sm:text-sm">
                {copyrightText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
