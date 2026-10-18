export interface MenuItem {
  id: string;
  name: string;
  traditionalName?: string;
  category: 'main-course' | 'grills' | 'drinks-extras';
  price: number;
  description: string;
  spiceLevel?: 'None' | 'Mild' | 'Spicy' | 'Hot';
  isSignature?: boolean;
  isPopular?: boolean;
  servingSize?: string;
  tags?: string[];
  image?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface ReservationDetails {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'Outdoor Patio' | 'Indoor Main Dining' | 'Flame Grill View';
  occasion?: string;
  specialRequests?: string;
}
