export default function BusinessLandingPage() {
  const services = [
    {
      title: 'Web Design',
      description:
        'Modern, conversion-focused websites that make your business look credible and professional.',
    },
    {
      title: 'Brand Strategy',
      description:
        'Clear messaging, strong positioning, and a brand presence that helps customers trust you faster.',
    },
    {
      title: 'Growth Support',
      description:
        'Landing pages, campaigns, and optimization that help turn visitors into paying customers.',
    },
  ];

  const testimonials = [
    {
      name: 'Ava Reynolds',
      role: 'Founder, NorthPeak Studio',
      quote:
        'They helped us launch a polished site that immediately improved our inquiries and conversions.',
    },
    {
      name: 'Marcus Tan',
      role: 'Owner, Brightline Services',
      quote:
        'Fast, professional, and easy to work with. The new landing page made our business look premium.',
    },
    {
      name: 'Lena Cruz',
      role: 'Marketing Lead, Solstice Co.',
      quote:
        'The messaging was sharper, the design cleaner, and our campaign performance noticeably improved.',
    },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$499',
      features: ['1-page website', 'Responsive design', 'Basic SEO setup', 'Contact form'],
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$999',
      features: ['Up to 5 sections', 'Custom branding', 'Lead capture flow', 'Analytics setup'],
      highlighted: true,
    },
    {
      name: 'Scale',
      price: '$1,999',
      features: ['Advanced layout', 'Custom integrations', 'Performance optimization', 'Priority support'],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-xl font-bold tracking-tight">BrightEdge</p>
          </div>
          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            Book a Call
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
                Trusted by growing businesses
              </div>
              <h1 className="max-w-xl text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                Build a business presence that wins customers.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                We create clean, high-converting landing pages for service brands, startups, and local businesses that want more leads and stronger credibility online.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
                >
                  Start Your Project
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  See Services
                </a>
              </div>
              <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-slate-200 pt-6">
                <div>
                  <p className="text-2xl font-bold">120+</p>
                  <p className="text-sm text-slate-600">Projects launched</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">98%</p>
                  <p className="text-sm text-slate-600">Client satisfaction</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-sm text-slate-600">Support access</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-700 p-6 shadow-2xl">
                <div className="rounded-[1.5rem] bg-white p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Campaign Overview</p>
                      <p className="text-xl font-semibold">Lead Generation</p>
                    </div>
                    <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                      +38%
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-sm text-slate-500">Qualified leads</p>
                      <p className="mt-1 text-3xl font-bold">1,284</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-sm text-slate-500">Conversion rate</p>
                        <p className="mt-1 text-2xl font-bold">6.8%</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-sm text-slate-500">Cost per lead</p>
                        <p className="mt-1 text-2xl font-bold">$14</p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-slate-900 p-5 text-white">
                      <p className="text-sm text-slate-300">Why clients choose us</p>
                      <p className="mt-2 text-lg font-medium">
                        Clear messaging, premium design, and landing pages built to convert.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Services</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need for a stronger online presence.
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Whether you are launching, rebranding, or scaling, we design pages that communicate value and drive action.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                  <div className="mb-5 h-12 w-12 rounded-2xl bg-slate-900" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Testimonials</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Businesses trust us to make a strong first impression.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-[2rem] border border-slate-200 p-8 shadow-sm">
                  <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
                  <div className="mt-6">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Pricing</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Flexible packages for every stage of growth.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-[2rem] p-8 shadow-sm ring-1 ${
                    plan.highlighted
                      ? 'bg-slate-900 text-white ring-slate-900'
                      : 'bg-white text-slate-900 ring-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    {plan.highlighted && (
                      <span className="rounded-full bg-white/10 px-3 py-1 text-sm">Most Popular</span>
                    )}
                  </div>
                  <p className="mt-6 text-4xl font-bold">{plan.price}</p>
                  <ul className="mt-6 space-y-3 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className={`h-2 w-2 rounded-full ${plan.highlighted ? 'bg-white' : 'bg-slate-900'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-8 inline-block rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                      plan.highlighted
                        ? 'bg-white text-slate-900 hover:bg-slate-100'
                        : 'bg-slate-900 text-white hover:opacity-90'
                    }`}
                  >
                    Choose Plan
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="rounded-[2rem] bg-slate-900 px-8 py-12 text-white shadow-2xl lg:px-12">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Get Started</p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                    Ready to launch your next high-converting landing page?
                  </h2>
                  <p className="mt-4 text-slate-300">
                    Tell us about your business, your goals, and your timeline. We’ll help you create a site that turns traffic into real leads.
                  </p>
                </div>

                <form className="space-y-4 rounded-[1.5rem] bg-white p-6 text-slate-900">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                  />
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 BrightEdge. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
