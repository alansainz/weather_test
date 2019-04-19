import React, { Component } from 'react';
import Home from './containers/Home';
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
