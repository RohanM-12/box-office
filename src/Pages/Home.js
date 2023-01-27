import { React, useState } from 'react';

import MainPageLayout from '../Components/MainPageLayout';

function Home() {
  const [input, updateInput] = useState('');

  const onInputChange = ev => {
    updateInput(ev.target.value);
  };
  const onSearchClick = () => {
    //
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
      });
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearchClick();
    }
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
    </MainPageLayout>
  );
}

export default Home;
