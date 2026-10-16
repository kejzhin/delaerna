import { useState } from 'react';
import { EMAIL_DRAFTS_DATA } from '../../data/portfolioData';
import { EmailDraft } from '../../types';
import { Mail, Send, AlertTriangle, MessageSquare, Clock, CheckCheck, User, Calendar, Copy, Check } from 'lucide-react';

const CATEGORIES: { id: EmailDraft['category'] | 'All'; label: string; count: number }[] = [
  { id: 'All', label: 'All Drafts', count: 3 },
  { id: 'Urgent', label: 'Urgent', count: 1 },
  { id: 'Client Inquiries', label: 'Client Inquiries', count: 1 },
  { id: 'Follow-ups', label: 'Follow-ups', count: 1 },
  { id: 'Pending Responses', label: 'Pending Responses', count: 0 },
  { id: 'Completed', label: 'Completed', count: 3 },
];

export default function InboxOrganizer() {
  const [selectedCategory, setSelectedCategory] = useState<EmailDraft['category'] | 'All'>('All');
  const [selectedDraftId, setSelectedDraftId] = useState<string>(EMAIL_DRAFTS_DATA[0].id);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const filteredDrafts = EMAIL_DRAFTS_DATA.filter((draft) => {
    if (selectedCategory === 'All') return true;
    return draft.category === selectedCategory;
  });

  const activeDraft = EMAIL_DRAFTS_DATA.find((d) => d.id === selectedDraftId) || EMAIL_DRAFTS_DATA[0];

  const handleCopyBody = () => {
    const text = activeDraft.body.join('\n\n');
    navigator.clipboard.writeText(text);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs">
      {/* Sample Project Banner */}
      <div className="bg-stone-50 border-b border-stone-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">
            Sample Project · Email Management &amp; Triage
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-stone-900">
            Inbox Organization System &amp; Professional Drafts
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
            Demonstrating structured folder categorization and three business correspondence email drafts.
          </p>
        </div>
        <div className="text-xs text-stone-500 font-mono">
          3 Ready-to-Send Drafts
        </div>
      </div>

      {/* Inbox Split Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
        {/* Left Navigation: Folder Categories */}
        <div className="lg:col-span-3 border-r border-stone-200 bg-stone-50/70 p-3 sm:p-4 flex flex-col gap-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 px-2 py-1 mb-1">
            Categories &amp; Folders
          </div>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  const firstMatch = EMAIL_DRAFTS_DATA.find((d) => cat.id === 'All' || d.category === cat.id);
                  if (firstMatch) setSelectedDraftId(firstMatch.id);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  {cat.id === 'Urgent' && <AlertTriangle className="w-3.5 h-3.5" />}
                  {cat.id === 'Client Inquiries' && <MessageSquare className="w-3.5 h-3.5" />}
                  {cat.id === 'Follow-ups' && <Clock className="w-3.5 h-3.5" />}
                  {cat.id === 'Pending Responses' && <Send className="w-3.5 h-3.5" />}
                  {cat.id === 'Completed' && <CheckCheck className="w-3.5 h-3.5" />}
                  {cat.id === 'All' && <Mail className="w-3.5 h-3.5" />}
                  <span>{cat.label}</span>
                </div>
                <span
                  className={`text-xs tabular-nums ${
                    isActive ? 'text-stone-300' : 'text-stone-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}

          <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-stone-500 px-2">
            <span className="font-medium text-stone-700">Triage Rule:</span> Flag high-priority client inquiries within 1 hour; categorize all inbox noise into 5 core operational folders.
          </div>
        </div>

        {/* Middle: Email Drafts List */}
        <div className="lg:col-span-4 border-r border-stone-200 divide-y divide-stone-100 overflow-y-auto max-h-[520px]">
          {filteredDrafts.length === 0 ? (
            <div className="p-8 text-center text-xs text-stone-500">
              No drafts currently in this folder.
            </div>
          ) : (
            filteredDrafts.map((draft) => {
              const isSelected = draft.id === selectedDraftId;
              return (
                <div
                  key={draft.id}
                  onClick={() => setSelectedDraftId(draft.id)}
                  className={`p-4 cursor-pointer transition-colors text-left ${
                    isSelected ? 'bg-amber-50/40 border-l-2 border-stone-900' : 'hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span className="font-semibold text-stone-800">{draft.category}</span>
                    <span className="tabular-nums font-mono text-[11px]">{draft.date}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-medium text-stone-900 truncate">
                    {draft.subject}
                  </h4>
                  <p className="text-xs text-stone-500 line-clamp-2 mt-1">
                    {draft.preview}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Right: Email Reading & Inspection Pane */}
        <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between bg-white overflow-y-auto max-h-[520px]">
          <div>
            {/* Header info */}
            <div className="flex items-start justify-between gap-3 pb-4 border-b border-stone-100">
              <div>
                <span className="text-xs font-mono text-stone-500">Draft #{activeDraft.id}</span>
                <h4 className="text-sm sm:text-base font-semibold text-stone-900 mt-1">
                  {activeDraft.subject}
                </h4>
              </div>
              <button
                onClick={handleCopyBody}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-stone-600 border border-stone-200 rounded-md hover:bg-stone-50 transition-colors whitespace-nowrap cursor-pointer shrink-0"
                title="Copy email template body"
              >
                {copiedDraft ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-400" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>

            {/* Sender / Recipient Metadata */}
            <div className="py-3 text-xs space-y-1 text-stone-600 border-b border-stone-100 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-stone-400 w-12">From:</span>
                <span className="text-stone-800">{activeDraft.sender}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-stone-400 w-12">To:</span>
                <span className="text-stone-800">{activeDraft.recipient}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-stone-400 w-12">Date:</span>
                <span className="text-stone-800">{activeDraft.date}</span>
              </div>
            </div>

            {/* Email Body */}
            <div className="py-5 text-xs sm:text-sm text-stone-700 space-y-3 leading-relaxed whitespace-pre-line">
              {activeDraft.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Practice Highlight Box */}
          <div className="mt-4 p-3 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-600">
            <span className="font-semibold text-stone-800">VA Technique Highlight: </span>
            {activeDraft.keyPracticeHighlight}
          </div>
        </div>
      </div>
    </div>
  );
}
