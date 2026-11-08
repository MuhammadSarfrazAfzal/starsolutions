/** Starsolutions copy and contact details, so components stay presentational */
export const SITE = {
  name: 'Starsolutions',
  whatsappDisplay: '+92 334 2221063',
  whatsappNumber: '923342221063',
  email: 'info@starsolutions.com',
  address: 'Near Opera Cinema (back side), Star Plaza, City Housing Society, Jhelum',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Star+Plaza+City+Housing+Society+Jhelum',
}

/** wa.me click-to-chat link, optionally with a prefilled message */
export function whatsappLink(text?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

/** mailto link with optional prefilled subject/body */
export function mailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString().replace(/\+/g, '%20')
  return `mailto:${SITE.email}${query ? `?${query}` : ''}`
}

export const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Our Story', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export type ServiceId = 'calling' | 'software' | 'ads' | 'tiktok' | 'ebay'

export type Service = {
  id: ServiceId
  title: string
  tagline: string
  body: string
  points: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'calling',
    title: 'Cold Calling & Lead Generation',
    tagline: 'Conversations that turn into pipeline',
    body: 'A trained outbound team that speaks for your brand. We research your market, write call scripts that sound human and work your lists every day, so your sales team spends its time on prospects who are ready to talk.',
    points: [
      'Lead research and list building',
      'Script writing and objection handling',
      'Appointment setting and qualification',
      'Call notes logged to your CRM or sheet',
    ],
  },
  {
    id: 'software',
    title: 'Software Development',
    tagline: 'Websites, web apps and tools built to last',
    body: 'From a fast business website to a custom dashboard that runs your operations, we design and build software around how your business actually works, then keep it secure, maintained and ready to grow.',
    points: [
      'Business websites and landing pages',
      'Custom web applications and dashboards',
      'Store, inventory and order integrations',
      'Ongoing maintenance and support',
    ],
  },
  {
    id: 'ads',
    title: 'Google & Facebook Ads',
    tagline: 'Paid campaigns that answer to your budget',
    body: 'We plan, launch and manage campaigns on Google Search, Shopping and YouTube, and across Facebook and Instagram. Every ad has a job, every rupee and dollar is tracked, and you see clearly what is working.',
    points: [
      'Account setup, tracking and conversions',
      'Audience, keyword and creative strategy',
      'Daily optimisation and budget pacing',
      'Plain-language performance reports',
    ],
  },
  {
    id: 'tiktok',
    title: 'TikTok Shop Management',
    tagline: 'Turn short videos into a storefront',
    body: 'We set up and run your TikTok Shop end to end: product listings, shop design, creator outreach and the content calendar that keeps your products in front of buyers while they scroll.',
    points: [
      'Shop setup, verification and listings',
      'Product content and live-selling support',
      'Creator and affiliate collaborations',
      'Orders, stock and customer service',
    ],
  },
  {
    id: 'ebay',
    title: 'eBay Store Management',
    tagline: 'Marketplace selling, run by sellers',
    body: 'Listings that rank, prices that compete and feedback that stays healthy. We manage your eBay store day to day, from item specifics and photos to messages, returns and promoted listings.',
    points: [
      'Store setup and optimised listings',
      'Pricing, promotions and promoted listings',
      'Buyer messages, returns and feedback',
      'Inventory and fulfilment coordination',
    ],
  },
]

/** Service strip: platform glyphs where an item names a platform, line icons otherwise */
export type ChannelIcon = 'phone' | 'target' | 'code' | 'window' | 'bag' | 'googleAds' | 'facebook' | 'instagram' | 'tiktok' | 'ebay'

export type Channel = { label: string; service: ServiceId; icon: ChannelIcon }

export const CHANNEL_ROWS: Channel[][] = [
  [
    { label: 'Google Ads', service: 'ads', icon: 'googleAds' },
    { label: 'Facebook Ads', service: 'ads', icon: 'facebook' },
    { label: 'Instagram', service: 'ads', icon: 'instagram' },
    { label: 'TikTok Shop', service: 'tiktok', icon: 'tiktok' },
    { label: 'eBay', service: 'ebay', icon: 'ebay' },
  ],
  [
    { label: 'Cold Calling', service: 'calling', icon: 'phone' },
    { label: 'Lead Generation', service: 'calling', icon: 'target' },
    { label: 'Web Development', service: 'software', icon: 'code' },
    { label: 'Custom Software', service: 'software', icon: 'window' },
    { label: 'E-commerce', service: 'ebay', icon: 'bag' },
  ],
]

