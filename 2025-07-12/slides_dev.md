---
theme: default
background: '#000000'
class: text-center text-white
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
css: unocss
fonts:
  sans: 'Helvetica Neue,Arial'
  mono: 'Fira Code'
layout: cover
---

# Backend Engineering Roadmap
## 2025-2026

### Building a Scalable Foundation for Studio

<br>

Transform our backend from technical debt to competitive advantage

<div class="absolute bottom-10 left-0 right-0 text-center">
  <p class="text-2xl text-gray-400">Koyo Isono</p>
  <p class="text-xl text-gray-500">Backend Engineer / Studio, Inc.</p>
</div>

<style>
h1 {
  @apply text-7xl font-black tracking-tight text-white;
}
h2 {
  @apply text-4xl font-bold text-gray-300 mt-4;
}
h3 {
  @apply text-2xl text-gray-400 mt-8;
}
</style>

---
layout: default
class: bg-black text-white
---

# Current Challenges & Risks

<div class="grid grid-cols-3 gap-8 mt-8">
  <div class="bg-gray-900 p-6 rounded-lg border border-gray-800 flex flex-col">
    <h3 class="text-white text-2xl font-bold mb-4 h-16 flex items-center">1. Technical Debt</h3>
    <ul class="text-gray-400 space-y-2 list-disc list-inside">
      <li>Stripe API version stuck at 2017</li>
      <li>7+ years behind current version</li>
      <li>Missing modern payment features</li>
    </ul>
  </div>

  <div class="bg-gray-900 p-6 rounded-lg border border-gray-800 flex flex-col">
    <h3 class="text-white text-2xl font-bold mb-4 h-16 flex items-center">2. Development Efficiency</h3>
    <ul class="text-gray-400 space-y-2 list-disc list-inside">
      <li>Flat directory structure</li>
      <li>Growing file count reducing visibility</li>
      <li>Interface and Implementation scattered</li>
    </ul>
  </div>

  <div class="bg-gray-900 p-6 rounded-lg border border-gray-800 flex flex-col">
    <h3 class="text-white text-2xl font-bold mb-4 h-16 flex items-center">3. Security & Scalability</h3>
    <ul class="text-gray-400 space-y-2 list-disc list-inside">
      <li>No unified authentication system</li>
      <li>Ad-hoc API key authentication</li>
      <li>Difficult cross-service data sharing</li>
    </ul>
  </div>
</div>

<style>
h1 {
  @apply text-5xl font-bold mb-8;
}
</style>

---
layout: default
class: bg-black text-white
---

# Technical Strategy
## 1. Stripe API Modernization

<div class="mt-16">
  <div class="text-3xl text-gray-300 mb-12">
    7+ years of technical debt → Modern payment infrastructure
  </div>

  <div class="space-y-8">
    <div class="flex items-start gap-4">
      <div class="text-4xl text-gray-500">→</div>
      <div>
        <h3 class="text-2xl font-bold text-white mb-2">Implement Adapter Pattern</h3>
        <p class="text-gray-400 text-xl">Isolate Stripe API calls in dedicated adapter classes for safe migration</p>
      </div>
    </div>

    <div class="flex items-start gap-4">
      <div class="text-4xl text-gray-500">→</div>
      <div>
        <h3 class="text-2xl font-bold text-white mb-2">Centralize API Interactions</h3>
        <p class="text-gray-400 text-xl">Move from scattered calls across services/repositories to unified location</p>
      </div>
    </div>
    
    <div class="flex items-start gap-4">
      <div class="text-4xl text-gray-500">→</div>
      <div>
        <h3 class="text-2xl font-bold text-white mb-2">Comprehensive Test Coverage</h3>
        <p class="text-gray-400 text-xl">Write tests for each adapter to ensure safe, gradual migration</p>
      </div>
    </div>
  </div>

---
layout: default
class: bg-black text-white
---

# Technical Strategy
## 2. Domain-Driven Structure

<div class="mt-16">
  <div class="text-3xl text-gray-300 mb-12">
    Flat file chaos → Organized, maintainable codebase
  </div>

  <div class="space-y-8">
    <div class="flex items-start gap-4">
      <div class="text-4xl text-gray-500">→</div>
      <div>
        <h3 class="text-2xl font-bold text-white mb-2">Feature-Based Organization</h3>
        <p class="text-gray-400 text-xl">Group related code by domain instead of technical layers</p>
      </div>
    </div>

    <div class="flex items-start gap-4">
      <div class="text-4xl text-gray-500">→</div>
      <div>
        <h3 class="text-2xl font-bold text-white mb-2">Co-locate Interface & Implementation</h3>
        <p class="text-gray-400 text-xl">Keep contracts and their implementations together for better navigation</p>
      </div>
    </div>
    
    <div class="flex items-start gap-4">
      <div class="text-4xl text-gray-500">→</div>
      <div>
        <h3 class="text-2xl font-bold text-white mb-2">Improve Developer Experience</h3>
        <p class="text-gray-400 text-xl">Faster file discovery, clearer relationships, easier onboarding</p>
      </div>
    </div>
  </div>

