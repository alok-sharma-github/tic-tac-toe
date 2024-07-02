import PropTypes from 'prop-types';

const Square = ({ value }) => {
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
};

// Define propTypes
Square.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired // Adjust the type according to your requirements
};

export default Square;
