import PropTypes from 'prop-types';
import css from './Options.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.box}>
            {options.map((option, id) => (
                <div key={id}>
                    <button onClick={() => onLeaveFeedback(option)}>
                        {option[0].toUpperCase() + option.slice(1, option.length)}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default FeedbackOptions

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};