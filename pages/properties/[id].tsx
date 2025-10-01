import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/properties/${id}`);
        setProperty(response.data);
      } catch (err: any) {
        setError("Failed to load property details");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading property details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <img src={property.imageUrl} alt={property.title} className="rounded-md mb-4" />
      <h1 className="text-2xl font-bold">{property.title}</h1>
      <p>{property.location}</p>
      <p className="text-green-600 font-semibold">${property.price}/night</p>
      <p>{property.description}</p>
    </div>
  );
}
