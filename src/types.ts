export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  category: string;
}

export interface TrustIndicator {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TelegramMessage {
  id: string;
  sender: string;
  avatarUrl?: string;
  timestamp: string;
  type: 'text' | 'image' | 'poll' | 'chart' | 'coupon';
  content: string;
  reactions: { emoji: string; count: number; userReacted?: boolean }[];
  pinned?: boolean;
  imageSeed?: string;
  chartData?: { time: string; price: number }[];
  pollQuestion?: string;
  pollOptions?: { text: string; votes: number; percentage: number }[];
  couponCode?: string;
  couponDiscount?: string;
}
