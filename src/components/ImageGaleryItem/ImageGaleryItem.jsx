import PropTypes from 'prop-types';
import '../styles.css';

const ImageGaleryItem = ({ objElement, onItem }) => {
  return (
    <li className="ImageGalleryItem" onClick={onItem}>
      <img
        src={objElement.webformatURL}
        alt={objElement.user}
        name={objElement.largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGaleryItem.propTypes = {
  objElement: PropTypes.object,
  onItem: PropTypes.func,
};

export default ImageGaleryItem;
