export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 via-fuchsia-500 to-teal-400 shadow-md" />
              <span className="text-lg font-semibold tracking-tight">Marketise.ai</span>
            </div>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-md">
              Marketise.ai transforms your brand identity into AI-generated, perfectly aligned marketing content.
            </p>
            <div className="mt-4 text-sm text-slate-600 dark:text-slate-300 space-y-1">
              <div>LinkedIn: <a className="underline" href="#" target="_blank" rel="noreferrer">Follow us</a></div>
              <div>Email: marketise.ai@gmail.com</div>
              <div>Lawrence, Kansas, USA</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">Links</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            </ul>
          </div>

          <div className="flex items-end md:items-start">
            <div className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Ready to get started?</div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Start your free 14-day trial. No credit card needed.</p>
              <a href="#signup" className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-teal-500 px-5 py-3 text-white shadow hover:shadow-lg transition-shadow">Sign Up</a>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 text-center">30-Day Money-Back Guarantee</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 dark:border-slate-800 pt-6 text-sm text-slate-600 dark:text-slate-300 flex flex-col sm:flex-row items-center justify-between">
          <div>© 2025 Marketise. All rights reserved.</div>
          <div className="mt-2 sm:mt-0">Futuristic marketing SaaS • AI-driven automation • Minimalist gradient UI</div>
        </div>
      </div>
    </footer>
  );
}
