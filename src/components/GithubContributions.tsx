import React from 'react';
import { Github, Users, FolderGit, Star, Flame, Trophy, Calendar } from 'lucide-react';
import githubData from '../data/github-data.json';

const GithubContributions = () => {
  // Mouse spotlight border glow effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const { stats, insights, languages, commits, grid: gridData } = githubData;
  const { followers, repositories, stars, totalContributions, avatarUrl } = stats;
  const { currentStreak, longestStreak, busyDay } = insights;

  // Generates cell description tooltips
  const getTooltipText = (weekIdx: number, dayIdx: number, level: number) => {
    const date = new Date();
    date.setDate(date.getDate() - (53 - weekIdx) * 7 + dayIdx);
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const count = level === 0 ? 'No' : level === 1 ? '1-2' : level === 2 ? '3-4' : level === 3 ? '5-7' : '8+';
    return `${count} contributions on ${dateStr}`;
  };

  // 12 Months horizontal layout spacing helper
  const monthLabels = [
    { name: 'Jul', colSpan: 4 },
    { name: 'Aug', colSpan: 4 },
    { name: 'Sep', colSpan: 5 },
    { name: 'Oct', colSpan: 4 },
    { name: 'Nov', colSpan: 4 },
    { name: 'Dec', colSpan: 5 },
    { name: 'Jan', colSpan: 4 },
    { name: 'Feb', colSpan: 4 },
    { name: 'Mar', colSpan: 5 },
    { name: 'Apr', colSpan: 4 },
    { name: 'May', colSpan: 4 },
    { name: 'Jun', colSpan: 4 },
  ];

  return (
    <section id="contributions" className="py-24 relative overflow-hidden line-grid dot-grid">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary border border-white/5 text-xs font-mono text-muted-foreground mb-4">
            <span>git log --author=yashas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 flex items-center gap-3">
            Code & <span className="gradient-text-accent">Contributions</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mt-2" />
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
          
          {/* GitHub Activity Card */}
          <div 
            className="lg:col-span-3 dev-window glow-card rounded-xl p-6 flex flex-col justify-between border-white/5 relative"
            onMouseMove={handleMouseMove}
          >
            <div>
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/5 bg-black/40 flex items-center justify-center">
                    {avatarUrl ? (
                      <img src={avatarUrl} alt="GitHub Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <Github className="w-5 h-5 text-accent" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-mono text-sm font-semibold text-foreground tracking-wider">@yashas8gatty</h3>
                    <p className="text-xs text-muted-foreground">Contribution activity on GitHub</p>
                  </div>
                </div>
                
                <div className="text-left sm:text-right">
                  <span className="text-3xl font-mono font-bold text-accent">
                    {totalContributions.toLocaleString()}
                  </span>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">
                    contributions in the last year
                  </p>
                </div>
              </div>

              {/* Contribution Grid Container */}
              <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/5 scrollbar-track-transparent">
                <div className="min-w-[670px] flex flex-col">
                  
                  {/* Month Headers */}
                  <div className="flex text-[10px] font-mono text-muted-foreground mb-2 pl-7 select-none">
                    {monthLabels.map((month, idx) => (
                      <div 
                        key={idx} 
                        style={{ width: `${(month.colSpan / 53) * 100}%` }} 
                        className="text-left"
                      >
                        {month.name}
                      </div>
                    ))}
                  </div>

                  {/* Grid + Day Labels */}
                  <div className="flex gap-2 items-center">
                    {/* Day Labels */}
                    <div className="flex flex-col justify-between text-[8px] font-mono text-muted-foreground h-[92px] select-none pr-1">
                      <span>Mon</span>
                      <span>Wed</span>
                      <span>Fri</span>
                    </div>

                    {/* 53 Column Grid */}
                    <div className="flex-1 grid grid-flow-col grid-cols-[repeat(53,minmax(0,1fr))] grid-rows-7 gap-[3px] select-none">
                      {gridData && gridData.map((week, weekIdx) =>
                        week.map((level, dayIdx) => {
                          let bgStyle = {};
                          if (level === 0) {
                            bgStyle = { backgroundColor: 'rgba(255, 255, 255, 0.03)' };
                          } else if (level === 1) {
                            bgStyle = { backgroundColor: 'hsl(var(--accent) / 0.15)' };
                          } else if (level === 2) {
                            bgStyle = { backgroundColor: 'hsl(var(--accent) / 0.35)' };
                          } else if (level === 3) {
                            bgStyle = { backgroundColor: 'hsl(var(--accent) / 0.65)' };
                          } else if (level === 4) {
                            bgStyle = { backgroundColor: 'hsl(var(--accent))' };
                          }

                          return (
                            <div
                              key={`${weekIdx}-${dayIdx}`}
                              style={bgStyle}
                              title={getTooltipText(weekIdx, dayIdx, level)}
                              className={`w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] rounded-[1.5px] border ${
                                level === 0 ? 'border-white/5' : 'border-transparent'
                              } hover:scale-130 transition-transform duration-150 cursor-pointer`}
                            />
                          );
                        })
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Commit Streaks & Insights Dashboard */}
            <div className="grid grid-cols-3 gap-4 border-t border-b border-white/5 py-4 my-6 font-mono">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/15 flex items-center justify-center text-orange-400 shrink-0">
                  <Flame className="w-4 h-4 fill-orange-400/20" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Current Streak</div>
                  <div className="text-sm font-bold text-foreground mt-0.5">{currentStreak} days</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/15 flex items-center justify-center text-yellow-400 shrink-0">
                  <Trophy className="w-4 h-4 fill-yellow-500/20" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Longest Streak</div>
                  <div className="text-sm font-bold text-foreground mt-0.5">{longestStreak} days</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center text-cyan-400 shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Most Active Day</div>
                  <div className="text-sm font-bold text-foreground mt-0.5">{busyDay}</div>
                </div>
              </div>
            </div>

            {/* Language Distribution Bar */}
            <div className="space-y-3 font-mono">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">// repo_language_distribution</div>
              
              {/* Stacked Bar */}
              <div className="w-full h-2 rounded-full overflow-hidden flex bg-white/5">
                {languages.map((lang, idx) => (
                  <div 
                    key={idx}
                    style={{ 
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color 
                    }}
                    title={`${lang.name}: ${lang.percentage}%`}
                    className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-300"
                  />
                ))}
              </div>

              {/* Legends list */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[9px] text-muted-foreground">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: lang.color }} />
                    <span className="text-foreground font-semibold">{lang.name}</span>
                    <span>{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between font-mono text-[10px] text-slate-400">
              <span>{totalContributions} contributions in the last year</span>
              
              {/* Legend */}
              <div className="flex items-center gap-1.5 select-none">
                <span>Less</span>
                <div className="w-[10px] h-[10px] rounded-[1.5px] border border-white/5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }} />
                <div className="w-[10px] h-[10px] rounded-[1.5px]" style={{ backgroundColor: 'hsl(var(--accent) / 0.15)' }} />
                <div className="w-[10px] h-[10px] rounded-[1.5px]" style={{ backgroundColor: 'hsl(var(--accent) / 0.35)' }} />
                <div className="w-[10px] h-[10px] rounded-[1.5px]" style={{ backgroundColor: 'hsl(var(--accent) / 0.65)' }} />
                <div className="w-[10px] h-[10px] rounded-[1.5px]" style={{ backgroundColor: 'hsl(var(--accent))' }} />
                <span>More</span>
              </div>
            </div>

          </div>

          {/* Metric Sidebar */}
          <div className="flex flex-col gap-4 lg:col-span-1 h-full justify-between">
            
            {/* Followers Card */}
            <div 
              className="flex-1 dev-window glow-card rounded-xl p-6 flex flex-col justify-between border-white/5 relative overflow-hidden group min-h-[110px]"
              onMouseMove={handleMouseMove}
            >
              <div className="w-24 h-24 bg-rose-500/5 rounded-full blur-xl absolute -top-8 -right-8 pointer-events-none group-hover:bg-rose-500/10 transition-all duration-500" />
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-3xl font-mono font-bold text-rose-400">{followers}</div>
                  <div className="text-xs font-mono text-muted-foreground mt-1">Followers</div>
                </div>
                <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400 border border-rose-500/10">
                  <Users className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Repositories Card */}
            <div 
              className="flex-1 dev-window glow-card rounded-xl p-6 flex flex-col justify-between border-white/5 relative overflow-hidden group min-h-[110px]"
              onMouseMove={handleMouseMove}
            >
              <div className="w-24 h-24 bg-cyan-500/5 rounded-full blur-xl absolute -top-8 -right-8 pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-500" />
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-3xl font-mono font-bold text-cyan-400">{repositories}</div>
                  <div className="text-xs font-mono text-muted-foreground mt-1">Repositories</div>
                </div>
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 border border-cyan-500/10">
                  <FolderGit className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Stars Card */}
            <div 
              className="flex-1 dev-window glow-card rounded-xl p-6 flex flex-col justify-between border-white/5 relative overflow-hidden group min-h-[110px]"
              onMouseMove={handleMouseMove}
            >
              <div className="w-24 h-24 bg-amber-500/5 rounded-full blur-xl absolute -top-8 -right-8 pointer-events-none group-hover:bg-amber-500/10 transition-all duration-500" />
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-3xl font-mono font-bold text-amber-400">{stars}</div>
                  <div className="text-xs font-mono text-muted-foreground mt-1">GitHub Stars</div>
                </div>
                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 border border-amber-500/10">
                  <Star className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Recent Commits Feed (CLI Terminal style) */}
        <div className="max-w-6xl mx-auto mt-6">
          <div 
            className="dev-window glow-card rounded-xl p-6 border-white/5 relative overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 select-none">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-2">bash - yashas@terminal: ~/github-recent-commits</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/30 text-emerald-400 font-mono text-[9px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>LIVE_FEED</span>
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="font-mono text-xs space-y-2.5 max-h-[220px] overflow-y-auto pr-2 scrollbar-thin">
              {commits && commits.map((commit, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-slate-300 hover:text-white transition-colors duration-200 py-1.5 border-b border-white/[0.02]"
                >
                  <div className="flex items-start sm:items-center gap-2 truncate">
                    <span className="text-accent shrink-0 font-bold font-sans">➜</span>
                    <span className="text-primary shrink-0 font-semibold">[{commit.repo}]</span>
                    <span className="text-muted-foreground font-semibold shrink-0">{commit.sha}</span>
                    <span className="truncate text-slate-200">{commit.message}</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground shrink-0 pl-6 sm:pl-0">{commit.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GithubContributions;
