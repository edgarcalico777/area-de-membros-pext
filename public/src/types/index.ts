export interface Module {
  id: number;
  title: string;
  image: string;
  link: string;
  type: 'pdf' | 'video';
}

export interface Product {
  id: number;
  title: string;
  description?: string;
  image: string;
  checkoutUrl: string;
  ctaText?: string;
}

export interface User {
  email: string;
  isAuthenticated: boolean;
}