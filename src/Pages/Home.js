import { React, useState } from 'react';
import { apiGet } from '../misc/config';
import MainPageLayout from '../Components/MainPageLayout';
import ActorGrid from '../Components/actor/ActorGrid';
import ShowGrid from '../Components/show/ShowGrid';
import { useLastQuery } from '../misc/custom-hooks';

function Home() {
  const [input, updateInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const isShowsSearch = searchOption === 'shows';

  const onInputChange = ev => {
    updateInput(ev.target.value);
  };
  const onSearchClick = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
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
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
  // console.log(searchOption);
  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for Shows/Casts"
        onKeyDown={onKeyDown}
        onChange={onInputChange}
        value={input}
      />
      <div>
        <label htmlFor="search-shows">
          Shows
          <input
            id="search-shows"
            type="radio"
            value="show"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor="search-casts">
          Actors
          <input
            id="search-casts"
            type="radio"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>

      <button type="button" onClick={onSearchClick}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
}

export default Home;
