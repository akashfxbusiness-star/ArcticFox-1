import { FeatureCard, ChecklistItem, TrustIndicator, TelegramMessage } from './types';

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 'gold-updates',
    title: 'Daily Gold Market Updates',
    description: 'Professional XAUUSD educational content, live charts, and technical structure discussions.',
    iconName: 'TrendingUp',
  },
  {
    id: 'ea-updates',
    title: 'Exclusive EA Updates',
    description: 'Receive early access announcements, version releases, and critical platform optimization updates.',
    iconName: 'Cpu',
  },
  {
    id: 'rewards',
    title: 'Member-Only Rewards',
    description: 'Exclusive discount campaigns, coupon giveaways, license extensions, and limited-time promotions.',
    iconName: 'Gift',
  },
  {
    id: 'access',
    title: 'Direct Community Access',
    description: 'Stay connected with professional ArcticFox traders and get official announcements straight from developers.',
    iconName: 'Users',
  },
];

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: '1', text: 'Daily Gold Analysis', category: 'Market' },
  { id: '2', text: 'Trading Education', category: 'Education' },
  { id: '3', text: 'Weekly Market Outlook', category: 'Market' },
  { id: '4', text: 'EA Version Announcements', category: 'Tech' },
  { id: '5', text: 'Discount Coupons', category: 'Promo' },
  { id: '6', text: 'New Feature Releases', category: 'Tech' },
  { id: '7', text: 'Community Polls', category: 'Engagement' },
  { id: '8', text: 'Trading Psychology Content', category: 'Education' },
];

export const TRUST_INDICATORS: TrustIndicator[] = [
  {
    id: 'trust-1',
    title: 'Growing Trading Community',
    description: 'Join thousands of gold traders globally who trust ArcticFox for daily trading insights.',
    iconName: 'Users',
  },
  {
    id: 'trust-2',
    title: 'Professional Educational Content',
    description: 'No fluff. Just professional-grade technical analysis and risk management concepts.',
    iconName: 'BookOpen',
  },
  {
    id: 'trust-3',
    title: 'No Spam',
    description: 'Your time is valuable. We only broadcast essential updates, zero spam policy.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'trust-4',
    title: 'Official ArcticFox Updates',
    description: 'The sole direct channel for authentic firmware, configuration files, and official notices.',
    iconName: 'CheckCircle',
  },
  {
    id: 'trust-5',
    title: 'Transparent Development',
    description: 'Real-time platform logs, performance metrics, and community-driven roadmaps.',
    iconName: 'Eye',
  },
  {
    id: 'trust-6',
    title: 'Long-Term Vision',
    description: 'A commitment to sustainable trading algorithms and premium educational resources.',
    iconName: 'Sparkles',
  },
];

export const TELEGRAM_MOCK_MESSAGES: TelegramMessage[] = [
  {
    id: 'msg-pinned',
    sender: 'ArcticFox Community',
    timestamp: 'Pinned Message',
    type: 'text',
    pinned: true,
    content: '📌 Welcome to the official ArcticFox Community! This channel is your exclusive destination for XAUUSD Gold analysis, direct EA announcements, beta updates, and special community discounts. Keep notifications ON so you never miss a beat! 🦊🔥',
    reactions: [
      { emoji: '🔥', count: 482 },
      { emoji: '❤️', count: 312 },
      { emoji: '⚡', count: 194 },
    ],
  },
  {
    id: 'msg-gold',
    sender: 'ArcticFox Community',
    timestamp: '09:15 AM',
    type: 'chart',
    content: '📈 **XAUUSD (GOLD) Daily Market Analysis**\n\nGold is currently trading inside a tight descending wedge on the 4H timeframe. We see strong order block rejection at **$2,342 - $2,345** zone. Maintain tight risk control.\n\n• **Key Resistance:** $2,365\n• **Key Support:** $2,330\n• **Outlook:** Bullish divergence forming on the MACD. Look for a clean breakout confirmation above the $2,352 level before selecting high-probability setups.',
    reactions: [
      { emoji: '👍', count: 184 },
      { emoji: '📈', count: 243 },
      { emoji: '🔥', count: 95 },
    ],
    chartData: [
      { time: '01:00', price: 2331 },
      { time: '02:00', price: 2334 },
      { time: '03:00', price: 2332 },
      { time: '04:00', price: 2336 },
      { time: '05:00', price: 2341 },
      { time: '06:00', price: 2338 },
      { time: '07:00', price: 2345 },
      { time: '08:00', price: 2343 },
      { time: '09:00', price: 2349 },
    ],
  },
  {
    id: 'msg-outlook',
    sender: 'ArcticFox Community',
    timestamp: 'Yesterday at 04:30 PM',
    type: 'poll',
    content: '🗳️ **Weekly Market Sentiment Poll**\n\nWhere do you expect Gold to close by Friday? Vote below and share your thesis in our community chat!',
    reactions: [
      { emoji: '👀', count: 88 },
      { emoji: '🔥', count: 142 },
    ],
    pollQuestion: 'Where will Gold (XAUUSD) end the week?',
    pollOptions: [
      { text: 'Above $2,380 (Highly Bullish)', votes: 742, percentage: 48 },
      { text: 'Range bound $2,340 - $2,370', votes: 521, percentage: 34 },
      { text: 'Below $2,330 (Bearish)', votes: 284, percentage: 18 },
    ],
  },
  {
    id: 'msg-version',
    sender: 'ArcticFox Community',
    timestamp: '2 days ago',
    type: 'text',
    content: '🚀 **SYSTEM RELEASE: ArcticFox EA Version 4.2.0**\n\nWe have officially pushed the latest update to our high-performance Gold trading system! This release focuses on enhanced drawdown management and highly optimized latency-handling under high volatility spikes.\n\n**Changelog:**\n1. **Advanced Risk Guard:** Integrated a dynamic slippage filter for news events.\n2. **Spread Control:** Auto-halt mechanisms when broker spread widens beyond 35 pips.\n3. **Improved GUI:** Real-time target metrics and leverage ratio warnings directly on the MT4/MT5 chart UI.\n\n*The setup manual and updated preset files have been uploaded to our secure portal. Join the Telegram discussion to see the live results from fellow beta testers.* 👇',
    reactions: [
      { emoji: '🔥', count: 312 },
      { emoji: '💻', count: 145 },
      { emoji: '🚀', count: 284 },
    ],
  },
  {
    id: 'msg-coupon',
    sender: 'ArcticFox Community',
    timestamp: '3 days ago',
    type: 'coupon',
    content: '🎁 **COMMUNITY REWARD: Exclusive Gold EA Discount**\n\nTo celebrate reaching **12,000+ members** in our Telegram family, we are releasing an exclusive limited-time coupon code for our premium ArcticFox Gold System suite!\n\nThis is the biggest discount we have offered this year. Valid only for the first **150 redemptions**.',
    couponCode: 'FOXGOLD25',
    couponDiscount: '25% FLAT DISCOUNT',
    reactions: [
      { emoji: '🎉', count: 421 },
      { emoji: '❤️', count: 198 },
      { emoji: '🔥', count: 356 },
    ],
  },
];
