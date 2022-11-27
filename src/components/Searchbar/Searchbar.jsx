import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const Searchbar = ({ submitSearch }) => {
  const [search, setSearch] = useState('');

  const onInputText = ev => {
    setSearch(ev.currentTarget.value);
  };

  const submitForm = event => {
    event.preventDefault();
    submitSearch(search);
    setSearch('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={submitForm}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          value={search}
          onChange={onInputText}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  submitSearch: PropTypes.func,
};

export default Searchbar;
