import { Zap, Target, Palette, BarChart3, Image as ImageIcon, Edit, Calendar, Bot, CheckCircle, Star } from 'lucide-react';

function FeatureIcon({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-500 via-violet-500 to-teal-400 text-white flex items-center justify-center shadow">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>
          <p className="text-sm text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function MarketingSections() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Features */}
      <section id="features" className="py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Powerful Features for Modern Marketing</h2>
          <p className="mt-3 text-slate-600">Everything you need to create, customize, and schedule compelling content.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureIcon icon={Bot} title="Smart Brand Analysis" desc="Understands voice, tone, and palette from your URL or social." />
          <FeatureIcon icon={ImageIcon} title="AI Image Generation" desc="On-brand visuals with style-matched color and composition." />
          <FeatureIcon icon={Edit} title="Editable Content" desc="Fine-tune copy and layouts with simple guided controls." />
          <FeatureIcon icon={Calendar} title="Smart Scheduling" desc="Auto-post at peak times for your audience across channels." />
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2 text-slate-700"><Zap className="h-4 w-4 text-blue-600" /> Lightning Fast</div>
          <div className="flex items-center gap-2 text-slate-700"><Target className="h-4 w-4 text-violet-600" /> Highly Targeted</div>
          <div className="flex items-center gap-2 text-slate-700"><Palette className="h-4 w-4 text-teal-600" /> Style Matching</div>
          <div className="flex items-center gap-2 text-slate-700"><BarChart3 className="h-4 w-4 text-emerald-600" /> Performance Analytics</div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">How It Works</h2>
        </div>

        <ol className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: 'Connect Your Brand',
              desc: 'Paste your URL or Instagram and we scan your visuals and voice.',
              emoji: '🔗',
            },
            {
              title: 'AI Generates Content',
              desc: 'Get posts, images, carousels, and captions aligned to your style.',
              emoji: '🤖',
            },
            {
              title: 'Customize & Perfect',
              desc: 'Tweak tone, colors, and layout with guided controls.',
              emoji: '✨',
            },
            {
              title: 'Schedule & Automate',
              desc: 'Publish everywhere at peak times automatically.',
              emoji: '📆',
            },
          ].map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 via-violet-500 to-teal-400 text-white flex items-center justify-center shadow">
                <span className="font-semibold">{i + 1}</span>
              </div>
              <div className="text-3xl">{s.emoji}</div>
              <h4 className="mt-3 font-semibold text-slate-900">{s.title}</h4>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 text-center">
          <a
            href="#signup"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-teal-500 px-6 py-3 text-white shadow-lg hover:shadow-xl transition-shadow"
          >
            Start Your Free Trial
          </a>
          <p className="mt-2 text-sm text-slate-600">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Loved by Marketing Teams</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Sarah Chen',
              role: 'Marketing Director',
              quote:
                'We ship 5x more content with perfect brand consistency. Marketise feels like magic.',
            },
            {
              name: 'Marcus Rodriguez',
              role: 'Founder',
              quote:
                'From idea to polished campaigns in minutes. Our engagement jumped 42% in a month.',
            },
            {
              name: 'Emily Watson',
              role: 'Social Media Manager',
              quote:
                'The AI nails our tone and visuals. Scheduling and iterations are a breeze.',
            },
          ].map((t, i) => (
            <div
              key={t.name}
              className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all"
              style={{ transform: `translateY(${i === 1 ? '-4px' : '0'})` }}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 via-violet-500 to-teal-400" />
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-600">{t.role}</div>
                </div>
              </div>
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat label="Content Pieces" value="50K+" />
          <Stat label="Happy Customers" value="2,500+" />
          <Stat label="Uptime" value="99.9%" />
          <Stat label="Rating" value="4.9/5" />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Simple, Transparent Pricing</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard
            title="Starter"
            price="$29/mo"
            subtitle="Small brands"
            features={[
              'Brand scan & style profile',
              '50 AI images / month',
              'Basic scheduling',
            ]}
            cta="Get Started"
          />
          <PricingCard
            highlight
            title="Professional"
            price="$79/mo"
            subtitle="Most popular"
            features={[
              'Advanced brand analysis',
              'Unlimited AI images',
              'Smart scheduling + analytics',
            ]}
            cta="Get Started"
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            subtitle="For agencies"
            features={[
              'Multiple workspaces',
              'SSO & advanced permissions',
              'Priority support',
            ]}
            cta="Contact Sales"
          />
        </div>
        <p className="mt-6 text-center text-sm text-slate-600">30-Day Money-Back Guarantee</p>
      </section>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm">
      <div className="text-3xl font-semibold text-slate-900">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}

function PricingCard({ title, price, subtitle, features, cta, highlight }) {
  return (
    <div
      className={`relative rounded-2xl border p-6 shadow-sm backdrop-blur bg-white/70 ${
        highlight
          ? 'border-violet-300 ring-2 ring-violet-200'
          : 'border-slate-200'
      }`}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-teal-500 px-3 py-1 text-xs text-white shadow">
          Most Popular
        </div>
      )}
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <div className="mt-1 text-3xl font-semibold text-slate-900">{price}</div>
      <div className="text-sm text-slate-600">{subtitle}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-slate-700">
            <CheckCircle className="h-4 w-4 text-teal-600" /> {f}
          </li>
        ))}
      </ul>
      <a
        href="#signup"
        className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 shadow transition-shadow ${
          highlight
            ? 'bg-gradient-to-r from-blue-600 via-violet-600 to-teal-500 text-white hover:shadow-lg'
            : 'border border-slate-300 bg-white text-slate-900 hover:shadow'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}
