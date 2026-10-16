import { useState } from 'react';
import { USER_INFO } from '../data/portfolioData';
import { ArrowRight, FileCheck, Calendar, CheckCircle2 } from 'lucide-react';
import profilePic from '../assets/images/profile.jpeg';

interface HeroProps {
  onOpenQualifications: () => void;
}

export default function Hero({ onOpenQualifications }: HeroProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            {/* Editorial Kicker (No pill enclosures) */}
            <div className="text-xs uppercase tracking-widest text-[#7a7269] font-semibold">
              Administrative Virtual Assistant · Data Entry · Email &amp; Calendar
            </div>

            {/* Display Headline with balanced wrapping */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221f1d] leading-[1.15] text-balance">
              {USER_INFO.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#5c5650] leading-relaxed max-w-2xl font-normal">
              {USER_INFO.subheadline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#f7f5f0] bg-[#2c2825] rounded-lg hover:bg-[#3d3834] transition-colors shadow-xs"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#2c2825] bg-[#faf8f5] border border-[#d8d0c4] rounded-lg hover:bg-[#f0ebe2] transition-colors shadow-2xs"
              >
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenQualifications}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium text-[#736c64] hover:text-[#221f1d] transition-colors cursor-pointer"
              >
                <FileCheck className="w-4 h-4 text-[#8c847a]" />
                <span>Qualifications Sheet</span>
              </button>
            </div>

            {/* Target Opportunities Metadata (Zero-pill unboxed text with separators) */}
            <div className="pt-6 border-t border-[#e8e2d7]">
              <div className="text-xs font-medium text-[#8c847a] uppercase tracking-wider mb-2">
                Target Opportunities
              </div>
              <div className="flex flex-wrap items-center gap-y-1.5 text-xs text-[#5c5650] font-medium">
                {USER_INFO.targetRoles.map((role, idx) => (
                  <span key={role} className="flex items-center">
                    <span>{role}</span>
                    {idx < USER_INFO.targetRoles.length - 1 && (
                      <span className="mx-2 text-[#b8ae9f] select-none" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Presentation Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-[#d8d0c4] bg-[#efe9df] shadow-xs aspect-square">
                {!imageFailed ? (
                  <img
                    src={profilePic}
                    alt={`Professional portrait of Administrative Virtual Assistant ${USER_INFO.name}`}
                    referrerPolicy="no-referrer"
                    onError={() => setImageFailed(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#efe9df] text-[#5c5650] text-center">
                    <CheckCircle2 className="w-12 h-12 text-[#8c847a] mb-3" />
                    <div className="font-semibold text-[#221f1d]">{USER_INFO.name}</div>
                    <div className="text-xs text-[#5c5650] mt-1">
                      Administrative Virtual Assistant
                    </div>
                  </div>
                )}
              </div>

              {/* Quiet Highlight Card below portrait */}
              <div className="mt-3 p-4 bg-[#faf8f5] border border-[#e8e2d7] rounded-xl flex items-center justify-between text-xs text-[#5c5650]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#2c2825]" />
                  <span className="font-medium text-[#221f1d]">
                    Magna Cum Laude &amp; Licensed Professional Teacher
                  </span>
                </div>
                <span className="text-[#8c847a] font-mono">LPT Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
