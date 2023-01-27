import { React, useState } from 'react';
import { apiGet } from '../misc/config';
import MainPageLayout from '../Components/MainPageLayout';

function Home() {
  const [input, updateInput] = useState('');
  const [results, setResults] = useState(null);

  const onInputChange = ev => {
    updateInput(ev.target.value);
  };
  const onSearchClick = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setResults(result);
    });
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearchClick();
    }
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }

    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onKeyDown={onKeyDown}
        onChange={onInputChange}
        value={input}
      />
      <button type="button" onClick={onSearchClick}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
}

export default Home;
