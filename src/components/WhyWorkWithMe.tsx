import { WHY_WORK_DATA } from '../data/portfolioData';
import { Target, MessageCircle, RefreshCw, Clock } from 'lucide-react';

export default function WhyWorkWithMe() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Target className="w-5 h-5 text-stone-800" />;
      case 1:
        return <MessageCircle className="w-5 h-5 text-stone-800" />;
      case 2:
        return <RefreshCw className="w-5 h-5 text-stone-800" />;
      default:
        return <Clock className="w-5 h-5 text-stone-800" />;
    }
  };

  return (
    <section id="why-me" className="py-20 md:py-28 bg-[#f7f5f0] border-t border-[#e8e2d7]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#7a7269] font-semibold mb-2">
            Work Philosophy &amp; Core Strengths
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#221f1d]">
            Why Partner With Me
          </h2>
          <p className="text-sm sm:text-base text-[#5c5650] mt-3 leading-relaxed">
            Four foundational values grounded in high academic achievement, pedagogical communication discipline, and an unwavering commitment to administrative accountability.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_WORK_DATA.map((item, idx) => (
            <div
              key={item.number}
              className="p-7 rounded-xl border border-[#e2dcd2] bg-[#fcfbfa] hover:border-[#b8ae9f] hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-[#f0eae1] border border-[#e2dcd2] rounded-lg shadow-2xs">
                    {getIcon(idx)}
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#8c847a]">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#221f1d] tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5c5650] mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ede7de] text-xs text-[#4a4540]">
                <span className="font-semibold text-[#221f1d]">Practical Impact: </span>
                <span className="text-[#5c5650]">{item.relevance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
