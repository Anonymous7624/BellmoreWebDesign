// Services, pricing, process and FAQ content. Front-end only.

export interface Service {
  id: string;
  name: string;
  tagline: string;
  features: string[];
  accent: string;
}

export const SERVICES: Service[] = [
  {
    id: 'websites',
    name: 'Website Design & Redesign',
    tagline:
      'Mobile-friendly websites that show your services, photos, reviews, and an easy way for customers to reach you.',
    accent: '#4E86BC',
    features: [
      'New custom business websites',
      'Website redesigns',
      'Mobile-friendly layouts',
      'Services sections & photo galleries',
      'Reviews, contact forms & call buttons',
      'Quote buttons & social media links',
      'Basic SEO setup',
      'Routine maintenance & content updates',
    ],
  },
  {
    id: 'apps',
    name: 'Mobile App Development',
    tagline:
      'Custom iOS and Android apps built around how your business actually runs. Examples of what an app can include:',
    accent: '#1E2A38',
    features: [
      'iOS & Android apps',
      'Customer accounts & logins',
      'Online ordering',
      'Booking & scheduling',
      'Payments',
      'Rewards & loyalty programs',
      'Push notifications',
      'Dashboards & API integrations',
    ],
  },
  {
    id: 'social',
    name: 'Social Media Management',
    tagline:
      'Regular posts on Instagram and Facebook so your pages stay active and show off the work you do.',
    accent: '#6B8E6B',
    features: [
      'Instagram & Facebook management',
      'Captions & content planning',
      'Content scheduling',
      'Routine profile updates',
      'Before-and-after posts',
      'Project highlights',
      'Reels & short-form video',
      'Consistent posting',
    ],
  },
  {
    id: 'photography',
    name: 'Business Photography & Content',
    tagline:
      'On-site photos and short videos of your real work. Usually bundled with a monthly social media plan.',
    accent: '#C9A86A',
    features: [
      'On-site photography',
      'Before-and-after & finished-work photos',
      'Product & service photography',
      'Staff & workplace photos',
      'Short vertical videos',
      'Website gallery content',
      'Social media content',
      'Usually bundled with a content plan',
    ],
  },
];

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
  note?: string;
}

export const WEBSITE_PLANS: PricingPlan[] = [
  {
    title: 'New Website',
    price: 'Starting at $450',
    featured: true,
    badge: 'Most popular',
    cta: 'Get a Free Mockup',
    ctaHref: '/contact',
    features: [
      'Basic frontend site that I can host for you',
      'Mobile-friendly design',
      'Services section',
      'Photo gallery',
      'Reviews',
      'Call, text, and email buttons',
      'Social media links',
      'Basic SEO setup',
    ],
  },
  {
    title: 'Website Refresh',
    price: 'Starting at $450',
    cta: 'Request Pricing',
    ctaHref: '/contact',
    features: [
      'A cleaner, modern redesign of your current site',
      'Better mobile layout',
      'Updated sections and copy',
      'Better contact buttons',
      'Basic SEO improvements',
    ],
  },
];

// Explains what the $450 covers and when a site costs more or has a monthly fee.
export const WEBSITE_PRICING_NOTE =
  'The $450 start is for a basic frontend site that I can host for you. Extras like a contact form or a contact page need a backend, so they cost more. Bigger or content-heavy sites, or sites with a backend, may have a small monthly charge for hosting and upkeep.';

export const APP_PLANS: PricingPlan[] = [
  {
    title: 'Mobile App Development',
    price: 'Starting at $2,500',
    badge: 'New',
    cta: 'Talk About Your App',
    ctaHref: '/contact',
    note: 'Features are examples of what I can build, not a fixed package. Every app is quoted once we know what yours needs to do.',
    features: [
      'Custom iOS & Android apps',
      'Customer accounts & logins',
      'Online ordering, booking & scheduling',
      'Payments & rewards programs',
      'Push notifications',
      'Business dashboards & backend integrations',
      'API integrations with tools you already use',
      'Custom features built around your business',
    ],
  },
];

// Sets expectations for app pricing, which moves a lot more than website pricing.
export const APP_PRICING_NOTE =
  'App projects start at $2,500 and are quoted after we map out what the app needs to do. A simple app with accounts and booking sits near the start, and things like ordering, payments, rewards, or a backend dashboard raise it from there.';

