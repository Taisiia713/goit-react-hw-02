import Feedback from "../feedback/Feedback";
import Options from "../options/Options";
import Notification from "../notification/Notification";

import { useEffect, useState } from "react";

export default function App() {
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });

  useEffect(() => {
    localStorage.setItem("saved-clicks", clicks);
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      [feedbackType]: prevClicks[feedbackType] + 1,
    }));
  };

  const reset = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Notification />
      <Options feedback={updateFeedback} reset={reset} />
      <Feedback
        good={clicks.good}
        neutral={clicks.neutral}
        bad={clicks.bad}
        total={totalFeedback}
        positive={positiveFeedback}
      />
    </div>
  );
}
