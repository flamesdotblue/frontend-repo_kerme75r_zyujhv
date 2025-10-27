import Spline from '@splinetool/react-spline';
import { PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 dark:bg-slate-900/60 px-3 py-1 text-xs text-slate-700 dark:text-slate-200 shadow backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-400" />
              AI-powered Marketing Automation
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Transform Your Brand Identity Into Stunning Content
            </h1>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              Give us your URL or Instagram page, and our AI will understand your brand’s unique style, colors, and aesthetic to generate perfectly aligned content that converts.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-teal-500 px-6 py-3 text-white shadow-lg hover:shadow-xl transition-shadow"
              >
                Start Creating Now
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 dark:border-slate-600 bg-white/70 dark:bg-slate-800/70 px-5 py-3 text-slate-800 dark:text-slate-100 backdrop-blur hover:bg-white hover:dark:bg-slate-800"
              >
                <PlayCircle className="h-5 w-5" />
                Watch Demo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/60 dark:bg-slate-800/60 px-3 py-1 backdrop-blur pointer-events-none">
                No design skills required
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/60 dark:bg-slate-800/60 px-3 py-1 backdrop-blur pointer-events-none">
                AI-powered automation
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/60 dark:bg-slate-800/60 px-3 py-1 backdrop-blur pointer-events-none">
                AI Generated
              </span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-20 bg-gradient-to-br from-blue-500/20 via-fuchsia-400/20 to-teal-300/20 dark:from-blue-500/10 dark:via-fuchsia-400/10 dark:to-teal-300/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative aspect-[4/3] rounded-2xl bg-white/60 dark:bg-slate-900/70 backdrop-blur-lg border border-white/50 dark:border-slate-700 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 dark:from-slate-900/0 dark:via-slate-900/10 dark:to-slate-900/0 pointer-events-none" />
              <div className="p-6">
                <div className="h-5 w-32 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 mb-6 opacity-80" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-40 rounded-xl bg-slate-100/70 dark:bg-slate-800/70 shadow-inner" />
                  <div className="h-40 rounded-xl bg-slate-100/70 dark:bg-slate-800/70 shadow-inner" />
                  <div className="h-24 rounded-xl bg-slate-100/70 dark:bg-slate-800/70 shadow-inner" />
                  <div className="col-span-2 h-24 rounded-xl bg-slate-100/70 dark:bg-slate-800/70 shadow-inner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white dark:to-slate-950" />
    </section>
  );
}
