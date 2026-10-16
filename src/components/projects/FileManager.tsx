import { useState } from 'react';
import { FILE_STRUCTURE_DATA } from '../../data/portfolioData';
import { FileNode } from '../../types';
import { Folder, FolderOpen, FileText, FileSpreadsheet, FileCode, Archive, ChevronRight, Info, Copy, Check } from 'lucide-react';

export default function FileManager() {
  const [selectedFolderId, setSelectedFolderId] = useState<string>('folder-02');
  const [copiedExample, setCopiedExample] = useState(false);

  const folders = FILE_STRUCTURE_DATA.children || [];
  const activeFolder = folders.find((f) => f.id === selectedFolderId) || folders[0];

  const handleCopyNaming = (example: string) => {
    navigator.clipboard.writeText(example);
    setCopiedExample(true);
    setTimeout(() => setCopiedExample(false), 2000);
  };

  const getFileIcon = (format?: string) => {
    switch (format) {
      case 'XLSX':
        return <FileSpreadsheet className="w-4 h-4 text-emerald-600" />;
      case 'PDF':
        return <FileText className="w-4 h-4 text-red-600" />;
      case 'ZIP':
        return <Archive className="w-4 h-4 text-amber-600" />;
      default:
        return <FileCode className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs">
      {/* Sample Project Header */}
      <div className="bg-stone-50 border-b border-stone-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">
            Sample Project · Google Drive / Cloud Architecture
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-stone-900">
            Digital File Management &amp; Systematic Naming Protocol
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
            Folder structure engineered for fast retrieval, zero duplicate files, and version control.
          </p>
        </div>
        <div className="text-xs font-mono text-stone-500">
          6 Core Business Directories
        </div>
      </div>

      {/* Naming Convention Rule Card */}
      <div className="bg-stone-100/60 border-b border-stone-200 px-6 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-stone-700">
          <Info className="w-4 h-4 text-stone-500 shrink-0" />
          <span>
            <strong className="font-semibold text-stone-900">Standardized File-Naming Rule:</strong>{' '}
            <code className="bg-white px-2 py-0.5 rounded border border-stone-200 font-mono text-stone-800">
              YYYY-MM_ClientName_DocumentType_###.ext
            </code>
          </span>
        </div>
        <button
          onClick={() => handleCopyNaming('2026-10_ClientName_Invoice_001.pdf')}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-stone-300 rounded text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors self-start md:self-auto cursor-pointer"
        >
          {copiedExample ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Copied Example</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-stone-400" />
              <span>Copy Naming Format</span>
            </>
          )}
        </button>
      </div>

      {/* Explorer Browser Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left: Folder Hierarchy */}
        <div className="lg:col-span-5 border-r border-stone-200 bg-stone-50/50 p-4 space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 px-3 py-1 mb-2">
            Shared Business Drive
          </div>
          {folders.map((folder) => {
            const isSelected = folder.id === selectedFolderId;
            return (
              <button
                key={folder.id}
                onClick={() => setSelectedFolderId(folder.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium text-left transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-white shadow-2xs'
                    : 'text-stone-700 hover:bg-stone-200/60 hover:text-stone-900'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  {isSelected ? (
                    <FolderOpen className="w-4 h-4 text-amber-300 shrink-0" />
                  ) : (
                    <Folder className="w-4 h-4 text-amber-500 shrink-0" />
                  )}
                  <span className="truncate">{folder.name}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  <span className={`text-[11px] font-mono ${isSelected ? 'text-stone-300' : 'text-stone-400'}`}>
                    {folder.children?.length || 0} items
                  </span>
                  <ChevronRight className={`w-3 h-3 ${isSelected ? 'text-white' : 'text-stone-300'}`} />
                </div>
              </button>
            );
          })}

          <div className="mt-6 p-3 bg-white border border-stone-200 rounded-lg text-xs text-stone-600 space-y-1">
            <div className="font-semibold text-stone-800">Folder Hygiene Best Practice:</div>
            <p className="text-[11px] leading-relaxed text-stone-500">
              Zero loose files on root. Every deliverable is indexed by chronological date prefix (YYYY-MM) and client name for immediate multi-user searchability.
            </p>
          </div>
        </div>

        {/* Right: Files in Selected Folder */}
        <div className="lg:col-span-7 p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="border-b border-stone-100 pb-3 mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                <span>Drive</span>
                <span>/</span>
                <span className="text-stone-700 font-semibold">{activeFolder.name}</span>
              </div>
              <p className="text-xs text-stone-500 mt-1">
                {activeFolder.description}
              </p>
            </div>

            {/* File List */}
            <div className="space-y-3">
              {activeFolder.children?.map((file) => (
                <div
                  key={file.id}
                  className="p-3.5 border border-stone-200 rounded-lg hover:border-stone-400 hover:bg-stone-50/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="mt-0.5 shrink-0">{getFileIcon(file.format)}</div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-mono font-medium text-stone-900 truncate">
                        {file.name}
                      </div>
                      <div className="text-xs text-stone-500 mt-0.5">
                        {file.description}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto text-xs text-stone-400 font-mono">
                    <span>{file.size}</span>
                    <span aria-hidden="true">·</span>
                    <span>{file.modified}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
            <span>Location: /{FILE_STRUCTURE_DATA.name}/{activeFolder.name}</span>
            <span>Cloud Sync Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
