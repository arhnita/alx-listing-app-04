import Image from "next/image";
import Link from "next/link";


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
  host: {
    name: string;
    avatar: string;
    joinedDate: string;
  };
  bedrooms: number;
  bathrooms: number;
  guests: number;
  rules: string[];
}

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
        <div className="flex items-center text-gray-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {property.location}
        </div>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">★</span>
          <span className="ml-1 text-sm">
            {property.rating} · {property.reviews} reviews
          </span>
        </div>
      </div>

      {/* Images Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="relative h-96 lg:h-[500px]">
          <Image
            src={property.images[0] || "/placeholder-image.jpg"}
            alt={property.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {property.images.slice(1, 5).map((image, index) => (
            <div key={index} className="relative h-48 lg:h-60">
              <Image
                src={image}
                alt={`${property.title} ${index + 2}`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Property Info */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">
                  Hosted by {property.host.name}
                </h2>
                <p className="text-gray-600">
                  {property.guests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
                </p>
              </div>
              <div className="relative w-12 h-12">
                <Image
                  src={property.host.avatar || "/default-avatar.jpg"}
                  alt={property.host.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>

          {/* Amenities */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* House Rules */}
          {property.rules && property.rules.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">House Rules</h3>
              <ul className="space-y-2">
                {property.rules.map((rule, index) => (
                  <li key={index} className="text-gray-700">
                    • {rule}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Reviews Section */}
          {/* <ReviewSection propertyId={property.id} /> */}
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold">${property.price}</span>
                  <span className="text-gray-600 ml-1">night</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-sm">
                    {property.rating} · {property.reviews} reviews
                  </span>
                </div>
              </div>

              <Link
                href={`/booking?propertyId=${property.id}`}
                className="block w-full bg-pink-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
              >
                Reserve
              </Link>

              <p className="text-center text-sm text-gray-500 mt-3">
                You won&#39;t be charged yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;