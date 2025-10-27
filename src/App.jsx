import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MarketingSections from './components/MarketingSections';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('system');

  // Initialize theme from localStorage or system
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    } else {
      setTheme('system');
    }
  }, []);

  // Apply theme to <html> via Tailwind's class strategy
  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = theme === 'dark' || (theme === 'system' && prefersDark);

    root.classList.toggle('dark', isDark);

    if (theme === 'light' || theme === 'dark') {
      localStorage.setItem('theme', theme);
    } else {
      localStorage.removeItem('theme');
    }
  }, [theme]);

  const cycleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light'));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Global subtle gradient aura */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-fuchsia-100 to-transparent dark:from-blue-900/30 dark:via-fuchsia-900/20 dark:to-transparent opacity-60" />

      <Header theme={theme} onToggleTheme={cycleTheme} />
      <main>
        <Hero />
        <MarketingSections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