---
layout: default
class: bg-black text-white
---

# Technical Strategy
## 3. OAuth2 Authentication Platform

<div class="mt-16">
  <div class="text-3xl text-gray-300 mb-12">
    Ad-hoc auth chaos → Unified, secure authentication
  </div>

  <div class="space-y-8">
    <div class="flex items-start gap-4">
      <div class="text-4xl text-gray-500">→</div>
      <div>
        <h3 class="text-2xl font-bold text-white mb-2">Build Unified Auth Service</h3>
        <p class="text-gray-400 text-xl">Single source of truth for user authentication across all services</p>
      </div>
    </div>

    <div class="flex items-start gap-4">
      <div class="text-4xl text-gray-500">→</div>
      <div>
        <h3 class="text-2xl font-bold text-white mb-2">Enable Secure Data Sharing</h3>
        <p class="text-gray-400 text-xl">Share Studio user data with new services without custom API keys</p>
      </div>
    </div>
    
    <div class="flex items-start gap-4">
      <div class="text-4xl text-gray-500">→</div>
      <div>
        <h3 class="text-2xl font-bold text-white mb-2">Accelerate New Products</h3>
        <p class="text-gray-400 text-xl">Launch new services faster with ready-to-use authentication</p>
      </div>
    </div>
  </div>

---
layout: center
class: bg-black text-white text-center
---

# Implementation Roadmap

<style>
h1 {
  @apply text-7xl font-black;
}
</style>

---
layout: default
class: bg-black text-white
---

## 2025 Second Half (Jul-Dec)

<div class="mt-12">
  <div class="text-3xl text-gray-300 mb-12">
    Foundation Phase - Build the groundwork
  </div>

  <div class="space-y-10">
    <div class="border-l-4 border-green-600 pl-6">
      <h3 class="text-2xl font-bold text-white mb-3">✓ Complete Directory Restructuring</h3>
      <p class="text-gray-400 text-xl">Migrate from flat structure to domain-driven organization</p>
      <p class="text-gray-500 text-lg mt-2">Impact: Improved code navigation and team productivity</p>
    </div>

    <div class="border-l-4 border-yellow-600 pl-6">
      <h3 class="text-2xl font-bold text-white mb-3">→ Stripe API Migration Progress</h3>
      <p class="text-gray-400 text-xl">Implement Adapter pattern and start gradual migration</p>
      <p class="text-gray-500 text-lg mt-2">Target: 60% of Stripe calls migrated by year-end</p>
    </div>
    
    <div class="border-l-4 border-yellow-600 pl-6">
      <h3 class="text-2xl font-bold text-white mb-3">→ Start OAuth2 Platform</h3>
      <p class="text-gray-400 text-xl">Design architecture and begin core implementation</p>
      <p class="text-gray-500 text-lg mt-2">Impact: Setting stage for unified authentication</p>
    </div>
  </div>
</div>

<style>
h2 {
  @apply text-5xl font-bold;
}
</style>

---
layout: default
class: bg-black text-white
---

## 2026 First Half (Jan-Jun)

<div class="mt-12">
  <div class="text-3xl text-gray-300 mb-12">
    Delivery Phase - Ship critical infrastructure
  </div>

  <div class="space-y-10">
    <div class="border-l-4 border-green-600 pl-6">
      <h3 class="text-2xl font-bold text-white mb-3">✓ Complete Stripe API Migration</h3>
      <p class="text-gray-400 text-xl">Finish migrating all Stripe calls to new API version</p>
      <p class="text-gray-500 text-lg mt-2">Result: Access to 9 years of payment innovations</p>
    </div>

    <div class="border-l-4 border-green-600 pl-6">
      <h3 class="text-2xl font-bold text-white mb-3">✓ Complete OAuth2 Implementation</h3>
      <p class="text-gray-400 text-xl">Finish building and deploy unified authentication service</p>
      <p class="text-gray-500 text-lg mt-2">Key features: SSO, token management, user federation</p>
    </div>
    
    <div class="border-l-4 border-yellow-600 pl-6">
      <h3 class="text-2xl font-bold text-white mb-3">→ Begin Service Migration</h3>
      <p class="text-gray-400 text-xl">Start migrating existing services to new auth platform</p>
      <p class="text-gray-500 text-lg mt-2">Priority: Low-risk internal tools first</p>
    </div>
  </div>
</div>

<style>
h2 {
  @apply text-5xl font-bold;
}
</style>

---
layout: default
class: bg-black text-white
---

## 2026 Second Half (Jul-Dec)

