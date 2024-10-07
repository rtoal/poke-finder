export default function Info({ data }) {
  return data.name && data.weight && data.height && data.sprites ? (
    <section>
      <h2>Meet {data.name}</h2>
      <figure>
        <img src={data.sprites.front_shiny} alt={data.name} />
      </figure>
      <p>weight is {data.weight}</p>
      <p>height is {data.height}</p>
    </section>
  ) : (
    <p>No data yet</p>
  );
}
