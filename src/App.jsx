import Header from './components/Header';
import Hero from './components/Hero';
import MarketingSections from './components/MarketingSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Global subtle gradient aura */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-fuchsia-100 to-transparent opacity-60" />

      <Header />
      <main>
        <Hero />
        <MarketingSections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
