<template>
  <div class="min-h-screen">
    <!-- ================== STICKY NAV ================== -->
    <header class="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 class="text-2xl font-bold tracking-tight">Creator Marketplace</h1>
        <nav class="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#how" class="hover:text-indigo-600 transition">How it Works</a>
          <a href="#features" class="hover:text-indigo-600 transition">Features</a>
          <a href="#stories" class="hover:text-indigo-600 transition">Success Stories</a>
          <a href="#pricing" class="hover:text-indigo-600 transition">Pricing</a>
          <a href="#faq" class="hover:text-indigo-600 transition">FAQ</a>
        </nav>
        <a href="#start" class="hidden md:block bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition">Join Now</a>
      </div>
    </header>

    <!-- ================== FLOATING CTA ================== -->
    <a href="#start"
      class="fixed bottom-6 right-6 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-2xl font-semibold hover:bg-indigo-700 transition z-50">
      Start Selling Today →
    </a>

    <!-- ================== HERO ================== -->
    <section class="parallax text-white py-48 px-6 flex items-center justify-center">
      <div class="text-center max-w-4xl" data-aos="fade-up">
        <h1 class="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-2xl">
          Turn Your Creativity Into Real Income
        </h1>
        <p class="mt-6 text-2xl text-gray-100 max-w-2xl mx-auto">
          The ultimate marketplace for digital creators. Sell prompts, workflows, scripts, templates, guides, automations, and more.
        </p>
        <p class="mt-4 text-xl text-gray-200">
          Keep 100% ownership. Keep the majority of your earnings. Reach thousands of hungry buyers.
        </p>
        <div class="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#start"
            class="inline-block bg-indigo-600 px-10 py-4 rounded-full text-xl font-semibold hover:bg-indigo-700 transition shadow-lg">
            Become a Creator — It's Free
          </a>
          <a href="#how"
            class="inline-block border-2 border-white/80 hover:bg-white/10 px-8 py-4 rounded-full text-xl font-medium transition">
            Learn How It Works
          </a>
        </div>
        <p class="mt-8 text-sm text-gray-300">✓ No approval waiting • ✓ Instant publishing • ✓ Weekly payouts</p>
      </div>
    </section>

    <!-- ================== HOW IT WORKS ================== -->
    <section id="how" class="py-28 max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold">How It Works — In 3 Simple Steps</h2>
        <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">From idea to income in minutes. No complicated approval processes.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-12">
        <div class="text-center" data-aos="fade-up">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 text-indigo-600 rounded-2xl text-4xl font-bold mb-6">1</div>
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
               class="how-img rounded-2xl shadow-lg mb-6 mx-auto w-full" />
          <h3 class="text-2xl font-semibold mb-3">Create & Upload</h3>
          <p class="text-gray-600 leading-relaxed">Upload your digital products — ChatGPT prompts, Claude workflows, Midjourney templates, Notion systems, automation scripts, eBooks, video courses, or any other downloadable file. Our smart uploader makes it fast and easy.</p>
        </div>

        <div class="text-center" data-aos="fade-up" data-aos-delay="150">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 text-indigo-600 rounded-2xl text-4xl font-bold mb-6">2</div>
          <img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=600&q=80"
               class="how-img rounded-2xl shadow-lg mb-6 mx-auto w-full" />
          <h3 class="text-2xl font-semibold mb-3">Publish & Customize</h3>
          <p class="text-gray-600 leading-relaxed">Set your own price, write a compelling description, add eye-catching preview images, and choose relevant categories and tags. You have full control over how your product is presented.</p>
        </div>

        <div class="text-center" data-aos="fade-up" data-aos-delay="300">
          <div class="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 text-indigo-600 rounded-2xl text-4xl font-bold mb-6">3</div>
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
               class="how-img rounded-2xl shadow-lg mb-6 mx-auto w-full" />
          <h3 class="text-2xl font-semibold mb-3">Earn Passively</h3>
          <p class="text-gray-600 leading-relaxed">Your product goes live instantly and starts appearing in search results. Every sale is credited to your dashboard in real-time. Get paid weekly with zero hassle.</p>
        </div>
      </div>
    </section>

    <!-- ================== FEATURES ================== -->
    <section id="features" class="py-28 bg-gray-50 px-6">
      <h2 class="text-4xl font-bold text-center">Why Thousands of Creators Choose Us</h2>
      <p class="text-center text-gray-600 mt-4 max-w-xl mx-auto">Built by creators, for creators.</p>

      <div class="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mt-20">
        <div class="p-8 bg-white rounded-3xl shadow hover:scale-105 transition-all" data-aos="fade-right">
          <div class="text-5xl mb-4">💰</div>
          <h3 class="text-2xl font-semibold mb-3">Creator-First Revenue Share</h3>
          <p class="text-gray-600 leading-relaxed">Keep up to 90% of every sale — far better than other platforms. No hidden fees. Transparent earnings dashboard with real-time analytics.</p>
          <ul class="mt-6 space-y-2 text-sm text-gray-600">
            <li>✓ 90/10 revenue split on all sales</li>
            <li>✓ Instant payout reports</li>
            <li>✓ Tax-ready documents</li>
          </ul>
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
               class="feature-img rounded-2xl mt-8 w-full" />
        </div>

        <div class="p-8 bg-white rounded-3xl shadow hover:scale-105 transition-all" data-aos="fade-up">
          <div class="text-5xl mb-4">⚡</div>
          <h3 class="text-2xl font-semibold mb-3">Instant Publishing</h3>
          <p class="text-gray-600 leading-relaxed">No review queues. No gatekeepers. Publish your product in under 60 seconds and start selling immediately.</p>
          <ul class="mt-6 space-y-2 text-sm text-gray-600">
            <li>✓ Live within seconds</li>
            <li>✓ Unlimited product uploads</li>
            <li>✓ SEO-optimized listings</li>
          </ul>
          <img src="https://images.unsplash.com/photo-1526378722433-4c1e1a2e0c00?auto=format&fit=crop&w=600&q=80"
               class="feature-img rounded-2xl mt-8 w-full" />
        </div>

        <div class="p-8 bg-white rounded-3xl shadow hover:scale-105 transition-all" data-aos="fade-left">
          <div class="text-5xl mb-4">👥</div>
          <h3 class="text-2xl font-semibold mb-3">Built-In Audience</h3>
          <p class="text-gray-600 leading-relaxed">Thousands of AI enthusiasts, automation lovers, and productivity seekers visit daily looking for premium digital products.</p>
          <ul class="mt-6 space-y-2 text-sm text-gray-600">
            <li>✓ Smart product recommendations</li>
            <li>✓ Trending categories</li>
            <li>✓ Email marketing tools for creators</li>
          </ul>
          <img src="https://images.unsplash.com/photo-1515165562835-c3b8e3b7f9a5?auto=format&fit=crop&w=600&q=80"
               class="feature-img rounded-2xl mt-8 w-full" />
        </div>
      </div>
    </section>

    <!-- ================== FEATURED PRODUCTS ================== -->
    <section class="py-28 max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-4">Featured Products</h2>
      <p class="text-center text-gray-600">Real products making real money for creators</p>

      <div class="grid md:grid-cols-3 gap-8 mt-16">
        <div class="group relative" data-aos="zoom-in">
          <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80"
               class="product-img rounded-3xl shadow-xl w-full" />
          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent h-2/3 rounded-b-3xl opacity-0 group-hover:opacity-100 transition"></div>
          <div class="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition">
            <p class="font-semibold">Ultimate Midjourney Prompt Bible</p>
            <p class="text-sm">$49 • 1.2k sold</p>
          </div>
        </div>

        <div class="group relative" data-aos="zoom-in" data-aos-delay="150">
          <img src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=600&q=80"
               class="product-img rounded-3xl shadow-xl w-full" />
          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent h-2/3 rounded-b-3xl opacity-0 group-hover:opacity-100 transition"></div>
          <div class="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition">
            <p class="font-semibold">Notion Second Brain System</p>
            <p class="text-sm">$79 • 843 sold</p>
          </div>
        </div>

        <div class="group relative" data-aos="zoom-in" data-aos-delay="300">
          <img src="https://images.unsplash.com/photo-1624996379675-7b6bf8e31a0e?auto=format&fit=crop&w=600&q=80"
               class="product-img rounded-3xl shadow-xl w-full" />
          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent h-2/3 rounded-b-3xl opacity-0 group-hover:opacity-100 transition"></div>
          <div class="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition">
            <p class="font-semibold">1000+ ChatGPT Business Prompts</p>
            <p class="text-sm">$29 • 2.4k sold</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================== SUCCESS STORIES ================== -->
    <section id="stories" class="py-28 bg-gray-50 px-6">
      <h2 class="text-4xl font-bold text-center">Real Creators, Real Results</h2>

      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-20">
        <div class="bg-white p-10 rounded-3xl shadow-xl" data-aos="fade-right">
          <p class="text-gray-700 text-lg leading-relaxed italic">
            “I made more in my first 30 days here than I did in 6 months on other marketplaces combined. 
            The buyer traffic is real and targeted. I now have a full-time income from prompts I create in my spare time.”
          </p>
          <div class="flex items-center gap-4 mt-8">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" class="w-14 h-14 rounded-full" />
            <div>
              <h4 class="font-bold">Marcus Delgado</h4>
              <p class="text-gray-500 text-sm">Prompt Engineer &amp; AI Consultant</p>
              <p class="text-emerald-600 text-sm font-medium">$18,420 earned last month</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-10 rounded-3xl shadow-xl" data-aos="fade-left">
          <p class="text-gray-700 text-lg leading-relaxed italic">
            “The platform is incredibly intuitive. I uploaded my automation workflows on a Tuesday and had my first sale by Wednesday morning. 
            It feels like the marketplace actually wants creators to succeed.”
          </p>
          <div class="flex items-center gap-4 mt-8">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" class="w-14 h-14 rounded-full" />
            <div>
              <h4 class="font-bold">Sarah Kim</h4>
              <p class="text-gray-500 text-sm">Automation Specialist</p>
              <p class="text-emerald-600 text-sm font-medium">$9,850 earned last month</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================== POPULAR CATEGORIES ================== -->
    <section class="py-28 bg-white px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-4">Popular Categories</h2>
        <p class="text-center text-gray-600 mb-12">Find your niche and start selling today</p>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-gray-50 hover:bg-indigo-50 p-8 rounded-3xl text-center transition cursor-pointer">
            <span class="text-4xl mb-3 block">📝</span>
            <h4 class="font-semibold">AI Prompts</h4>
            <p class="text-sm text-gray-500">ChatGPT • Claude • Gemini</p>
          </div>
          <div class="bg-gray-50 hover:bg-indigo-50 p-8 rounded-3xl text-center transition cursor-pointer">
            <span class="text-4xl mb-3 block">⚙️</span>
            <h4 class="font-semibold">Automations</h4>
            <p class="text-sm text-gray-500">Make • Zapier • n8n</p>
          </div>
          <div class="bg-gray-50 hover:bg-indigo-50 p-8 rounded-3xl text-center transition cursor-pointer">
            <span class="text-4xl mb-3 block">📋</span>
            <h4 class="font-semibold">Notion Templates</h4>
            <p class="text-sm text-gray-500">Second Brain • CRM • OS</p>
          </div>
          <div class="bg-gray-50 hover:bg-indigo-50 p-8 rounded-3xl text-center transition cursor-pointer">
            <span class="text-4xl mb-3 block">🎨</span>
            <h4 class="font-semibold">Design Assets</h4>
            <p class="text-sm text-gray-500">Midjourney • Figma • Presets</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================== TRUST / STATS ================== -->
    <section class="py-28 bg-gray-900 text-white px-6">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-16">Trusted by Creators Worldwide</h2>
        <div class="grid md:grid-cols-4 gap-12">
          <div><p class="text-6xl font-bold text-indigo-400">12,459</p><p class="mt-3 text-gray-400">Active Creators</p></div>
          <div><p class="text-6xl font-bold text-indigo-400">$2.8M</p><p class="mt-3 text-gray-400">Earned This Month</p></div>
          <div><p class="text-6xl font-bold text-indigo-400">87,392</p><p class="mt-3 text-gray-400">Products Sold</p></div>
          <div><p class="text-6xl font-bold text-indigo-400">4.98</p><p class="mt-3 text-gray-400">Average Rating</p></div>
        </div>
      </div>
    </section>

    <!-- ================== MORE TESTIMONIALS ================== -->
    <section class="py-28 bg-gray-50 px-6">
      <h2 class="text-4xl font-bold text-center mb-16">More Success Stories</h2>
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-3xl shadow" data-aos="fade-up">
          <p class="italic">"Made my first $1,000 in just 9 days. Best decision I made this year."</p>
          <div class="mt-6 flex items-center gap-3">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" class="w-10 h-10 rounded-full" alt="">
            <div>
              <p class="font-semibold">James Rivera</p>
              <p class="text-sm text-gray-500">Prompt Designer</p>
            </div>
          </div>
        </div>
        <div class="bg-white p-8 rounded-3xl shadow" data-aos="fade-up" data-aos-delay="150">
          <p class="italic">"The built-in audience is incredible. My Notion templates sell on autopilot."</p>
          <div class="mt-6 flex items-center gap-3">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" class="w-10 h-10 rounded-full" alt="">
            <div>
              <p class="font-semibold">Priya Sharma</p>
              <p class="text-sm text-gray-500">Productivity Coach</p>
            </div>
          </div>
        </div>
        <div class="bg-white p-8 rounded-3xl shadow" data-aos="fade-up" data-aos-delay="300">
          <p class="italic">"Finally a platform that doesn't take 30-50% cut. 90% revenue share changed everything."</p>
          <div class="mt-6 flex items-center gap-3">
            <img src="https://randomuser.me/api/portraits/men/67.jpg" class="w-10 h-10 rounded-full" alt="">
            <div>
              <p class="font-semibold">Alex Chen</p>
              <p class="text-sm text-gray-500">Automation Expert</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================== PRICING ================== -->
    <section id="pricing" class="py-28 px-6">
      <h2 class="text-4xl font-bold text-center">Simple, Transparent Pricing</h2>
      <p class="text-center text-gray-600 mt-3">Start free. Scale when you’re ready.</p>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
        <!-- Starter -->
        <div class="p-10 bg-white shadow-xl rounded-3xl border hover:scale-105 transition" data-aos="fade-right">
          <h3 class="text-2xl font-bold mb-2">Starter</h3>
          <p class="text-5xl font-bold">$0<span class="text-base font-normal text-gray-500">/month</span></p>
          <p class="text-gray-600 mt-6 mb-8">Perfect for beginners testing the waters.</p>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start gap-3"><span class="text-green-500">✔</span> Unlimited product uploads</li>
            <li class="flex items-start gap-3"><span class="text-green-500">✔</span> Full seller dashboard</li>
            <li class="flex items-start gap-3"><span class="text-green-500">✔</span> Basic sales analytics</li>
            <li class="flex items-start gap-3"><span class="text-green-500">✔</span> Standard visibility</li>
            <li class="flex items-start gap-3"><span class="text-green-500">✔</span> Community support</li>
          </ul>
          <a href="#start" class="block mt-10 bg-gray-900 text-white py-4 rounded-2xl text-center font-semibold">Get Started Free</a>
        </div>

        <!-- Pro -->
        <div class="p-10 bg-indigo-600 text-white shadow-2xl rounded-3xl scale-105 border-4 border-indigo-400" data-aos="fade-up">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-2xl font-bold mb-2">Pro Creator</h3>
              <p class="text-5xl font-bold">$19<span class="text-base font-normal opacity-75">/month</span></p>
            </div>
            <span class="bg-white/20 text-white text-xs px-3 py-1 rounded-full">MOST POPULAR</span>
          </div>
          <p class="mt-8 mb-8">For serious creators ready to scale.</p>
          <ul class="space-y-4">
            <li class="flex items-start gap-3"><span class="text-white">✔</span> Everything in Starter</li>
            <li class="flex items-start gap-3"><span class="text-white">✔</span> Priority search placement</li>
            <li class="flex items-start gap-3"><span class="text-white">✔</span> Advanced analytics &amp; insights</li>
            <li class="flex items-start gap-3"><span class="text-white">✔</span> 90% revenue share</li>
            <li class="flex items-start gap-3"><span class="text-white">✔</span> Custom product page themes</li>
            <li class="flex items-start gap-3"><span class="text-white">✔</span> Email marketing tools</li>
          </ul>
          <a href="#start" class="block mt-10 bg-white text-indigo-700 py-4 rounded-2xl text-center font-semibold">Upgrade to Pro</a>
        </div>

        <!-- Elite -->
        <div class="p-10 bg-white shadow-xl rounded-3xl border hover:scale-105 transition" data-aos="fade-left">
          <h3 class="text-2xl font-bold mb-2">Elite Partner</h3>
          <p class="text-5xl font-bold">$99<span class="text-base font-normal text-gray-500">/month</span></p>
          <p class="text-gray-600 mt-6 mb-8">For top creators and agencies.</p>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start gap-3"><span class="text-green-500">✔</span> Everything in Pro</li>
            <li class="flex items-start gap-3"><span class="text-green-500">✔</span> Homepage &amp; category spotlight</li>
            <li class="flex items-start gap-3"><span class="text-green-500">✔</span> Dedicated success manager</li>
            <li class="flex items-start gap-3"><span class="text-green-500">✔</span> 92% revenue share</li>
            <li class="flex items-start gap-3"><span class="text-green-500">✔</span> Exclusive beta features</li>
            <li class="flex items-start gap-3"><span class="text-green-500">✔</span> Co-marketing opportunities</li>
          </ul>
          <a href="#start" class="block mt-10 bg-indigo-600 text-white py-4 rounded-2xl text-center font-semibold">Apply for Elite</a>
        </div>
      </div>
    </section>

    <!-- ================== FAQ ================== -->
    <section id="faq" class="py-28 px-6 bg-gray-50">
      <h2 class="text-4xl font-bold text-center">Frequently Asked Questions</h2>
      <div class="max-w-3xl mx-auto mt-16 space-y-6">
        <details class="bg-white p-8 rounded-2xl shadow" data-aos="fade-up">
          <summary class="cursor-pointer text-xl font-semibold">How do I get paid?</summary>
          <p class="mt-6 text-gray-600 leading-relaxed">We support PayPal, Wise, and bank transfers. Payments are processed every Monday for sales from the previous week. Minimum payout threshold is only $20.</p>
        </details>
        <details class="bg-white p-8 rounded-2xl shadow" data-aos="fade-up" data-aos-delay="100">
          <summary class="cursor-pointer text-xl font-semibold">What kinds of products can I sell?</summary>
          <p class="mt-6 text-gray-600 leading-relaxed">Anything digital: prompts, prompt packs, workflows, templates (Notion, Figma, etc.), scripts, automation tools, eBooks, video courses, presets, and more.</p>
        </details>
        <details class="bg-white p-8 rounded-2xl shadow" data-aos="fade-up" data-aos-delay="200">
          <summary class="cursor-pointer text-xl font-semibold">Do I retain ownership of my creations?</summary>
          <p class="mt-6 text-gray-600 leading-relaxed">Yes, 100%. You keep full intellectual property rights. We only get a license to host and sell your product on the marketplace.</p>
        </details>
        <details class="bg-white p-8 rounded-2xl shadow" data-aos="fade-up" data-aos-delay="300">
          <summary class="cursor-pointer text-xl font-semibold">Is there a commission or listing fee?</summary>
          <p class="mt-6 text-gray-600 leading-relaxed">No listing fees ever. You only pay the platform fee when you make a sale (10% on Starter plan, lower on higher tiers).</p>
        </details>
        <details class="bg-white p-8 rounded-2xl shadow" data-aos="fade-up" data-aos-delay="400">
          <summary class="cursor-pointer text-xl font-semibold">Can I sell on other platforms too?</summary>
          <p class="mt-6 text-gray-600 leading-relaxed">Absolutely. We are non-exclusive. Many creators sell the same products on Gumroad, their own website, and here.</p>
        </details>
      </div>
    </section>

    <!-- ================== FINAL CTA ================== -->
    <section id="start" class="py-28 bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-center px-6">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-5xl font-bold">Ready to Start Earning?</h2>
        <p class="mt-6 text-2xl">Join thousands of creators already making passive income with their knowledge and creativity.</p>
        <a href="#" class="mt-12 inline-block bg-white text-indigo-700 px-12 py-5 rounded-2xl text-2xl font-bold hover:bg-gray-100 transition">
          Create Your Free Account
        </a>
        <p class="mt-6 text-indigo-200">Takes less than 60 seconds • No credit card required</p>
      </div>
    </section>

    <!-- ================== FOOTER ================== -->
    <footer class="py-16 bg-gray-900 text-gray-400">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <p class="text-xl font-medium text-white mb-2">Creator Marketplace</p>
        <p>© 2026 All Rights Reserved. Built for creators who create.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init({
    duration: 900,
    once: true
  })
})
</script>

<style scoped>
.parallax {
  background-image: url('https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

.product-img, .feature-img, .how-img {
  height: 240px;
  object-fit: cover;
}

.feature-img {
  height: 220px;
}

.how-img {
  height: 240px;
}
</style>