export const MONTHLY_PLANS: PricingPlan[] = [
  {
    title: 'Website Care',
    price: 'Starting at $49/month',
    cta: 'Ask About This Plan',
    ctaHref: '/contact',
    note: 'Major redesigns, new pages, custom systems, and advanced features are quoted separately.',
    features: [
      'Routine text changes',
      'Photo changes',
      'Service updates',
      'Pricing updates',
      'Minor maintenance',
      'One grouped update request per month',
    ],
  },
  {
    title: 'Social Content',
    price: 'Starting at $450/month',
    cta: 'Ask About This Plan',
    ctaHref: '/contact',
    features: [
      'Instagram & Facebook management',
      'On-site content visits',
      'Professional photos',
      'Short video clips',
      'Eight monthly posts',
      'Up to two Reels',
      'Captions',
      'Scheduling',
    ],
  },
  {
    title: 'Complete Online Presence',
    price: 'Starting at $650/month',
    featured: true,
    badge: 'Best value',
    cta: 'Ask About This Plan',
    ctaHref: '/contact',
    features: [
      'Regular on-site content visits',
      'Instagram & Facebook management',
      'Professional photos & short-form video',
      'Up to twelve monthly posts',
      'Up to four Reels',
      'Routine website updates',
      'New work added to your website gallery',
      'Basic monthly performance summary',
    ],
  },
];

export const PRICING_NOTE =
  'Final pricing depends on how much content, travel, and posting you need. Twice-weekly or very frequent visits are a custom quote.';

export interface ProcessStep {
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'I look at how you show up online now',
    description: 'A quick look at your website, social pages, and how customers find you today.',
  },
  {
    title: 'We figure out what you actually need',
    description: 'Website, mobile app, social content, photography, or some mix of them. Whatever fits your business.',
  },
  {
    title: 'I make a free homepage mockup or content plan',
    description: 'You see a real direction before you commit to anything.',
  },
  {
    title: 'You look it over',
    description: 'We change things until it feels right for you and your customers.',
  },
  {
    title: 'I build, photograph, post, and keep it updated',
    description: 'I handle the work we agreed on and keep everything current.',
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const CONTACT_FAQS: Faq[] = [
  {
    question: 'Is the homepage mockup really free?',
    answer:
      'Yes. I build a homepage idea first so you can see the direction before you decide anything. It costs nothing and you are not signing up for anything.',
  },
  {
    question: 'Is the completed website free?',
    answer:
      'No. The homepage mockup is free to look at, but the finished, built website is a paid project. You only pay if you want to move forward.',
  },
  {
    question: 'Can you manage my Instagram and Facebook?',
    answer:
      'Yes. Social media management is one of the main things I do. That covers posts, captions, scheduling, and short-form video on Instagram and Facebook.',
  },
  {
    question: 'Can you build a mobile app for my business?',
    answer:
      'Yes. I build custom iOS and Android apps for local businesses. Depending on what you need, an app can include customer accounts, online ordering, booking and scheduling, payments, rewards, push notifications, and a dashboard on your end. App projects start at $2,500 and the final price depends on what the app has to do.',
  },
  {
    question: 'Do you take the photos?',
    answer:
      'Yes. I take the photos and short videos of your work on-site. That part is usually bundled with a monthly social media plan.',
  },
  {
    question: 'Can I purchase only website maintenance?',
    answer:
      'Yes. The Website Care plan covers routine text, photo, service, and pricing updates without a full monthly content plan.',
  },
  {
    question: 'Can I buy social media without a new website?',
    answer:
      'Of course. Social-only and content-only plans are available whether or not I built your current site.',
  },
  {
    question: 'How far do you travel for content?',
    answer:
      'On-site photography and content visits are usually within about a 30-minute drive of Bellmore, so Merrick, Wantagh, Seaford, Massapequa, East Meadow, and nearby towns.',
  },
  {
    question: 'Can you build a website for a business outside Nassau County?',
    answer:
      'Yes. Website design is available for businesses anywhere in New York. Only the on-site photography and social visits are limited by distance.',
  },
  {
    question: 'How does monthly pricing work?',
    answer:
      'Monthly plans are ongoing and start at the prices listed. Final pricing depends on travel, number of visits, platforms, posting frequency, editing, and website support.',
  },
  {
    question: 'Can the website be updated later?',
    answer:
      'Yes. I can update photos, services, prices, and copy over time, either as part of a monthly plan or as a one-off request.',
  },
];
