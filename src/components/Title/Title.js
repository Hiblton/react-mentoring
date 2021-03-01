const Title = ({ title, color = "white", fontWeight = 100 }) => (
  <h1 style={{ color, fontWeight }} title={title}>
    {title}
  </h1>
);

export default Title;
