import { useState, useEffect } from "react";
import Title from "./Title";
import Entry from "./Entry";
import Info from "./Info";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const pokemon = encodeURIComponent(name.toLowerCase());
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    fetch(url)
      .then((r) => r.json())
      .then(setData)
      .catch((e) => setData(`${e}`));
  }, [name]);

  return (
    <div className="App">
      <Title title="Pokémon Finder" />
      <Entry action={setName} />
      <Info data={data} />
    </div>
  );
}
