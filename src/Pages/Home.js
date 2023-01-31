import { React, useState } from 'react';
import { apiGet } from '../misc/config';
import MainPageLayout from '../Components/MainPageLayout';
import ActorGrid from '../Components/actor/ActorGrid';
import ShowGrid from '../Components/show/ShowGrid';
import { useLastQuery } from '../misc/custom-hooks';
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from './Home.styled';
import CustomRadio from '../Components/CustomRadio';

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
      <SearchInput
        type="text"
        placeholder="Search for Shows/Casts"
        onKeyDown={onKeyDown}
        onChange={onInputChange}
        value={input}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="shows"
            id="search-shows"
            value="show"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </div>
        <div>
          <CustomRadio
            label="Actors"
            id="search-casts"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>

      <SearchButtonWrapper>
        <button type="button" onClick={onSearchClick}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </MainPageLayout>
  );
}

export default Home;
