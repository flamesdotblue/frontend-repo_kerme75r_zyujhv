import { useState } from 'react';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';

export default function Header({ theme = 'system', onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Login', href: '#login' },
  ];

  const ThemeIcon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor;
  const themeLabel = theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'System';

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-700/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 via-fuchsia-500 to-teal-400 shadow-md" />
            <span className="text-xl font-semibold tracking-tight">Marketise.ai</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 dark:border-slate-600 bg-white/70 dark:bg-slate-800/70 px-3 py-2 text-slate-800 dark:text-slate-100 backdrop-blur hover:bg-white hover:dark:bg-slate-800"
              aria-label={`Switch theme (current: ${themeLabel})`}
              title={`Theme: ${themeLabel}`}
            >
              <ThemeIcon className="h-4 w-4" />
              <span className="hidden sm:inline">{themeLabel}</span>
            </button>
            <a
              href="#signup"
              className="ml-1 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-teal-500 px-4 py-2 text-white shadow hover:shadow-lg transition-shadow"
            >
              Sign Up
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label={`Switch theme (current: ${themeLabel})`}
              title={`Theme: ${themeLabel}`}
            >
              <ThemeIcon className="h-6 w-6" />
            </button>
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-slate-700 dark:text-slate-300">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#signup"
                className="mt-1 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-teal-500 px-4 py-2 text-center text-white shadow"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
