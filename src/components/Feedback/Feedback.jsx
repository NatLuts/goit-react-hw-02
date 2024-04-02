const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <h2>Good: {feedback.good}</h2>
      <h2>Neutral: {feedback.neutral}</h2>
      <h2>Bad: {feedback.bad}</h2>
      <h2>Total: {totalFeedback}</h2>
      <h2>Positive: {positiveFeedback}%</h2>
    </div>
  );
};

export default Feedback;
