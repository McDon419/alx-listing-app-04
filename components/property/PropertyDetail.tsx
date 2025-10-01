import React from "react";

interface PropertyDetailProps {
  property: {
    id: string;
    title: string;
    description: string;
    location: string;
    price: number;
    imageUrl: string;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-3xl mx-auto p-6 border rounded-lg shadow">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-80 object-cover rounded-md mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-4">{property.location}</p>
      <p className="text-lg mb-4">{property.description}</p>
      <p className="text-green-600 text-xl font-semibold">
        ${property.price}/night
      </p>
    </div>
  );
}
