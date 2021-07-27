import PropTypes from 'prop-types';
import { Message } from './Notification.styles';

const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
