import Link from "next/link";
import Image from "next/image";

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  amenities: string[];
  rating: number;
  reviews: number;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <div className="relative h-48 w-full">
          <Image
            src={property.images[0] || "/placeholder-image.jpg"}
            alt={property.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 truncate">{property.title}</h3>
          
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
            {property.description}
          </p>
          
          <p className="text-gray-500 text-sm mb-3 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {property.location}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-sm text-gray-600">
                {property.rating} ({property.reviews} reviews)
              </span>
            </div>
            
            <div className="text-right">
              <span className="text-xl font-bold text-green-600">
                ${property.price}
              </span>
              <span className="text-sm text-gray-500 ml-1">/ night</span>
            </div>
          </div>
          
          <div className="mt-3">
            <div className="flex flex-wrap gap-1">
              {property.amenities.slice(0, 3).map((amenity, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  {amenity}
                </span>
              ))}
              {property.amenities.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  +{property.amenities.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;