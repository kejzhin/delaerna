/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tools from './components/Tools';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QualificationsModal from './components/QualificationsModal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [qualificationsOpen, setQualificationsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#2c2825] font-sans antialiased selection:bg-[#e8e2d7] selection:text-[#2c2825]">
      {/* Top Navigation */}
      <Navbar onOpenQualifications={() => setQualificationsOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenQualifications={() => setQualificationsOpen(true)} />
        <About />
        <Services />
        <Tools />
        <WhyWorkWithMe />
        <Contact onOpenQualifications={() => setQualificationsOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenQualifications={() => setQualificationsOpen(true)} />

      {/* Qualifications Modal Dialog */}
      <QualificationsModal
        isOpen={qualificationsOpen}
        onClose={() => setQualificationsOpen(false)}
      />

      {/* Back to Top Quick Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-2.5 bg-[#2c2825] text-[#f7f5f0] border border-[#d8d0c4] rounded-full shadow-md hover:bg-[#3d3834] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8c847a]"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
