import React from 'react';
import Image from 'next/image';
import { CardProps } from '../../interfaces';
import { BUTTON_TEXT} from '../../constants';
import Button from './Button';

const Card: React.FC<CardProps> = ({ property }) => {
  const handleBookNow = () => {
    alert(`Booking ${property.title}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
      {/* Property Image */}
      <div className="relative h-48 mb-4">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      {/* Property Title */}
      <h3 className="text-lg font-bold mb-2">{property.title}</h3>

      {/* Location */}
      <p className="text-gray-600 mb-2">{property.location}</p>

      {/* Rating */}
      <div className="flex items-center mb-2">
        <span className="text-yellow-500">⭐</span>
        <span className="ml-1 text-sm">{property.rating}</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4">{property.description}</p>

      {/* Price */}
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">
          ${property.price} / night
        </span>
        
        <Button variant="primary" onClick={handleBookNow}>
          {BUTTON_TEXT.BOOK_NOW}
        </Button>
      </div>
    </div>
  );
};

export default Card;