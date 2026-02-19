import React from 'react';

export const BigTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h1 className={`font-display text-[6rem] md:text-[8.5rem] leading-[0.9] uppercase text-wd-dark tracking-tight ${className}`}>
    {children}
  </h1>
);

export const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h2 className={`font-display text-[3.5rem] md:text-[5rem] leading-[0.95] uppercase text-wd-dark tracking-tight ${className}`}>
    {children}
  </h2>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string; accent?: boolean }> = ({ children, className = "", accent = false }) => (
  <div className={`relative bg-white rounded-2xl p-6 overflow-hidden border ${accent ? 'border-wd-purple/20 shadow-lg shadow-wd-purple/5' : 'border-gray-200'} ${className}`}>
    {children}
  </div>
);

export const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block px-3 py-1 bg-wd-purple/10 text-wd-purple text-xs uppercase tracking-wider font-semibold rounded-full">
    {children}
  </span>
);

export const SlideHeader: React.FC<{ tag?: string; slideNum?: number; total?: number }> = ({ tag, slideNum, total }) => (
  <div className="flex justify-between items-center mb-6">
    {tag && <Tag>{tag}</Tag>}
    {slideNum !== undefined && total !== undefined && (
      <span className="text-sm font-semibold text-wd-muted">{String(slideNum).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
    )}
  </div>
);

export const PipelineStep: React.FC<{ icon: string; label: string; cost?: string; delay?: string }> = ({ icon, label, cost, delay = "0s" }) => (
  <div className="flex flex-col items-center gap-2 anim-fade-up" style={{ animationDelay: delay }}>
    <div className="w-16 h-16 rounded-xl bg-wd-light border border-gray-200 flex items-center justify-center text-2xl">
      {icon}
    </div>
    <span className="text-sm font-medium text-center leading-tight text-wd-dark">{label}</span>
    {cost && <span className="text-xs font-semibold text-wd-purple">{cost}</span>}
  </div>
);

export const PipelineArrow = () => (
  <div className="flex items-center justify-center w-8 text-wd-purple/40 text-xl font-bold pt-[-1rem]">
    →
  </div>
);

export const PhoneFrame: React.FC<{ children: React.ReactNode; title?: string }> = ({ children, title }) => (
  <div className="relative mx-auto w-[260px] bg-gray-900 rounded-[2.5rem] p-3 border-2 border-gray-700/50 shadow-2xl">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl border-x-2 border-b-2 border-gray-700/50" />
    <div className="bg-gray-800 rounded-[2rem] overflow-hidden">
      {title && (
        <div className="bg-gray-700/50 px-4 py-2 text-xs font-medium text-gray-400 text-center border-b border-gray-600/30">
          {title}
        </div>
      )}
      <div className="p-4 min-h-[400px] text-white">
        {children}
      </div>
    </div>
  </div>
);

export const MetricCard: React.FC<{ value: string; label: string; accent?: boolean; delay?: string }> = ({ value, label, accent = false, delay = "0s" }) => (
  <div className={`p-6 rounded-2xl border ${accent ? 'border-wd-purple/20 bg-wd-purple/5' : 'border-gray-200 bg-white'} anim-fade-up`} style={{ animationDelay: delay }}>
    <div className={`text-4xl font-display uppercase tracking-tight mb-1 ${accent ? 'wd-gradient-text' : 'text-wd-dark'}`}>{value}</div>
    <div className="text-sm text-wd-gray">{label}</div>
  </div>
);

export const TimelineItem: React.FC<{ phase: string; title: string; description: string; active?: boolean; delay?: string }> = ({ phase, title, description, active = false, delay = "0s" }) => (
  <div className={`flex gap-4 anim-fade-up ${active ? '' : 'opacity-60'}`} style={{ animationDelay: delay }}>
    <div className="flex flex-col items-center">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 ${active ? 'bg-wd-purple/10 border-wd-purple text-wd-purple' : 'bg-gray-100 border-gray-300 text-wd-gray'}`}>
        {phase}
      </div>
      <div className="w-px h-full bg-gray-200 mt-2" />
    </div>
    <div className="pb-6">
      <h3 className={`font-bold text-lg ${active ? 'text-wd-dark' : 'text-wd-gray'}`}>{title}</h3>
      <p className="text-sm text-wd-muted mt-1">{description}</p>
    </div>
  </div>
);

export const WDLogo = () => (
  <div className="inline-flex items-center font-bold text-lg">
    <span className="bg-wd-dark text-white px-2 py-0.5 rounded-sm text-sm">we</span>
    <span className="ml-1 text-wd-dark text-sm">digital</span>
  </div>
);