/** "Are you running into these problems?": one pain point per service and how we fix it */
export const PROBLEMS: { service: ServiceId; title: string; pain: string; fix: string }[] = [
  {
    service: 'calling',
    title: 'Not enough leads?',
    pain: 'Your sales team waits on a quiet phone while good prospects never hear about you.',
    fix: 'Our outbound team researches your market, writes scripts that sound human and calls your lists every day, booking qualified conversations for your sales team.',
  },
  {
    service: 'ads',
    title: 'Ads burning your budget?',
    pain: 'Clicks come in, sales do not, and nobody can say which campaign is paying for itself.',
    fix: 'We set up proper tracking, sharpen audiences, keywords and creatives, optimise daily and report every rupee and dollar in plain language.',
  },
  {
    service: 'software',
    title: 'Website working against you?',
    pain: 'A slow site, spreadsheets everywhere and tools that do not talk to each other.',
    fix: 'We build fast websites and custom dashboards around how your business actually works, connect your store and orders, and keep it all maintained.',
  },
  {
    service: 'tiktok',
    title: 'TikTok Shop not selling?',
    pain: 'Views without orders, half-finished listings and no time to make content every day.',
    fix: 'We run your shop end to end: listings, shop design, product content, creator collaborations and live-selling support.',
  },
  {
    service: 'ebay',
    title: 'eBay store stuck?',
    pain: 'Listings that do not rank, prices that do not compete and buyer messages piling up.',
    fix: 'We optimise listings and item specifics, keep prices competitive, run promoted listings and handle messages, returns and feedback every day.',
  },
]

/** "Working with us": life with several separate vendors vs one partner (no client claims) */
export const COMPARE = {
  without: [
    'Separate freelancers or agencies for calls, website, ads and stores',
    'Reports full of jargon, or no reports at all',
    'Advice from people who have never run a store',
    'Chasing updates by email and waiting for answers',
  ],
  with: [
    'One team for calling, software, ads and marketplace stores',
    'Plain-language updates: calls made, leads booked, spend and sales',
    'Advice shaped by 15 years running our own iPhone store business in the USA',
    'Talk to the team directly on WhatsApp',
  ],
}

export const STORY_LESSONS = [
  {
    title: 'We know the seller’s side',
    body: 'Sourcing, pricing, listings, shipping and returns are not theory to us. We have run them for our own store for fifteen years.',
  },
  {
    title: 'We know the US customer',
    body: 'Serving American buyers taught us what earns trust online: clear listings, quick replies and honest after-sale support.',
  },
  {
    title: 'We spend money like owners',
    body: 'Our own margins depended on every ad and every listing. We bring the same discipline to your budget.',
  },
]

export const PROCESS = [
  {
    title: 'Say hello',
    body: 'Message us on WhatsApp or email. Tell us about your business, your goals and what is getting in the way.',
  },
  {
    title: 'Get a clear plan',
    body: 'We come back with a focused plan: which services fit, what we will do first, timelines and a written quote.',
  },
  {
    title: 'Launch together',
    body: 'Your team at Starsolutions sets everything up, shares access and keeps you in the loop from day one.',
  },
  {
    title: 'Review and grow',
    body: 'Regular reports, honest conversations about results and steady improvements to what is working.',
  },
]

export const FAQS = [
  {
    q: 'What services does Starsolutions offer?',
    a: 'We offer cold calling and lead generation, software development, Google and Facebook ads, TikTok Shop management and eBay store management. You can hire us for one service or combine several.',
  },
  {
    q: 'What experience does your team have?',
    a: 'For 15 years we have run our own iPhone store business in the USA. That hands-on selling experience shapes how we run ads, marketplaces and outreach for our clients.',
  },
  {
    q: 'Do you work with businesses outside Pakistan?',
    a: 'Yes. Our team works from Jhelum and we work remotely with businesses wherever they are. Share your time zone and we will plan calls and working hours around you.',
  },
  {
    q: 'How do I get started?',
    a: 'Message us on WhatsApp at +92 334 2221063 or email info@starsolutions.com. Tell us what you need and we will set up a free consultation to understand your goals.',
  },
  {
    q: 'Can you manage my TikTok Shop or eBay store end to end?',
    a: 'Yes. We can take over listings, pricing, content, customer messages and order coordination, or support your in-house team with just the parts you need.',
  },
  {
    q: 'How is pricing decided?',
    a: 'Every project is scoped individually. Once we understand your goals, we share a clear written quote before any work starts, so there are no surprises.',
  },
]
