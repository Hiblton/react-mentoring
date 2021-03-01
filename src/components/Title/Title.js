import PropTypes from "prop-types";

const Title = ({ title, color = "white", fontWeight = 100 }) => (
  <h1 style={{ color, fontWeight }} title={title}>
    {title}
  </h1>
);

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontWeight: PropTypes.number,
};
