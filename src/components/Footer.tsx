import { USER_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenQualifications: () => void;
}

export default function Footer({ onOpenQualifications }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f7f5f0] border-t border-[#e8e2d7] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#" className="text-base font-bold text-[#221f1d] tracking-tight">
            {USER_INFO.name}
          </a>
          <p className="text-xs text-[#736c64] mt-1">
            Administrative Virtual Assistant · Data Entry · Email &amp; Calendar Support
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-[#5c5650]">
          <a href="#about" className="hover:text-[#221f1d] transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-[#221f1d] transition-colors">
            Services
          </a>
          <a href="#tools" className="hover:text-[#221f1d] transition-colors">
            Tools
          </a>
          <a href="#why-me" className="hover:text-[#221f1d] transition-colors">
            Why Work With Me
          </a>
          <button
            onClick={onOpenQualifications}
            className="hover:text-[#221f1d] transition-colors cursor-pointer text-[#736c64]"
          >
            Qualifications
          </button>
        </div>

        <div className="text-xs text-[#8c847a] font-mono">
          &copy; {currentYear} {USER_INFO.name}. Administrative Support &amp; Operations.
        </div>
      </div>
    </footer>
  );
}
