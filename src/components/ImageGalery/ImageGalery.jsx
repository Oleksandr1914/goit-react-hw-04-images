import ImageGaleryItem from '../ImageGaleryItem/ImageGaleryItem';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import '../styles.css';

const ImageGalery = ({
  arrResponse,
  onItem,
  stateVis,
  cardName,
  onModalClose,
  onEscapeModalClose,
}) => {
  return (
    <ul className="ImageGallery">
      {arrResponse &&
        arrResponse.map(el => (
          <ImageGaleryItem key={el.id} onItem={onItem} objElement={el} />
        ))}

      {stateVis && (
        <Modal
          nameCard={cardName}
          onModalClose={onModalClose}
          onEscapeModalClose={onEscapeModalClose}
        />
      )}
    </ul>
  );
};

ImageGalery.propTypes = {
  objResponse: PropTypes.array,
  onItem: PropTypes.func,
  stateVis: PropTypes.bool,
  cardName: PropTypes.string,
  onModalClose: PropTypes.func,
  onEscapeModalClose: PropTypes.func,
};

export default ImageGalery;
