import { TOOLS_DATA } from '../data/portfolioData';
import {
  FileText,
  Table,
  FolderTree,
  FileCheck,
  FileSpreadsheet,
  Palette,
  Sparkles,
  Calendar,
} from 'lucide-react';

export default function Tools() {
  const getToolIcon = (name: string) => {
    switch (name) {
      case 'Google Docs':
        return <FileText className="w-5 h-5 text-stone-800" />;
      case 'Google Sheets':
        return <Table className="w-5 h-5 text-stone-800" />;
      case 'Google Drive':
        return <FolderTree className="w-5 h-5 text-stone-800" />;
      case 'Microsoft Word':
        return <FileCheck className="w-5 h-5 text-stone-800" />;
      case 'Microsoft Excel':
        return <FileSpreadsheet className="w-5 h-5 text-stone-800" />;
      case 'Canva':
        return <Palette className="w-5 h-5 text-stone-800" />;
      case 'ChatGPT':
        return <Sparkles className="w-5 h-5 text-stone-800" />;
      default:
        return <Calendar className="w-5 h-5 text-stone-800" />;
    }
  };

  return (
    <section id="tools" className="py-20 md:py-28 bg-[#faf8f5] border-t border-[#e8e2d7]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#7a7269] font-semibold mb-2">
            Toolbox &amp; Software Proficiency
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#221f1d]">
            Transparent, Honest Tool Mastery
          </h2>
          <p className="text-sm sm:text-base text-[#5c5650] mt-3 leading-relaxed">
            In accordance with high ethical standards, proficiency ratings reflect exact daily capabilities. Where tools are utilized for foundational tasks (such as Excel or Canva), they are transparently labeled as Basic.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOOLS_DATA.map((tool) => (
            <div
              key={tool.name}
              className="bg-[#fcfbfa] border border-[#e2dcd2] rounded-xl p-5 hover:border-[#b8ae9f] hover:shadow-2xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 bg-[#f0eae1] rounded-lg">
                    {getToolIcon(tool.name)}
                  </div>
                  <span className="text-xs font-mono font-medium text-[#7a7269]">
                    {tool.proficiency}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-[#221f1d]">
                  {tool.name}
                </h3>
                <div className="text-xs text-[#8c847a] mt-0.5 mb-2 font-mono">
                  {tool.category}
                </div>

                <p className="text-xs text-[#5c5650] leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#ede7de] text-[11px] text-[#8c847a]">
                Daily Operations Ready
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
