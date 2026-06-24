const fs = require('fs');
const path = require('path');
const https = require('https');

const DATA_DIR = path.join(__dirname, '../src/data');
const DATA_FILE = path.join(DATA_DIR, 'github-data.json');
const ENV_FILE = path.join(__dirname, '../.env');

// Ensure target directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// 1. Try to load GITHUB_TOKEN & EXTRA_REPOS from env or .env file
let token = process.env.GITHUB_TOKEN;
let extraReposStr = process.env.EXTRA_REPOS;

if (fs.existsSync(ENV_FILE)) {
  const envContent = fs.readFileSync(ENV_FILE, 'utf-8');
  if (!token) {
    const tokenMatch = envContent.match(/^GITHUB_TOKEN\s*=\s*["']?([^"'\n]+)["']?/m);
    if (tokenMatch) {
      token = tokenMatch[1].trim();
    }
  }
  if (!extraReposStr) {
    const extraMatch = envContent.match(/^EXTRA_REPOS\s*=\s*["']?([^"'\n]+)["']?/m);
    if (extraMatch) {
      extraReposStr = extraMatch[1].trim();
    }
  }
}

let extraRepos = [];
if (extraReposStr) {
  extraRepos = extraReposStr.split(',').map(r => r.trim()).filter(Boolean);
}

