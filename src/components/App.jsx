import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGalery from './ImageGalery/ImageGalery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

const App = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState(1);
  const [response, setResponse] = useState([]);
  const [loader, setLoader] = useState('off');
  const [visabiliti, setVisabiliti] = useState(false);
  const [card, setCard] = useState('');

  const onSupmit = data => {
    setNumber(1);
    setLoader('onSubmit');
    setName(data);
  };

  useEffect(() => {
    if (name === '') {
      return;
    }
    fetch(
      `https://pixabay.com/api/?q=${name}&page=${number}&key=31516310-7380ad7b276f6caf864428c6c&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(respons => respons.json())
      .then(res => {
        return setResponse(prev => [...prev, ...res.hits]);
      })
      .catch(error => console.log(error));
    setLoader('off');
  }, [name, number]);

  const onClickLoadMore = () => {
    setNumber(number + 1);
    setLoader('onClick');
  };

  const onItem = event => {
    setVisabiliti(true);
    setCard(event.target.name);
  };
  const onModalClose = event => {
    if (event.target === event.currentTarget) {
      setVisabiliti(false);
    }
  };
  const onEscapeModalClose = () => {
    setVisabiliti(false);
  };

  if (loader === 'onSubmit') {
    return (
      <>
        <Searchbar submitSearch={onSupmit} />
        <Loader />
      </>
    );
  }

  return (
    <>
      <Searchbar submitSearch={onSupmit} />

      <ImageGalery
        arrResponse={response.length !== 0 ? response : undefined}
        onItem={onItem}
        stateVis={visabiliti}
        cardName={card}
        onModalClose={onModalClose}
        onEscapeModalClose={onEscapeModalClose}
      />

      {response.length !== 0 ? (
        loader === 'onClick' ? (
          <Loader />
        ) : (
          <Button onClick={onClickLoadMore} />
        )
      ) : undefined}
    </>
  );
};

export default App;
