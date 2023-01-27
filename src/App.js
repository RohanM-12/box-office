import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Starred from './Pages/Starred';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Starred">
          <Starred />
        </Route>
        <Route>Page not Found 404</Route>
        {/* default page loaded when path is not matched */}
      </Switch>
    </div>
  );
}

export default App;
