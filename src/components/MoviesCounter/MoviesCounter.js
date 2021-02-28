const MoviesCounter = ({ count }) => (
  <h3>{`${count} movie${count > 1 ? "s" : ""} found`}</h3>
);

export default MoviesCounter;
