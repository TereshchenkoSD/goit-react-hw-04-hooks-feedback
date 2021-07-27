import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styles';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {options.map(option => (
        <Button
          key={option}
          name={option}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
