'use client';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-header-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              ☕ Coffee Finder
            </h1>
            <nav className="hidden md:flex gap-6">
              <a 
                href="#" 
                className="text-stone hover:text-moss transition-colors"
              >
                Explore
              </a>
              <a 
                href="#" 
                className="text-stone hover:text-moss transition-colors"
              >
                Shops
              </a>
              <a 
                href="#" 
                className="text-stone hover:text-moss transition-colors"
              >
                Saved
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 text-stone hover:text-foreground transition-colors">
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
