import { useState } from 'react';

import Section from './components/Section';

import FeedbackOptions from './components/FeedbackOptions';

import Statistics from './components/Statistics';

import Notification from './components/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = { good, neutral, bad };
  const isFeedback = good || neutral || bad;
  const optionKeys = Object.keys(feedbacks);

  const handleIncrement = e => {
    const btnName = e.target.name;

    switch (btnName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const totalStateValues = Object.values(feedbacks);

    return totalStateValues.reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return good ? Math.round((good * 100) / countTotalFeedback()) : 0;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionKeys}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {isFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};

export default App;
