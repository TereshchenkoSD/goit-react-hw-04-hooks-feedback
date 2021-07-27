import { Component } from 'react';

import Section from './components/Section';

import FeedbackOptions from './components/FeedbackOptions';

import Statistics from './components/Statistics';

import Notification from './components/Notification';

export default class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleIncrement = e => {
    const btnName = e.target.name;
    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalStateValues = Object.values(this.state);

    return totalStateValues.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good
      ? Math.round((this.state.good * 100) / this.countTotalFeedback())
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const isFeedback = good || neutral || bad;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {isFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
