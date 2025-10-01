import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: string | number;
  comment: string;
  rating?: number;
  user?: string;
}

interface ReviewSectionProps {
  propertyId: string | number;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchReviews();
    }
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews available for this property yet.</p>;
  }

  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-xl font-semibold">Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-3">
          <p className="text-gray-700">"{review.comment}"</p>
          {review.rating && (
            <p className="text-yellow-500">⭐ {review.rating}/5</p>
          )}
          {review.user && (
            <p className="text-sm text-gray-500">- {review.user}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