<div class="mt-12">
  <div class="text-3xl text-gray-300 mb-12">
    Scale Phase - Realize the full potential
  </div>

  <div class="space-y-10">
    <div class="border-l-4 border-green-600 pl-6">
      <h3 class="text-2xl font-bold text-white mb-3">✓ All Services on Unified Auth</h3>
      <p class="text-gray-400 text-xl">Complete migration of all services to OAuth2 platform</p>
      <p class="text-gray-500 text-lg mt-2">Result: Single sign-on across entire ecosystem</p>
    </div>

    <div class="border-l-4 border-green-600 pl-6">
      <h3 class="text-2xl font-bold text-white mb-3">✓ Launch New Services</h3>
      <p class="text-gray-400 text-xl">Deploy new products leveraging shared authentication</p>
      <p class="text-gray-500 text-lg mt-2">Speed: 10x faster service launch with built-in auth</p>
    </div>
    
    <div class="border-l-4 border-yellow-600 pl-6">
      <h3 class="text-2xl font-bold text-white mb-3">→ Measure & Optimize</h3>
      <p class="text-gray-400 text-xl">Analyze metrics and optimize performance</p>
      <p class="text-gray-500 text-lg mt-2">Focus: Response time, reliability, developer satisfaction</p>
    </div>
  </div>
</div>

<style>
h2 {
  @apply text-5xl font-bold;
}
</style>

---
layout: default
class: bg-black text-white
---

# Resources & Gaps

<div class="grid grid-cols-2 gap-12 mt-12">
  <div>
    <h2 class="text-3xl font-bold text-green-500 mb-8">What We Have ✓</h2>
    <ul class="text-gray-300 space-y-4 text-xl">
      <li class="flex items-start gap-3">
        <span class="text-green-500 text-2xl">•</span>
        <span>Shared awareness & strong team trust</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="text-green-500 text-2xl">•</span>
        <span>Test culture & deep codebase knowledge</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="text-green-500 text-2xl">•</span>
        <span>Clear business needs with new service plans</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="text-green-500 text-2xl">•</span>
        <span>AI tools & Laravel/Lumen expertise</span>
      </li>
    </ul>
  </div>

  <div>
    <h2 class="text-3xl font-bold text-yellow-500 mb-8">What We Need →</h2>
    <ul class="text-gray-300 space-y-4 text-xl">
      <li class="flex items-start gap-3">
        <span class="text-yellow-500 text-2xl">•</span>
        <span>Full Stripe API changes analysis (2017→2025)</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="text-yellow-500 text-2xl">•</span>
        <span>OAuth2 production experience & reliability design</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="text-yellow-500 text-2xl">•</span>
        <span>Migration strategy without productivity loss</span>
      </li>
      <li class="flex items-start gap-3">
        <span class="text-yellow-500 text-2xl">•</span>
        <span>Optimal directory structure decision</span>
      </li>
    </ul>
  </div>
</div>

<style>
h1 {
  @apply text-5xl font-bold mb-4;
}
</style>

---
layout: default
class: bg-black text-white
---

# Personal Motivation

<div class="mt-12 space-y-10">
  <div class="text-center mb-12">
    <p class="text-3xl text-gray-300">Why this matters to me as an engineer</p>
  </div>

  <div class="grid grid-cols-2 gap-8">
    <div class="border-l-4 border-blue-600 pl-6">
      <h3 class="text-2xl font-bold text-white mb-3">Technical Excellence</h3>
      <p class="text-gray-400 text-xl">Building systems that are not just functional, but elegant and maintainable</p>
    </div>

    <div class="border-l-4 border-purple-600 pl-6">
      <h3 class="text-2xl font-bold text-white mb-3">Developer Empowerment</h3>
      <p class="text-gray-400 text-xl">Creating an environment where engineers can focus on innovation, not fighting legacy code</p>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-8">
    <div class="border-l-4 border-green-600 pl-6">
      <h3 class="text-2xl font-bold text-white mb-3">Business Impact</h3>
      <p class="text-gray-400 text-xl">Directly enabling faster product launches and better user experiences</p>
    </div>

    <div class="border-l-4 border-orange-600 pl-6">
      <h3 class="text-2xl font-bold text-white mb-3">Personal Growth</h3>
      <p class="text-gray-400 text-xl">Mastering system design and large-scale refactoring challenges</p>
    </div>
  </div>

  <div class="text-center mt-12">
    <p class="text-2xl text-gray-300 italic">"Transform technical debt into competitive advantage"</p>
  </div>
</div>

<style>
h1 {
  @apply text-5xl font-bold;
}
</style>

---
layout: center
class: bg-black text-white text-center
---

# Building for the Future

<div class="mt-12 space-y-6 text-2xl">
  <div>
    <span class="text-gray-500">From:</span> <span class="text-white">Fragmented, legacy systems</span>
  </div>
  <div>
    <span class="text-gray-500">To:</span> <span class="text-white">Unified, modern, scalable platform</span>
  </div>
</div>

<div class="mt-16 text-left max-w-2xl mx-auto">
  <h3 class="text-3xl font-bold mb-6">Enabling</h3>
  <ul class="text-gray-300 space-y-3 text-xl list-disc list-inside">
    <li>Faster product development cycles</li>
    <li>Better security posture</li>
    <li>Foundation for Studio's next phase</li>
  </ul>
</div>

<style>
h1 {
  @apply text-6xl font-black mb-8;
}
</style>