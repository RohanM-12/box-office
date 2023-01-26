import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home Page
      </Route>
      <Route exact path="/starred">
        This is starred Page
      </Route>
      <Route>Page not Found 404</Route>
      {/* default page loaded when path is not matched */}
    </Switch>
  );
}

export default App;
