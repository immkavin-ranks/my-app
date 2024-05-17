import "./App.css";

function Card(props) {
  return (
    <section>
      <h2>{props.icon} Title</h2>
      {props.children}
    </section>
  );
}

function Icon() {
  return <i>🔥</i>;
}

export default function App() {
  return (
    <Card icon={<Icon />}>
      <p>The body of the card!</p>
    </Card>
  );
}
