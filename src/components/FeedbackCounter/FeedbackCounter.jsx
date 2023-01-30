import {useState} from 'react';
import './FeedbackCounter.css';
import Statistics from '../Statistics/statistic.js';
import FeedbackOptions from '../Options/Options.js';
import Section from '../SectionTitle/SectionTitle';
import Notification from 'components/Notifications/Notifications';

export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 const feedbackHandler = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };
  
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const positiveFeedbackPercentage =  ((good / countTotalFeedback()) * 100).toFixed(2);


      return (
      <div className="Counter">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={feedbackHandler}
          />
        </Section>

        {!countTotalFeedback() ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positiveFeedback={positiveFeedbackPercentage}
            />
          </Section>
        )}
      </div>
    );
}