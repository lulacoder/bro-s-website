import React from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-brand-500/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-brand-300/20 blur-[120px] animate-pulse-slow" />

      <main className="relative flex min-h-screen flex-col items-center justify-center p-6 text-center lg:p-24">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-1.5 text-sm font-medium text-brand-300 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500"></span>
          </span>
          Next.js 16 + Tailwind CSS v4
        </div>

        {/* Hero Title */}
        <h1 className="mb-8 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          Experience the <span className="gradient-text">Future of Web</span> Development
        </h1>

        <p className="mb-12 max-w-2xl text-lg text-zinc-400 sm:text-xl animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both">
          Built with speed, aesthetics, and the latest cutting-edge technologies.
          Tailwind v4 is here with a CSS-first approach and lightning-fast performance.
        </p>

        {/* Floating Card UI Demo */}
        <div className="group relative mx-auto w-full max-w-md animate-float animate-in fade-in scale-in-95 duration-1000 fill-mode-both delay-300">
          <div className="glass rounded-3xl p-8 transition-all duration-500 group-hover:scale-[1.02] group-hover:border-brand-500/40">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-400/60">V4 Engine</span>
            </div>

            <h3 className="mb-2 text-xl font-bold text-white">Advanced Architecture</h3>
            <p className="text-zinc-400">
              The new CSS-first engine optimizes your build by 90% and provides a more intuitive developer experience.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-2 flex-1 rounded-full bg-zinc-800">
                <div className="h-full w-3/4 rounded-full bg-brand-500" />
              </div>
              <span className="text-sm font-medium text-brand-400">75% Faster</span>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 h-24 w-24 bg-brand-500/10 blur-2xl group-hover:bg-brand-500/20" />
          <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-brand-300/10 blur-2xl group-hover:bg-brand-300/20" />
        </div>

        {/* Action Buttons */}
        <div className="mt-16 flex flex-col gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-16 duration-1000 fill-mode-both delay-500">
          <button className="flex h-14 items-center justify-center rounded-2xl bg-brand-500 px-8 text-lg font-semibold text-white transition-all hover:bg-brand-600 hover:shadow-[0_0_40px_rgba(58,150,250,0.3)] active:scale-[0.98]">
            Get Started
          </button>
          <button className="flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 text-lg font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-[0.98]">
            View Docs
          </button>
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-24 flex flex-wrap justify-center gap-8 opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0 animate-in fade-in duration-1000 delay-700">
          <span className="text-xl font-bold tracking-tighter">NEXT.JS</span>
          <span className="text-xl font-bold tracking-tighter">REACT 19</span>
          <span className="text-xl font-bold tracking-tighter">TAILWIND V4</span>
          <span className="text-xl font-bold tracking-tighter">TYPESCRIPT</span>
        </div>
      </main>
    </div>
  );
}
