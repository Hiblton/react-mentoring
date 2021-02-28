const Title = ({ title, color = "white" }) => (
  <h1 style={{ color, fontWeight: 100 }} title={title}>
    {title}
  </h1>
);

export default Title;
