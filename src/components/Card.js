export default function Card(props) {
  return (
    <div className="card-container">
      <img
        src={props.data.content}
        alt="props.data.name"
        className="card-img"
      ></img>
      <div className="card-info">
        <h3 className="card-info-location">{props.data.location}</h3>
        <h1 className="card-info-name">{props.data.name}</h1>
        <p className="card-info-date">{props.data.date}</p>
        <p className="card-info-desc">{props.data.desc}</p>
      </div>
    </div>
  );
}
