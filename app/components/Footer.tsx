'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-16 md:mt-24 bg-footer-bg text-footer-text">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-footer-heading">
              Coffee Finder
            </h3>
            <p className="text-sm text-footer-text-muted">
              Discover exceptional coffee beans by taste profile.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-footer-heading">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#" 
                  className="text-footer-text-muted hover:text-moss transition-colors"
                >
                  Browse Beans
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-footer-text-muted hover:text-moss transition-colors"
                >
                  Coffee Shops
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-footer-text-muted hover:text-moss transition-colors"
                >
                  Flavor Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-footer-heading">
              Follow
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#" 
                  className="text-footer-text-muted hover:text-moss transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-footer-text-muted hover:text-moss transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-footer-text-muted">
            © {currentYear} Coffee Finder. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a 
              href="#" 
              className="text-footer-text-muted hover:text-clay transition-colors"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-footer-text-muted hover:text-clay transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
