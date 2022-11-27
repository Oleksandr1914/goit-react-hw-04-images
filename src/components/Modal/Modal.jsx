import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ nameCard, onModalClose, onEscapeModalClose }) => {
  useEffect(() => {
    const modalClose = event => {
      if (event.code === 'Escape') {
        onEscapeModalClose();
      }
    };
    document.addEventListener('keydown', modalClose);
    return () => {
      document.removeEventListener('keydown', modalClose);
    };
  }, [onEscapeModalClose]);

  return (
    <div className="Overlay" onClick={onModalClose}>
      <div className="Modal">
        <img src={nameCard} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  nameCard: PropTypes.string,
  onModalClose: PropTypes.func,
  onEscapeModalClose: PropTypes.func,
};

export default Modal;
