import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const data = ["Good", "Neutral", "Bad"];

  const [feedback, setFeedback] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("feedBackData"));
    if (savedData) {
      return savedData;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    // console.log(feedbackType);
    // setFeedback((prev) => ({
    //   ...prev,
    //   [feedbackType]: prev[feedbackType] + 1,
    // }));
    if (feedbackType === "Good") {
      setFeedback((prev) => ({ ...prev, good: prev.good + 1 }));
    }
    if (feedbackType === "Neutral") {
      setFeedback((prev) => ({ ...prev, neutral: prev.neutral + 1 }));
    }
    if (feedbackType === "Bad") {
      setFeedback((prev) => ({ ...prev, bad: prev.bad + 1 }));
    }
  };
  useEffect(() => {
    window.localStorage.setItem("feedbackData", JSON.stringify(feedback));
  }, [feedback]);

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className="container">
      <Description />
      <Options data={data} updateFeedback={updateFeedback} />
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
