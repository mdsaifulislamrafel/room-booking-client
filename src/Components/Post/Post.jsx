import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Post = () => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const {user} = useContext(AuthContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = { username: user?.displayName, rating, comment  };
    try {
      const response = await fetch('https://hotel-room-server-pi.vercel.app/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
      });
      if (response.ok) {
        alert('Review submitted successfully!');
        setRating(1);
        setComment('');
      } else {
        alert('Failed to submit review. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            value={rating}
            min="1"
            max="5"
            className="input input-bordered"
            onChange={(e) => setRating(parseInt(e.target.value))}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Comment</span>
          </label>
          <textarea
            name="comment"
            placeholder="Enter your comment here"
            value={comment}
            className="textarea textarea-bordered"
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn mt-10 mb-10 bg-cyan-300 w-full">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Post;
