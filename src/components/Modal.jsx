

const Modal = ({ src, alt = "image", onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
