import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenQualifications: () => void;
}

export default function Navbar({ onOpenQualifications }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Tools', href: '#tools' },
    { name: 'Why Work With Me', href: '#why-me' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#f7f5f0]/90 backdrop-blur-md border-b border-[#e8e2d7] py-3 shadow-2xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark */}
        <a
          href="#"
          className="text-lg md:text-xl font-bold tracking-tight text-[#221f1d] whitespace-nowrap shrink-0 hover:text-[#4a4540] transition-colors"
        >
          Jessa C. Dela Cerna
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5c5650]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#221f1d] transition-colors whitespace-nowrap shrink-0"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenQualifications}
            className="hover:text-[#221f1d] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-[#736c64] hover:underline underline-offset-4"
          >
            Qualifications
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-[#f7f5f0] bg-[#2c2825] rounded-lg hover:bg-[#3d3834] transition-colors whitespace-nowrap shrink-0 shadow-2xs"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-700 hover:text-stone-950 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f5] border-b border-[#e8e2d7] px-6 py-5 shadow-lg space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#4a4540] hover:text-[#221f1d] py-1"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQualifications();
              }}
              className="text-left text-sm font-medium text-[#736c64] hover:text-[#221f1d] py-1 cursor-pointer"
            >
              View Qualifications Sheet
            </button>
          </nav>
          <div className="pt-3 border-t border-[#e8e2d7]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 text-center text-xs font-semibold text-[#f7f5f0] bg-[#2c2825] rounded-lg hover:bg-[#3d3834] transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
