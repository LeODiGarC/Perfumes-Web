import { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import { perfumes } from "../mocks/perfumes";

const CardGrid = () => {
  const [type, setType] = useState("all");
  const [modalSrc, setModalSrc] = useState(null);

  const openModal = (src) => setModalSrc(src);
  const closeModal = () => setModalSrc(null);

  const handleClick = (selectedType) => {
    setType(selectedType);
  };

  const sortedPerfumes = [...perfumes].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
  );

  return (
    <>
      <h2>Florece con nuestras fragancias</h2>
      <div className="btn-ribbon">
        <div className="btn-container">
          <button onClick={() => handleClick("men")}>Hombre</button>
          <button onClick={() => handleClick("women")}>Mujer</button>
        </div>
        <button className="btn" onClick={() => handleClick("all")}>
          Todos
        </button>
      </div>
      <div className="card-grid">
        {sortedPerfumes.map((p) =>
          p.type === type || type === "all" || p.type === "unisex" ? (
            <Card
              key={p.name}
              img={p.image}
              name={p.name}
              price={p.price}
              onClick={openModal}
            />
          ) : null,
        )}
      </div>
      {modalSrc && <Modal src={modalSrc} onClose={closeModal} />}
    </>
  );
};

export default CardGrid;
