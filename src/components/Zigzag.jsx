import "./Zigzag.css";

function Zigzag({ image, title, text, reverse }) {
  return (
    <div className={`zigzag ${reverse ? "reverse" : ""}`}>
      <div className="zigzag-image">
        <img src={image} alt={title} />
      </div>

      <div className="zigzag-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Zigzag;