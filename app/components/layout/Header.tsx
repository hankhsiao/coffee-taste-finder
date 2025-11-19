"use client";

interface HeaderProps {
  title: string;
  logo?: string | React.ReactNode;
}

export default function Header({ title, logo }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 w-full bg-paper border-b border-border"
      style={{ backgroundColor: "#f5f1e8" }}
    >
      {/* Full-bleed section */}
      <div className="w-full">
        {/* Centered content container */}
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Responsive padding - compact on mobile, generous on desktop */}
          <div className="flex items-center justify-between gap-4 py-4 sm:py-5 md:py-6">
            {/* Logo section */}
            <div className="shrink-0">
              {logo ? (
                <div className="text-xl sm:text-2xl font-bold text-forest">
                  {logo}
                </div>
              ) : (
                <div className="text-lg sm:text-xl font-bold text-forest">
                  ☕
                </div>
              )}
            </div>

            {/* Title section - responsive text size */}
            <div className="flex-1 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text">
                {title}
              </h1>
            </div>

            {/* Empty space for balance */}
            <div className="shrink-0 w-8 sm:w-10" />
          </div>
        </div>
      </div>
    </header>
  );
}
