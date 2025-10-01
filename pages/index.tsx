import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import PropertyCard from "@/components/property/PropertyCard"; // make sure this exists

export default function Home() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <Link href={`/property/${property.id}`} key={property.id}>
          <PropertyCard property={property} />
        </Link>
      ))}
    </div>
  );
}
