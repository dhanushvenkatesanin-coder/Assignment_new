import { useState } from "react";

function FeedbackForm() {
  const [feedback, setFeedback] = useState({ text: "", rating: "5", subscribe: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFeedback({ ...feedback, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedback);
    alert(JSON.stringify(feedback, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="text" placeholder="Your feedback" value={feedback.text} onChange={handleChange}></textarea>
      <select name="rating" value={feedback.rating} onChange={handleChange}>
        <option value="1">1 - Poor</option>
        <option value="3">3 - Average</option>
        <option value="5">5 - Excellent</option>
      </select>
      <label>
        <input type="checkbox" name="subscribe" checked={feedback.subscribe} onChange={handleChange} />
        Subscribe to newsletter
      </label>
      <button type="submit">Submit Feedback</button>
    </form>
  );
}