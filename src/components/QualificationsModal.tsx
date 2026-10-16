import { X, Copy, Check, Printer, Mail, Phone, Award, BookOpen, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { USER_INFO } from '../data/portfolioData';
import profilePic from '../assets/images/profile.jpeg';

interface QualificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QualificationsModal({ isOpen, onClose }: QualificationsModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const text = `
JESSA C. DELA CERNA — ADMINISTRATIVE VIRTUAL ASSISTANT
Email: ${USER_INFO.email}
Phone: ${USER_INFO.phone}
Status: ${USER_INFO.closingLine}

CORE QUALIFICATIONS & BACKGROUND:
• Academic Honor: Magna Cum Laude Graduate
• Credential: Licensed Professional Teacher (LPT)
• Specialization: Administrative Support, Data Entry, Email & Calendar Management

CORE COMPETENCIES:
1. Administrative Support: Document formatting, file organization, task tracking, SOP maintenance.
2. Data Entry & Spreadsheets: Transcription, cleanup, deduplication, sorting, validation.
3. Email & Calendar Coordination: Inbox triage, draft responses, scheduling, meeting agendas.
4. Online Research: Verified directory mining, lead compilation, source verification.
5. Cloud File Systems: Structured folder trees, standardized naming (YYYY-MM_Client_Type_001).

TECHNICAL PROFICIENCIES:
• Google Workspace (Docs, Sheets, Drive, Calendar, Meet)
• Microsoft Office (Word, Excel - Basic)
• Canva (Basic graphics & presentation formatting)
• ChatGPT (Productivity & drafting assistance)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-xs">
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h3 id="modal-title" className="text-base font-bold text-stone-900">
              Qualifications &amp; Administrative Profile
            </h3>
            <p className="text-xs text-stone-500">
              Summary of transferable skills, academic background, and competencies
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-700 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
              title="Copy clean summary to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-500" />
                  <span>Copy Sheet</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-700 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
              title="Print qualifications"
            >
              <Printer className="w-3.5 h-3.5 text-stone-500" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Document Body */}
        <div className="p-6 sm:p-8 space-y-6 text-stone-800 text-sm">
          {/* Candidate Header */}
          <div className="border-b border-[#e2dcd2] pb-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <img
              src={profilePic}
              alt={USER_INFO.name}
              className="w-16 h-16 rounded-full object-cover border border-[#d8d0c4] shrink-0"
            />
            <div>
              <h2 className="text-2xl font-bold text-[#221f1d]">{USER_INFO.name}</h2>
              <div className="text-sm font-medium text-[#5c5650] mt-0.5">
                Administrative Virtual Assistant · Data Entry · Email &amp; Calendar Support
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#736c64] mt-2 font-mono">
                <a href={`mailto:${USER_INFO.email}`} className="flex items-center gap-1 hover:text-[#221f1d]">
                  <Mail className="w-3 h-3 text-[#8c847a]" />
                  <span>{USER_INFO.email}</span>
                </a>
                <span aria-hidden="true" className="text-[#b8ae9f]">·</span>
                <a href={USER_INFO.phoneTel} className="flex items-center gap-1 hover:text-[#221f1d]">
                  <Phone className="w-3 h-3 text-[#8c847a]" />
                  <span>{USER_INFO.phone}</span>
                </a>
                <span aria-hidden="true" className="text-[#b8ae9f]">·</span>
                <span>Immediate Placement</span>
              </div>
            </div>
          </div>

          {/* Education & Licensure */}
          <div>
            <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
              Education &amp; Credentials
            </div>
            <div className="space-y-2.5">
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-3">
                <Award className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">
                    Bachelor of Secondary Education — Magna Cum Laude
                  </div>
                  <div className="text-xs text-stone-600 mt-0.5">
                    Graduated with top institutional honors, reflecting exceptional academic dedication, research rigor, and analytical discipline.
                  </div>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-stone-800 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">
                    Licensed Professional Teacher (LPT)
                  </div>
                  <div className="text-xs text-stone-600 mt-0.5">
                    Official professional licensure demonstrating mastery of clear verbal/written communication, instructional design, and classroom management.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Transferable Strengths */}
          <div>
            <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
              Core Administrative Strengths
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-stone-50 rounded-md border border-stone-100 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                <span>Meticulous data entry &amp; record cleanup</span>
              </div>
              <div className="p-2.5 bg-stone-50 rounded-md border border-stone-100 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                <span>Zero-inbox triage &amp; polite email drafting</span>
              </div>
              <div className="p-2.5 bg-stone-50 rounded-md border border-stone-100 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                <span>Executive calendar conflict resolution</span>
              </div>
              <div className="p-2.5 bg-stone-50 rounded-md border border-stone-100 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                <span>Standardized cloud folder naming systems</span>
              </div>
              <div className="p-2.5 bg-stone-50 rounded-md border border-stone-100 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                <span>Reliable online web research &amp; lead lists</span>
              </div>
              <div className="p-2.5 bg-stone-50 rounded-md border border-stone-100 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                <span>Fast learner &amp; strict confidentiality</span>
              </div>
            </div>
          </div>

          {/* Software Proficiencies */}
          <div>
            <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
              Software Stack
            </div>
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-700 space-y-1 font-mono">
              <div>• Google Workspace: Docs, Sheets, Drive, Calendar, Meet (Proficient)</div>
              <div>• Microsoft Office: Word (Proficient), Excel (Basic)</div>
              <div>• Canva: Basic Graphics &amp; Document Formatting (Basic)</div>
              <div>• ChatGPT: Drafting &amp; Productivity Assistance (Productivity)</div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="p-4 bg-stone-100 rounded-xl text-xs text-stone-700 text-center">
            <div className="font-semibold text-stone-900 mb-0.5">Availability Status</div>
            <div>{USER_INFO.closingLine}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
