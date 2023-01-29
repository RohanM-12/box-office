import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Show from './Pages/Show';
import Starred from './Pages/Starred';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/Starred">
        <Starred />
      </Route>

      <Route exact path="/show/:id">
        <Show />
      </Route>

      <Route>Page not Found 404</Route>

      {/* default page loaded when path is not matched */}
    </Switch>
  );
}

export default App;
