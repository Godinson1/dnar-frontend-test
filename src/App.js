import React from "react";
import { Switch, Route } from "react-router-dom";

import { ViewportProvider } from "./utils";
import { Info, Analytics, Home } from "./Components";

const App = () => {
  return (
    <div className="App">
      <ViewportProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route path="/analytic" component={Analytics} />
        </Switch>
      </ViewportProvider>
    </div>
  );
};

export default App;