// Helper: Fetch commits for a specific repository
const fetchCommitsForRepo = (owner, repoName, token) => {
  return new Promise((resolve) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${owner}/${repoName}/commits?author=Yashas8gatty&per_page=5`,
      method: 'GET',
      headers: {
        'User-Agent': 'Node-Fetch-Contributions',
        'Accept': 'application/vnd.github.v3+json'
      }
    };
    if (token) {
      options.headers['Authorization'] = `token ${token}`;
    }

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          const commits = JSON.parse(body);
          if (Array.isArray(commits)) {
            resolve(commits.map(c => ({
              repo: repoName,
              message: c.commit.message.split('\n')[0],
              sha: c.sha.substring(0, 7),
              date: new Date(c.commit.author.date)
            })));
          } else {
            resolve([]);
          }
        } catch (e) {
          resolve([]);
        }
      });
    });

    req.on('error', () => resolve([]));
    req.end();
  });
};

// Fallbacks for simulated data
const getFallbackCommits = () => [
  { repo: 'market_campaignAI', message: 'feat: Add analytics dashboard and scans tracking', sha: '47fa2c1', date: 'Jun 22' },
  { repo: 'ResumeRoast', message: 'fix: Resolve Supabase connection timeout in ATS worker', sha: 'a89cde2', date: 'Jun 20' },
  { repo: 'frontend-portfolio', message: 'style: Polish terminal window glassmorphism style', sha: '9ef8120', date: 'Jun 19' },
  { repo: 'educareer', message: 'refactor: Move Graph-BERT scoring computation to worker thread', sha: 'e38a0f1', date: 'Jun 15' },
  { repo: 'ResumeRoast', message: 'feat: Implement ATS metadata parsing and LLM prompts configuration', sha: '109ba2c', date: 'Jun 12' },
  { repo: 'market_campaignAI', message: 'init: Set up Vite project structure and Tailwind CSS rules', sha: 'b56ea10', date: 'Jun 08' }
];

const getFallbackData = () => {
  const grid = [];
  for (let week = 0; week < 53; week++) {
    const weekData = [];
    for (let day = 0; day < 7; day++) {
      const index = week * 7 + day;
      let score = Math.sin(index * 0.04) * 1.6 + Math.cos(index * 0.11) * 0.9;
      const noise = Math.sin(index * 0.67) * 0.7;
      score += noise;

      if (day === 0 || day === 6) score -= 1.2;
      if (week >= 15 && week <= 18) score -= 1.0;
      if (week >= 38 && week <= 40) score -= 1.5;

      let level = 0;
      if (score > 1.7) level = 4;
      else if (score > 0.7) level = 3;
      else if (score > -0.1) level = 2;
      else if (score > -0.8) level = 1;
      else level = 0;

      weekData.push(level);
    }
    grid.push(weekData);
  }

  return {
    stats: {
      followers: 4,
      repositories: 22,
      stars: 8,
      totalContributions: 342,
      avatarUrl: "https://avatars.githubusercontent.com/u/181383100?v=4"
    },
    insights: {
      currentStreak: 5,
      longestStreak: 21,
      busyDay: 'Tuesday'
    },
    languages: [
      { name: 'TypeScript', percentage: 48.2, color: '#3178c6' },
      { name: 'Python', percentage: 32.5, color: '#3572A5' },
      { name: 'React', percentage: 11.3, color: '#61dafb' },
      { name: 'CSS', percentage: 5.4, color: '#563d7c' },
      { name: 'HTML', percentage: 2.6, color: '#e34c26' }
    ],
    commits: getFallbackCommits(),
    grid: grid
  };
};

if (!token) {
  console.log('No GITHUB_TOKEN found. Writing fallback simulated data...');
  fs.writeFileSync(DATA_FILE, JSON.stringify(getFallbackData(), null, 2));
  console.log(`Fallback written to ${DATA_FILE}`);
  process.exit(0);
}

// GraphQL Query with Repository Names, Owners & Languages details
const query = `
query($username: String!) {
  user(login: $username) {
    avatarUrl
    followers {
      totalCount
    }
    ownedRepos: repositories(ownerAffiliations: OWNER) {
      totalCount
    }
    repositories(
      ownerAffiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER],
      first: 100,
      orderBy: {field: PUSHED_AT, direction: DESC}
    ) {
      nodes {
        name
        owner {
          login
        }
        stargazers {
          totalCount
        }
        languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
          edges {
            size
            node {
              name
              color
            }
          }
        }
      }
    }
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
          }
        }
      }
    }
  }
}
`;

const variables = { username: 'Yashas8gatty' };
const postData = JSON.stringify({ query, variables });

const options = {
  hostname: 'api.github.com',
  path: '/graphql',
  method: 'POST',
  headers: {
    'Authorization': `bearer ${token}`,
    'User-Agent': 'Node-Fetch-Contributions',
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

console.log('Fetching live private + public data from GitHub API...');

const req = https.request(options, async (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', async () => {
    try {
      const parsed = JSON.parse(body);
      if (parsed.errors) {
        throw new Error(JSON.stringify(parsed.errors));
      }

      const user = parsed.data.user;
      if (!user) {
        throw new Error('User not found in GraphQL response');
      }

      // 1. Sum repository stars (only count user's own repos)
      const stars = (user.repositories.nodes || []).reduce((acc, repo) => {
        if (repo && repo.owner && repo.owner.login.toLowerCase() === 'yashas8gatty'.toLowerCase()) {
          return acc + (repo.stargazers ? repo.stargazers.totalCount : 0);
        }
        return acc;
      }, 0);

      // 2. Aggregate repository languages (only count user's own repos)
      const languageStats = {};
      (user.repositories.nodes || []).forEach(repo => {
        if (repo && repo.owner && repo.owner.login.toLowerCase() === 'yashas8gatty'.toLowerCase()) {
          if (repo.languages && repo.languages.edges) {
            repo.languages.edges.forEach(edge => {
              const name = edge.node.name;
              const size = edge.size || 0;
              const color = edge.node.color || '#cccccc';
              if (!languageStats[name]) {
                languageStats[name] = { size: 0, color };
              }
              languageStats[name].size += size;
            });
          }
        }
      });

      const totalLangSize = Object.values(languageStats).reduce((acc, l) => acc + l.size, 0);
      const languages = Object.entries(languageStats).map(([name, data]) => ({
        name,
        percentage: totalLangSize > 0 ? parseFloat(((data.size / totalLangSize) * 100).toFixed(1)) : 0,
        color: data.color
      })).sort((a, b) => b.percentage - a.percentage).slice(0, 5);

      // 3. Process contribution streaks & insights
      const calendarWeeks = user.contributionsCollection.contributionCalendar.weeks || [];
      const allDays = calendarWeeks.flatMap(w => w.contributionDays || []);
      const todayStr = new Date().toISOString().split('T')[0];
      const historyDays = allDays.filter(day => day.date <= todayStr);

      // Calculate Current Streak
      let currentStreak = 0;
      let streakIdx = historyDays.length - 1;
      if (streakIdx >= 0 && historyDays[streakIdx].contributionCount === 0) {
        streakIdx--; // check yesterday if today has no commits yet
      }
      while (streakIdx >= 0 && historyDays[streakIdx].contributionCount > 0) {
        currentStreak++;
        streakIdx--;
      }

      // Calculate Longest Streak
      let longestStreak = 0;
      let tempStreak = 0;
      historyDays.forEach(day => {
        if (day.contributionCount > 0) {
          tempStreak++;
          if (tempStreak > longestStreak) {
            longestStreak = tempStreak;
          }
        } else {
          tempStreak = 0;
        }
      });

      // Calculate Peak Activity Day
      const dayCounts = [0, 0, 0, 0, 0, 0, 0];
      historyDays.forEach(day => {
        const dObj = new Date(day.date);
        dayCounts[dObj.getDay()] += day.contributionCount;
      });
      const daysOfWeekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let maxIdx = 0;
      for (let i = 1; i < 7; i++) {
        if (dayCounts[i] > dayCounts[maxIdx]) {
          maxIdx = i;
        }
      }
      const busyDay = daysOfWeekNames[maxIdx];

      // 4. Align 53-week grid (sliced to end today)
      const lastYearContributions = allDays.slice(Math.max(0, historyDays.length - 371), historyDays.length);
      while (lastYearContributions.length < 371) {
        lastYearContributions.unshift({ date: '', contributionCount: 0 });
      }

      const grid = [];
      for (let i = 0; i < 53; i++) {
        const weekData = [];
        for (let j = 0; j < 7; j++) {
          const dayIdx = i * 7 + j;
          const day = lastYearContributions[dayIdx];
          const count = day ? day.contributionCount : 0;
          let level = 0;
          if (count > 7) level = 4;
          else if (count > 4) level = 3;
          else if (count > 2) level = 2;
          else if (count > 0) level = 1;
          weekData.push(level);
        }
        grid.push(weekData);
      }

      // 5. Build target list of repositories (owner + name) to fetch commits for
      // First, parse and add any EXTRA_REPOS from env configuration
      const targetRepos = extraRepos.map(fullName => {
        const parts = fullName.split('/');
        return parts.length === 2 ? { owner: parts[0], name: parts[1] } : null;
      }).filter(Boolean);

      // Then, add repositories from GraphQL response (avoiding duplicates)
      const existingNames = new Set(targetRepos.map(r => `${r.owner}/${r.name}`.toLowerCase()));
      (user.repositories.nodes || []).forEach(repo => {
        if (repo && repo.owner && repo.name) {
          const identifier = `${repo.owner.login}/${repo.name}`.toLowerCase();
          if (!existingNames.has(identifier)) {
            targetRepos.push({ owner: repo.owner.login, name: repo.name });
            existingNames.add(identifier);
          }
        }
      });

      console.log(`Querying actual commits for repositories: ${targetRepos.slice(0, 8).map(r => `${r.owner}/${r.name}`).join(', ')}...`);
      
      const commitsPromises = targetRepos.slice(0, 8).map(repo => fetchCommitsForRepo(repo.owner, repo.name, token));
      const commitsResults = await Promise.all(commitsPromises);
      
      const allCommits = commitsResults.flat()
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .slice(0, 10)
        .map(c => ({
          repo: c.repo,
          message: c.message,
          sha: c.sha,
          date: c.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        }));

      const finalData = {
        stats: {
          followers: user.followers.totalCount || 0,
          repositories: user.ownedRepos ? user.ownedRepos.totalCount : (user.repositories.totalCount || 0),
          stars: stars,
          totalContributions: user.contributionsCollection.contributionCalendar.totalContributions || 0,
          avatarUrl: user.avatarUrl || ''
        },
        insights: {
          currentStreak,
          longestStreak,
          busyDay
        },
        languages: languages.length > 0 ? languages : getFallbackData().languages,
        commits: allCommits.length > 0 ? allCommits : getFallbackCommits(),
        grid: grid
      };

      fs.writeFileSync(DATA_FILE, JSON.stringify(finalData, null, 2));
      console.log(`GitHub database written successfully to ${DATA_FILE}`);
      console.log(`Fetched ${finalData.commits.length} actual commits across your repositories.`);
    } catch (err) {
      console.error('Error parsing GraphQL API response:', err.message);
      fs.writeFileSync(DATA_FILE, JSON.stringify(getFallbackData(), null, 2));
    }
  });
});

req.on('error', (err) => {
  console.error('HTTPS GraphQL request failed:', err.message);
  fs.writeFileSync(DATA_FILE, JSON.stringify(getFallbackData(), null, 2));
});

req.write(postData);
req.end();
