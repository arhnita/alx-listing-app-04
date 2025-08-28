
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  image: string;
  rating: number;
}

export interface CardProps {
  property: Property;
  onClick?: () => void;
}


export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export interface PropertyCardProps{
  id: number;
  property: []

}


export interface PropertyProps {
  id: number
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}