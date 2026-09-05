import { dayKey, DAY, trackName } from './store.js';

export const STREAK_TARGET = 5;
// Calendar dates, rather than elapsed 24-hour windows, remain consecutive across DST.
const ordinal = key => {
  const [year, month, day] = key.split('-').map(Number);
  return Date.UTC(year, month - 1, day) / DAY;
};
export function engagement(state, now = new Date()) {
  const today = state.days[dayKey(now)] || {};
  const current = ordinal(dayKey(now));
  const completed = Object.entries(state.days)
    .filter(([key, day]) => day.attempts >= STREAK_TARGET && ordinal(key) <= current)
    .map(([key]) => ordinal(key)).sort((a, b) => a - b);
  const dates = new Set(completed);
  let streak = 0, best = 0, run = 0, previous;
  for (const date of completed) { run = date === previous + 1 ? run + 1 : 1; best = Math.max(best, run); previous = date; }
  for (let date = dates.has(current) ? current : current - 1; dates.has(date); date--) streak++;
  return { streak, best, todayDone: dates.has(current), days: completed.length, todayXP: today.xp || 0,
    xp: Object.values(state.days).reduce((sum, day) => sum + (day.xp || 0), 0),
    remaining: Math.max(0, STREAK_TARGET - (today.attempts || 0)) };
}

// Call once alongside recordActivity. Immediate corrections do not award extra XP.
export function awardXP(state, task, correct, now = Date.now()) {
  const day = state.days[dayKey(new Date(now))];
  if (!day || task.retry) return 0;
  const key = task.kind === 'word' ? `${task.key}:${trackName(task.mode)}` : task.key;
  day.xpKeys ||= [];
  if (day.xpKeys.includes(key)) return 0;
  day.xpKeys.push(key);
  const xp = correct ? 10 : 5;
  day.xp = (day.xp || 0) + xp;
  day.kinds ||= {};
  day.kinds[task.kind] = (day.kinds[task.kind] || 0) + 1;
  return xp;
}
