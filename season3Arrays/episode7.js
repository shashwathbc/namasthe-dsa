// max constructive ones

function maxCount(nums){
 let currCount = 0;
 let maxCount = 0;

 for(let i=0; i< nums.length; i++){
  if(nums[i] == 1){
    currCount++;
  }else{
    maxCount = Math.max(currCount, maxCount);
    currCount = 0;
  }
 }

 return console.log('maxCount', maxCount, 'currCount', currCount);
}

maxCount([1,1,0,1,1,1])


// Here’s why your brain feels like it’s already rushing forward:

// 1. The “Proportional Time” Effect

// When you were 10 years old, one year was 10% of your life.

// Now at 24–25, one year is ~4% of your life.

// The older you get, each year feels proportionally shorter compared to the total you’ve lived.

// 2. Repetition compresses memory

// Unique events make time feel full.

// When days are repetitive (same work-from-home, same routine), your brain doesn’t “bookmark” them.

// In memory, it feels like nothing happened — so time seems to vanish.

// 3. Pandemic warped the mental clock

// 2020–2022 merged into one big blurry block for many people.

// That mental gap makes 2023–2025 feel like they arrived unnaturally fast.

// 4. Always looking ahead

// When you’re always planning the next thing (job, project, weekend), your brain spends less time noticing the present.

// This speeds up your subjective sense of time passing.

// 5. Digital acceleration

// Social media and constant scrolling compress experience into rapid bursts.

// The brain adapts to high-speed content, so slower real life feels like it’s “skipping frames.”

// If you want to slow down your perception of time, you have to deliberately do the opposite:

// Add novelty to your weeks.

// Pay attention to small sensory details (sounds, smells, textures).

// Create mini “chapters” in your year by learning something new or traveling.

// If you want, I can explain why 2020 specifically made time feel like it jumped from “January to December overnight” — because that has a very particular brain science reason.
// Would you like me to go into that?

// You said:
// can i crack a good job within 6 monthd
// ChatGPT said:

// Yes, you absolutely can crack a good, high-paying job in 6 months — especially since you already have 3 years of React + JavaScript experience and are at 12 LPA.

// But you’ll need to treat it like a focused project, not a casual attempt.

// Here’s what a 6-month plan could look like for you:

// Month 1–2: Skill Sharpening

// Frontend Mastery

// Advanced React patterns (Hooks, Context API, Suspense, Server Components if applicable).

// TypeScript fluency (most high-paying React roles want TS now).

// Performance optimization (React Profiler, code-splitting, memoization).

// System Design for Frontend

// How to design scalable UI architecture, microfrontends, and caching strategies.

// Data Structures & Algorithms

// At least 1–2 DSA problems daily focusing on arrays, strings, graphs, and dynamic programming.

// Practice on LeetCode / InterviewBit — don’t aim to master all 500 questions, just the patterns.

// Month 3–4: Resume + Projects

// Resume revamp for product-based companies.

// Quantify your impact: “Improved page load speed by 40%” instead of “Worked on UI.”

// Build 2 solid portfolio projects that show:

// State management (Redux/Zustand/Recoil).

// API integration and error handling.

// WCAG accessibility compliance.

// LinkedIn Optimization — recruiters should find you, not just you finding jobs.

// Month 5: Mock Interviews

// Weekly mock interviews (DSA + System Design + Frontend scenario-based).

// Practice explaining trade-offs in tech choices — e.g., “Why use Redux over Context?”

// Work on communication clarity — top companies value concise explanations.

// Month 6: Full Application Mode

// Target product-based companies (Bangalore, remote options).

// Apply via referrals, not just job portals.

// Prepare for multiple rounds in parallel — don’t wait for one company to finish before starting another.

// 💡 If you stick to this, you could jump from 12 LPA → 20–30 LPA, especially in Bangalore’s product-based market.
// The key will be consistent DSA practice + frontend depth + networking.

// If you want, I can make you a personal 6-month week-by-week schedule that mixes DSA, frontend, and interview prep so that you’re job-ready by February 2026.
// That will remove all guesswork.

// Do you want me to prepare that for you?

// You said:
// yye
// ChatGPT said:

// Alright Shashwath — let’s make this a no-excuses, week-by-week 6-month plan so you’re interview-ready and in a good job by Feb 2026.

// 📅 6-Month Job Crack Plan

// Goal: Land a React/Frontend Software Engineer role in the 20–30 LPA range.

// Month 1: Foundation & Assessment

// Main focus: Identify gaps + start DSA and advanced frontend.

// Weekly breakdown:

// DSA (1–1.5 hrs/day) → Arrays, Strings, Hashmaps. Do 5 easy + 5 medium per week.

// React/JS (2 hrs/day) →

// Deep dive into Hooks (useCallback, useMemo, custom hooks).

// ES6+ features & async patterns.

// Weekend: Review & build 1 small feature/project (e.g., a Todo with Context API).

// Month 2: TypeScript & Performance

// Main focus: TS mastery + frontend optimization.

// Weekly breakdown:

// DSA: Sliding window, two-pointer, recursion basics.

// TypeScript:

// Types, interfaces, generics, utility types, type narrowing.

// Performance:

// React Profiler, lazy loading, code splitting, memoization.

// Weekend project: Optimize an existing React app for performance.

// Month 3: System Design (Frontend) & Complex State

// Main focus: UI architecture + advanced state management.

// Weekly breakdown:

// DSA: Linked Lists, Stacks, Queues.

// Frontend System Design:

// Microfrontends, module federation.

// Component architecture patterns.

// State management: Redux Toolkit, Zustand, Recoil.

// Weekend project: Build a dashboard with charts, filters, and caching.

// Month 4: Mock Interviews + Resume Building

// Main focus: Real interview practice + branding.

// Weekly breakdown:

// DSA: Trees, Graphs basics.

// Interview practice:

// 2 mock technical + 1 HR round per week.

// Practice explaining trade-offs.

// Resume:

// Quantify achievements (metrics, % improvement).

// ATS-friendly formatting.

// Weekend: Add 1–2 STAR-format success stories for HR rounds.

// Month 5: High-Pressure Prep

// Main focus: Timed DSA + multiple interview pipelines.

// Weekly breakdown:

// DSA: DP basics (0/1 knapsack, subsequence problems).

// React challenges: Implement features in <2 hours.

// Networking:

// Reach out to 10–15 people per week for referrals.

// Weekend: Mock interviews simulating real pressure.

// Month 6: Full Application Mode

// Main focus: Final polish + aggressive applying.

// Weekly breakdown:

// Apply to 5–10 targeted companies/week (product-based).

// Daily DSA revision (patterns, not random problems).

// HR & salary negotiation prep.

// Continue 2–3 mock interviews per week.

// Extra rules:

// Minimum 20 DSA problems/week.

// At least 1 project/month.

// No skipping mock interviews — these build real confidence.

// If you want, I can now make you a Google Sheets tracker with daily tasks, problem lists, and progress checks so you can tick off everything until the day you get the offer.
// That way, you won’t lose momentum.

// Do you want me to make that tracker for you?