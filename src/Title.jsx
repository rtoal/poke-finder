const titleStyle = {
  backgroundColor: "purple",
  color: "white",
  padding: 20,
  marginTop: 0,
};

export default function Title({ title }) {
  return <h1 style={titleStyle}>{title}</h1>;
}
