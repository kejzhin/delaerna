import { useState } from 'react';
import { USER_INFO } from '../data/portfolioData';
import { Mail, Phone, Copy, Check, ExternalLink, FileText } from 'lucide-react';

interface ContactProps {
  onOpenQualifications: () => void;
}

export default function Contact({ onOpenQualifications }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(USER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(USER_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#faf8f5] border-t border-[#e8e2d7]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="text-xs uppercase tracking-widest text-[#7a7269] font-semibold">
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#221f1d]">
            Let's Discuss How I Can Support Your Business
          </h2>
          <p className="text-sm sm:text-base text-[#5c5650] max-w-xl mx-auto leading-relaxed">
            Whether you need daily inbox coordination, thorough spreadsheet cleanup, or dependable administrative support, I am eager to contribute.
          </p>
        </div>

        {/* Contact Hub Card (NO EMAIL FORM, direct actionable links) */}
        <div className="max-w-2xl mx-auto bg-[#fcfbfa] border border-[#e2dcd2] rounded-2xl p-6 sm:p-10 shadow-xs space-y-5">
          {/* Email Display & Actions */}
          <div className="p-5 sm:p-6 bg-[#f5f0e8] border border-[#e2dcd2] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#7a7269] font-mono">
                <Mail className="w-3.5 h-3.5 text-[#5c5650]" />
                <span>Direct Email Contact</span>
              </div>
              <div className="text-base sm:text-lg font-bold text-[#221f1d] mt-1 select-all break-all sm:break-normal">
                {USER_INFO.email}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#2c2825] bg-[#faf8f5] border border-[#d8d0c4] rounded-lg hover:bg-[#ede6dc] transition-colors shadow-2xs cursor-pointer whitespace-nowrap"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#736c64]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${USER_INFO.email}?subject=Virtual%20Assistant%20Opportunity%20Inquiry`}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#f7f5f0] bg-[#2c2825] rounded-lg hover:bg-[#3d3834] transition-colors shadow-xs whitespace-nowrap"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Mail</span>
              </a>
            </div>
          </div>

          {/* Phone Number Display & Actions */}
          <div className="p-5 sm:p-6 bg-[#f5f0e8] border border-[#e2dcd2] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#7a7269] font-mono">
                <Phone className="w-3.5 h-3.5 text-[#5c5650]" />
                <span>Phone / Mobile</span>
              </div>
              <div className="text-base sm:text-lg font-bold text-[#221f1d] mt-1 font-mono tracking-tight select-all">
                {USER_INFO.phone}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#2c2825] bg-[#faf8f5] border border-[#d8d0c4] rounded-lg hover:bg-[#ede6dc] transition-colors shadow-2xs cursor-pointer whitespace-nowrap"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#736c64]" />
                    <span>Copy Number</span>
                  </>
                )}
              </button>

              <a
                href={USER_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#f7f5f0] bg-[#2c2825] rounded-lg hover:bg-[#3d3834] transition-colors shadow-xs whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Quick Action Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {/* LinkedIn Profile */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-[#e2dcd2] bg-[#faf8f5] rounded-xl hover:border-[#b8ae9f] hover:bg-[#f5f0e8] transition-all flex items-center justify-between group"
            >
              <div>
                <div className="text-xs text-[#7a7269] font-medium">Professional Network</div>
                <div className="text-sm font-semibold text-[#221f1d] group-hover:text-[#000000] mt-0.5">
                  LinkedIn Profile
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#8c847a] group-hover:text-[#221f1d] transition-colors" />
            </a>

            {/* Qualifications Summary Sheet */}
            <button
              onClick={onOpenQualifications}
              className="p-4 border border-[#e2dcd2] bg-[#faf8f5] rounded-xl hover:border-[#b8ae9f] hover:bg-[#f5f0e8] transition-all flex items-center justify-between group text-left cursor-pointer"
            >
              <div>
                <div className="text-xs text-[#7a7269] font-medium">Credentials &amp; Bio</div>
                <div className="text-sm font-semibold text-[#221f1d] group-hover:text-[#000000] mt-0.5">
                  Qualifications Sheet
                </div>
              </div>
              <FileText className="w-4 h-4 text-[#8c847a] group-hover:text-[#221f1d] transition-colors" />
            </button>
          </div>

          {/* Official Closing Line Quote from brief */}
          <div className="mt-8 pt-6 border-t border-[#ede7de] text-center">
            <p className="text-xs sm:text-sm font-medium text-[#4a4540]">
              {USER_INFO.closingLine}
            </p>
            <p className="text-[11px] text-[#8c847a] mt-1">
              Typical response time: within 24 hours · Available for immediate placement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
