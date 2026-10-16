import { useState } from 'react';
import { Award, BookOpen, Clock, CheckCheck, Sparkles, ShieldCheck } from 'lucide-react';

export default function About() {
  const [workspaceFailed, setWorkspaceFailed] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 bg-[#faf8f5] border-y border-[#e8e2d7]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Asset & Credential Strip */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#d8d0c4] bg-[#efe9df] aspect-video md:aspect-[4/3] shadow-xs">
              {!workspaceFailed ? (
                <img
                  src="/src/assets/images/workspace_organized_desk_1792138338630.jpg"
                  alt="Organized home office desk with spreadsheet and document management setup"
                  referrerPolicy="no-referrer"
                  onError={() => setWorkspaceFailed(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#efe9df] text-[#8c847a]">
                  <span>Structured Digital Workspace</span>
                </div>
              )}
            </div>

            {/* Transferable Qualifications Bento List */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-[#f5f0e8] border border-[#e2dcd2] rounded-xl">
                <div className="font-semibold text-[#221f1d] flex items-center gap-1.5 mb-1">
                  <Award className="w-4 h-4 text-[#4a4540]" />
                  <span>Magna Cum Laude</span>
                </div>
                <div className="text-[#69625a] leading-snug">
                  High academic rigor, structured inquiry, and documented excellence.
                </div>
              </div>

              <div className="p-3.5 bg-[#f5f0e8] border border-[#e2dcd2] rounded-xl">
                <div className="font-semibold text-[#221f1d] flex items-center gap-1.5 mb-1">
                  <BookOpen className="w-4 h-4 text-[#4a4540]" />
                  <span>Licensed Teacher</span>
                </div>
                <div className="text-[#69625a] leading-snug">
                  Active LPT credential with proven instructional and communication clarity.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Prose & Competencies */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#7a7269] font-semibold">
              Background &amp; Professional Foundation
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#221f1d]">
              Transferable Precision from Classroom Leadership to Virtual Administration
            </h2>

            <div className="space-y-4 text-[#5c5650] text-sm sm:text-base leading-relaxed">
              <p>
                I am an aspiring <strong className="font-semibold text-[#221f1d]">Administrative Virtual Assistant</strong> with a strong foundation in education, leadership, communication, and organizational systems. As a <strong className="font-semibold text-[#221f1d]">Magna Cum Laude graduate and Licensed Professional Teacher (LPT)</strong>, I have spent years honing meticulous attention to detail, proactive time management, systematic documentation, and rapid problem-solving.
              </p>
              <p>
                I am deeply comfortable with Google Docs, Google Drive, Microsoft Word, basic Excel, and Canva. My core focus is supporting busy founders, executives, and remote teams with accurate data entry, thorough online research, clear document organization, and dependable day-to-day administrative coordination.
              </p>
              <p>
                I understand that seamless business operations rely on someone who listens closely, follows instructions without hesitation, and treats confidentiality with utmost care. I am a fast learner, highly adaptable, and committed to delivering accurate, reliable work that saves you time every single week.
              </p>
            </div>

            {/* Core Tenets Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4a4540]">
              <div className="flex items-start gap-2.5">
                <CheckCheck className="w-4 h-4 text-[#2c2825] shrink-0 mt-0.5" />
                <span>Meticulous data transcription &amp; formatting</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCheck className="w-4 h-4 text-[#2c2825] shrink-0 mt-0.5" />
                <span>Zero inbox chaos: clear tagging &amp; triage</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCheck className="w-4 h-4 text-[#2c2825] shrink-0 mt-0.5" />
                <span>Systematic cloud folder hierarchy &amp; naming</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCheck className="w-4 h-4 text-[#2c2825] shrink-0 mt-0.5" />
                <span>Punctual, professional communication</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
