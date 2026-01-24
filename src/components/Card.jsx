

const Card = ({ img, name, price, onClick }) => {
  return (
    <div className="card" onClick={() => onClick && onClick(img)}>
      <div className="card-img">
        <img src={img} alt={name} />
      </div>
      <div className="card-content">
        <h3>{name}</h3> <p>$ {price}</p>
      </div>
    </div>
  );
};

export default Card;
