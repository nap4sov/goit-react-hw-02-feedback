import PropTypes from 'prop-types';
import styles from './styles.module.scss'

const FeedbackOptions = ({ incrementStatisticsData }) => {
  return (
    <div className={styles.feedbackOptions}>
      <button className={styles.good} name="good" type="button" onClick={incrementStatisticsData}>
        Good
      </button>
      <button className={styles.neutral} name="neutral" type="button" onClick={incrementStatisticsData}>
        Neutral
      </button>
      <button className={styles.bad} name="bad" type="button" onClick={incrementStatisticsData}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  incrementStatisticsData: PropTypes.func.isRequired
}

export default FeedbackOptions;
