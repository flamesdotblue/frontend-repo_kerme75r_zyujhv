import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Login', href: '#login' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/60 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 via-fuchsia-500 to-teal-400 shadow-md" />
            <span className="text-xl font-semibold tracking-tight">Marketise.ai</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#signup"
              className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-teal-500 px-4 py-2 text-white shadow hover:shadow-lg transition-shadow"
            >
              Sign Up
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-slate-700">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 hover:bg-slate-100"
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
