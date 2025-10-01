interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    imageUrl: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-lg shadow p-4">
      <img src={property.imageUrl} alt={property.title} className="rounded-md mb-2" />
      <h2 className="text-lg font-bold">{property.title}</h2>
      <p>{property.location}</p>
      <p className="text-green-600 font-semibold">${property.price}/night</p>
    </div>
  );
}
