import { useState, useMemo } from 'react';
import { CUSTOMER_TRACKER_DATA } from '../../data/portfolioData';
import { CustomerRecord } from '../../types';
import { Search, Download, ArrowUpDown, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export default function CustomerTracker() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [onlyFollowUp, setOnlyFollowUp] = useState(false);
  const [sortField, setSortField] = useState<keyof CustomerRecord>('orderDate');
  const [sortAsc, setSortAsc] = useState(false);

  const filteredData = useMemo(() => {
    return CUSTOMER_TRACKER_DATA.filter((row) => {
      const matchesSearch =
        row.name.toLowerCase().includes(search.toLowerCase()) ||
        row.id.toLowerCase().includes(search.toLowerCase()) ||
        row.email.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = statusFilter === 'All' || row.status === statusFilter;
      const matchesFollowUp = !onlyFollowUp || row.followUpRequired;

      return matchesSearch && matchesStatus && matchesFollowUp;
    }).sort((a, b) => {
      const valA = a[sortField];
      const valB = b[sortField];
      if (typeof valA === 'string' && typeof valB === 'string') {
        return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return 0;
    });
  }, [search, statusFilter, onlyFollowUp, sortField, sortAsc]);

  const toggleSort = (field: keyof CustomerRecord) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const handleExportCSV = () => {
    const headers = ['Customer ID', 'Name', 'Email', 'Order Date', 'Status', 'Amount', 'Follow-up Required', 'Notes'];
    const rows = filteredData.map((r) => [
      r.id,
      r.name,
      r.email,
      r.orderDate,
      r.status,
      r.amount,
      r.followUpRequired ? 'Yes' : 'No',
      `"${r.notes.replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Sample_Customer_Tracker_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs">
      {/* Sample Project Banner */}
      <div className="bg-stone-50 border-b border-stone-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">
            Sample Project · Google Sheets Simulation
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-stone-900">
            Customer Information &amp; Order Tracker
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
            Demonstrating structured data entry, standardized date formatting, sorting, and follow-up tagging.
          </p>
        </div>
        <button
          onClick={handleExportCSV}
          className="inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-medium text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer"
          title="Download current filtered data as CSV"
        >
          <Download className="w-3.5 h-3.5 text-stone-500" />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Interactive Controls Bar */}
      <div className="p-4 sm:p-5 border-b border-stone-200 bg-white flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by customer name, ID, or email..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-400 focus:bg-white transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg">
            {['All', 'Fulfilled', 'Processing', 'Shipped', 'Pending Review'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  statusFilter === st
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-700 cursor-pointer hover:bg-stone-100 select-none">
            <input
              type="checkbox"
              checked={onlyFollowUp}
              onChange={(e) => setOnlyFollowUp(e.target.checked)}
              className="rounded text-stone-800 focus:ring-stone-400"
            />
            <span>Follow-up Needed Only</span>
          </label>
        </div>
      </div>

      {/* Spreadsheet Table View */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-200 text-stone-600 font-medium">
              <th
                onClick={() => toggleSort('id')}
                className="py-3 px-4 cursor-pointer hover:text-stone-900 select-none whitespace-nowrap"
              >
                <div className="flex items-center gap-1.5">
                  <span>Customer ID</span>
                  <ArrowUpDown className="w-3 h-3 text-stone-400" />
                </div>
              </th>
              <th
                onClick={() => toggleSort('name')}
                className="py-3 px-4 cursor-pointer hover:text-stone-900 select-none whitespace-nowrap"
              >
                <div className="flex items-center gap-1.5">
                  <span>Client Name</span>
                  <ArrowUpDown className="w-3 h-3 text-stone-400" />
                </div>
              </th>
              <th className="py-3 px-4 whitespace-nowrap">Email Address</th>
              <th
                onClick={() => toggleSort('orderDate')}
                className="py-3 px-4 cursor-pointer hover:text-stone-900 select-none whitespace-nowrap"
              >
                <div className="flex items-center gap-1.5">
                  <span>Order Date</span>
                  <ArrowUpDown className="w-3 h-3 text-stone-400" />
                </div>
              </th>
              <th className="py-3 px-4 whitespace-nowrap">Status</th>
              <th className="py-3 px-4 tabular-nums text-right whitespace-nowrap">Amount</th>
              <th className="py-3 px-4 whitespace-nowrap">Follow-up</th>
              <th className="py-3 px-4 min-w-[200px]">Administrative Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 text-stone-700">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-8 text-center text-stone-500">
                  No records match the current filter criteria.
                </td>
              </tr>
            ) : (
              filteredData.map((row) => (
                <tr key={row.id} className="hover:bg-stone-50/60 transition-colors">
                  <td className="py-3 px-4 font-mono text-xs text-stone-600 tabular-nums whitespace-nowrap">
                    {row.id}
                  </td>
                  <td className="py-3 px-4 font-medium text-stone-900 whitespace-nowrap">
                    {row.name}
                  </td>
                  <td className="py-3 px-4 text-stone-600 whitespace-nowrap">{row.email}</td>
                  <td className="py-3 px-4 font-mono text-xs text-stone-600 tabular-nums whitespace-nowrap">
                    {row.orderDate}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className="text-xs font-medium text-stone-800">
                      {row.status === 'Fulfilled' && '✓ ' + row.status}
                      {row.status === 'Processing' && '⋯ ' + row.status}
                      {row.status === 'Shipped' && '↗ ' + row.status}
                      {row.status === 'Pending Review' && '! ' + row.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 tabular-nums font-mono text-stone-900 text-right whitespace-nowrap">
                    {row.amount}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    {row.followUpRequired ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700">
                        <AlertCircle className="w-3 h-3" />
                        <span>Action Required</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs text-stone-400">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Resolved</span>
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-xs text-stone-600">{row.notes}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Spreadsheet Status Footer */}
      <div className="px-6 py-3 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-stone-500 gap-2">
        <div>
          Showing <span className="font-semibold text-stone-700 tabular-nums">{filteredData.length}</span> of{' '}
          <span className="font-semibold text-stone-700 tabular-nums">{CUSTOMER_TRACKER_DATA.length}</span> entries · Formula validation active
        </div>
        <div className="flex items-center gap-3">
          <span>Sort: {String(sortField)} ({sortAsc ? 'Asc' : 'Desc'})</span>
          <span aria-hidden="true">·</span>
          <span>Sample Project Mock Data</span>
        </div>
      </div>
    </div>
  );
}
