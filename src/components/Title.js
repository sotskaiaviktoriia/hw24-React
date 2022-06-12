const Title = ({ name, type = "normal" }) => {
  return <p style={{ fontWeight: type }}>Hello, {name}</p>;
};

export default Title;
