import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const data = ["good", "neutral", "bad"];

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

  useEffect(() => {
    window.localStorage.setItem("feedBackData", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  console.log(totalFeedback);
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    // console.log(feedbackType);
    // setFeedback((prev) => ({
    //   ...prev,
    //   [feedbackType]: prev[feedbackType] + 1,
    // }));
    if (feedbackType === "good") {
      setFeedback((prev) => ({ ...prev, good: prev.good + 1 }));
    }
    if (feedbackType === "neutral") {
      setFeedback((prev) => ({ ...prev, neutral: prev.neutral + 1 }));
    }
    if (feedbackType === "bad") {
      setFeedback((prev) => ({ ...prev, bad: prev.bad + 1 }));
    }
  };

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
      <Options
        data={data}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
