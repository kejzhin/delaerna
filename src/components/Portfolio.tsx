import { useState } from 'react';
import CustomerTracker from './projects/CustomerTracker';
import InboxOrganizer from './projects/InboxOrganizer';
import CalendarTaskTracker from './projects/CalendarTaskTracker';
import FileManager from './projects/FileManager';
import LeadResearch from './projects/LeadResearch';
import { Table, Mail, Calendar, FolderTree, Compass } from 'lucide-react';

type ProjectTab = 'customer-tracker' | 'inbox' | 'calendar' | 'files' | 'research';

const PROJECTS: { id: ProjectTab; label: string; number: string; icon: typeof Table; category: string }[] = [
  {
    id: 'customer-tracker',
    number: '01',
    label: 'Customer Info Tracker',
    icon: Table,
    category: 'Google Sheets & Data Validation',
  },
  {
    id: 'inbox',
    number: '02',
    label: 'Inbox Triage & Drafts',
    icon: Mail,
    category: 'Email Support & Categorization',
  },
  {
    id: 'calendar',
    number: '03',
    label: 'Calendar & Task Tracker',
    icon: Calendar,
    category: 'Executive Scheduling & Delivery',
  },
  {
    id: 'files',
    number: '04',
    label: 'Digital File Management',
    icon: FolderTree,
    category: 'Drive Hierarchy & Naming Protocols',
  },
  {
    id: 'research',
    number: '05',
    label: 'Online Research & Leads',
    icon: Compass,
    category: 'Market Intelligence & Link Verification',
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<ProjectTab>('customer-tracker');

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">
            Demonstrated Work Samples
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
            Interactive Practice Samples &amp; Operational Workflows
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Explore 5 fully interactive simulation projects. Test live sorting, folder navigation, task toggles, and email drafts to evaluate real execution quality.
          </p>
        </div>

        {/* Project Selector Segmented Tabs */}
        <div className="mb-8 border-b border-stone-200 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max pb-2">
            {PROJECTS.map((project) => {
              const Icon = project.icon;
              const isActive = activeTab === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveTab(project.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  <span className={`font-mono text-[11px] ${isActive ? 'text-stone-300' : 'text-stone-400'}`}>
                    {project.number}
                  </span>
                  <Icon className="w-4 h-4" />
                  <span>{project.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Preview Container */}
        <div>
          {activeTab === 'customer-tracker' && <CustomerTracker />}
          {activeTab === 'inbox' && <InboxOrganizer />}
          {activeTab === 'calendar' && <CalendarTaskTracker />}
          {activeTab === 'files' && <FileManager />}
          {activeTab === 'research' && <LeadResearch />}
        </div>
      </div>
    </section>
  );
}
