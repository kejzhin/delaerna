import { useState, useMemo } from 'react';
import { LEAD_RESEARCH_DATA } from '../../data/portfolioData';
import { Search, ExternalLink, Globe, MapPin, Download, Filter } from 'lucide-react';

export default function LeadResearch() {
  const [search, setSearch] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const industries = ['All', 'Architecture & Design', 'E-commerce & Retail', 'Supply Chain', 'Marketing & Media', 'Healthcare & Wellness', 'Financial Services'];

  const filteredLeads = useMemo(() => {
    return LEAD_RESEARCH_DATA.filter((lead) => {
      const matchesSearch =
        lead.businessName.toLowerCase().includes(search.toLowerCase()) ||
        lead.location.toLowerCase().includes(search.toLowerCase()) ||
        lead.keyNotes.toLowerCase().includes(search.toLowerCase());

      const matchesIndustry = selectedIndustry === 'All' || lead.industry === selectedIndustry;

      return matchesSearch && matchesIndustry;
    });
  }, [search, selectedIndustry]);

  const handleExportCSV = () => {
    const headers = ['Business Name', 'Industry', 'Website', 'Contact Page', 'Location', 'Research Notes', 'Source URL'];
    const rows = filteredLeads.map((l) => [
      `"${l.businessName}"`,
      `"${l.industry}"`,
      l.website,
      l.contactPage,
      `"${l.location}"`,
      `"${l.keyNotes.replace(/"/g, '""')}"`,
      `"${l.sourceUrl}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Online_Research_LeadList_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs">
      {/* Sample Project Header */}
      <div className="bg-stone-50 border-b border-stone-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">
            Sample Project · Online Research &amp; Market Intelligence
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-stone-900">
            Online Research &amp; Verified Business Lead Directory
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
            Structured outreach scouting with public contact page verification, industry classification, and citations.
          </p>
        </div>
        <button
          onClick={handleExportCSV}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 text-stone-500" />
          <span>Export Lead CSV</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 sm:p-5 border-b border-stone-200 bg-white flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search leads by company, city, or keyword..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-400 focus:bg-white transition-all"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          <Filter className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <div className="flex items-center gap-1">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  selectedIndustry === ind
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-medium">
              <th className="py-3 px-4 whitespace-nowrap">Business Name</th>
              <th className="py-3 px-4 whitespace-nowrap">Industry</th>
              <th className="py-3 px-4 whitespace-nowrap">Location</th>
              <th className="py-3 px-4 whitespace-nowrap">Verified Contact Page</th>
              <th className="py-3 px-4 min-w-[240px]">Scouted Research Notes</th>
              <th className="py-3 px-4 whitespace-nowrap">Source Reference</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-700">
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-stone-500">
                  No leads found matching the filter criteria.
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-stone-50/60 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-stone-900 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-stone-400" />
                      <span>{lead.businessName}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-stone-600 whitespace-nowrap">
                    {lead.industry}
                  </td>
                  <td className="py-3.5 px-4 text-stone-600 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      <span>{lead.location}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <a
                      href={`https://${lead.contactPage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-stone-800 hover:text-stone-950 underline decoration-stone-300 hover:decoration-stone-800"
                    >
                      <span className="font-mono">{lead.contactPage}</span>
                      <ExternalLink className="w-3 h-3 text-stone-400" />
                    </a>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-stone-600">
                    {lead.keyNotes}
                  </td>
                  <td className="py-3.5 px-4 text-xs font-mono text-stone-500 whitespace-nowrap">
                    {lead.sourceUrl}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-stone-50 border-t border-stone-200 text-xs text-stone-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          Showing <span className="font-semibold text-stone-700 tabular-nums">{filteredLeads.length}</span> verified business prospects
        </div>
        <div>
          Methodology: Public web directory mining &amp; manual link validation
        </div>
      </div>
    </div>
  );
}
