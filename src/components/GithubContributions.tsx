import React from 'react';
import { GitBranch, Activity, CheckCircle2, GitCommit, Code2 } from 'lucide-react';
import githubData from '../data/github-data.json';

const GithubContributions = () => {
  const { stats, insights, languages, commits, grid } = githubData;

  const getIntensityClass = (count: number) => {
    if (count === 0) return 'bg-[#101113] border border-white/[0.04]';
    if (count === 1) return 'bg-[#26B56B]/30 border border-[#26B56B]/40';
    if (count === 2) return 'bg-[#26B56B]/50 border border-[#26B56B]/60';
    if (count === 3) return 'bg-[#26B56B]/75 border border-[#26B56B]/80';
    return 'bg-[#26B56B] border border-[#26B56B]';
  };

  return (
    <section id="contributions" className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="border-b border-white/[0.06] pb-3 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#747A85] mb-0.5">GITHUB // ACTIVITY STREAM</div>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#F7F8F8] font-sans">
              Engineering Activity & Contributions
            </h2>
          </div>
          <div className="text-xs font-mono text-[#747A85] hidden sm:block">
            {stats.totalContributions} CONTRIBUTIONS IN PAST YEAR
          </div>
        </div>

        {/* GitHub Stats Cards & Contribution Heatmap */}
        <div className="space-y-6">
          
          {/* Metrics Summary Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
            <div className="p-3 rounded-lg bg-[#0C0D0F] border border-white/[0.06] space-y-1">
              <div className="text-[10px] text-[#747A85]">YEAR CONTRIBUTIONS</div>
              <div className="text-lg font-bold text-[#F7F8F8]">{stats.totalContributions}</div>
            </div>

            <div className="p-3 rounded-lg bg-[#0C0D0F] border border-white/[0.06] space-y-1">
              <div className="text-[10px] text-[#747A85]">REPOSITORIES</div>
              <div className="text-lg font-bold text-[#F7F8F8]">{stats.repositories}</div>
            </div>

            <div className="p-3 rounded-lg bg-[#0C0D0F] border border-white/[0.06] space-y-1">
              <div className="text-[10px] text-[#747A85]">LONGEST STREAK</div>
              <div className="text-lg font-bold text-[#F7F8F8]">{insights.longestStreak} Days</div>
            </div>

            <div className="p-3 rounded-lg bg-[#0C0D0F] border border-white/[0.06] space-y-1">
              <div className="text-[10px] text-[#747A85]">PEAK DAY</div>
              <div className="text-lg font-bold text-[#26B56B]">{insights.busyDay}</div>
            </div>
          </div>

          {/* 52-Week Contribution Grid Panel */}
          <div className="linear-panel rounded-lg border border-white/[0.06] bg-[#08090A] p-4 space-y-3 font-sans">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-xs">
              <span className="font-mono text-[#F7F8F8] flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#26B56B]" />
                <span>52-Week Contribution Graph</span>
              </span>
              <span className="font-mono text-[10px] text-[#747A85]">
                Updated Daily via GitHub API
              </span>
            </div>

            {/* Heatmap Grid Wrapper */}
            <div className="overflow-x-auto pb-2">
              <div className="inline-flex gap-1 min-w-max">
                {grid.map((week, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-1">
                    {week.map((count, dayIdx) => (
                      <div
                        key={dayIdx}
                        title={`Week ${weekIdx + 1}, Day ${dayIdx + 1}: ${count} contributions`}
                        className={`w-2.5 h-2.5 rounded-[2px] ${getIntensityClass(count)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Legend */}
            <div className="flex items-center justify-between pt-1 border-t border-white/[0.04] text-[10px] font-mono text-[#747A85]">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#101113] border border-white/[0.04]" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#26B56B]/30 border border-[#26B56B]/40" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#26B56B]/50 border border-[#26B56B]/60" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#26B56B]/75 border border-[#26B56B]/80" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#26B56B] border border-[#26B56B]" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Languages Distribution Bar & Live Commits Stream Grid */}
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            
            {/* Language Distribution Breakdown (5 cols) */}
            <div className="lg:col-span-5 linear-panel rounded-lg border border-white/[0.06] bg-[#08090A] p-4 space-y-3 font-sans text-xs">
              <div className="border-b border-white/[0.06] pb-2 font-mono text-[#F7F8F8] flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#747A85]" />
                  <span>Language Distribution</span>
                </span>
                <span className="text-[10px] text-[#747A85]">CODEBASE RATIO</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded bg-[#101113] flex overflow-hidden border border-white/[0.04]">
                {languages.map(lang => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              <div className="space-y-1.5 font-mono text-[11px]">
                {languages.map(lang => (
                  <div key={lang.name} className="flex items-center justify-between text-[#A7ADB8]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                      <span>{lang.name}</span>
                    </div>
                    <span className="text-[#F7F8F8] font-semibold">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Commit Activity Stream (7 cols) */}
            <div className="lg:col-span-7 linear-panel rounded-lg border border-white/[0.06] bg-[#08090A] p-4 space-y-3 font-sans text-xs">
              <div className="border-b border-white/[0.06] pb-2 font-mono text-[#F7F8F8] flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <GitCommit className="w-3.5 h-3.5 text-[#26B56B]" />
                  <span>Recent GitHub Commits</span>
                </span>
                <span className="text-[10px] text-[#26B56B]">LIVE STREAM</span>
              </div>

              <div className="space-y-2 font-mono text-[11px]">
                {commits.slice(0, 5).map((commit, i) => (
                  <div key={i} className="p-2 rounded bg-[#101113] border border-white/[0.04] flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-[#747A85] text-[10px] font-bold">{commit.sha}</span>
                      <span className="text-[#A7ADB8] truncate">{commit.message}</span>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="text-[10px] text-[#747A85]">{commit.repo}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GithubContributions;
