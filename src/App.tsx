import React from "react";
import { Provider } from "react-redux";
import MainPage from "./pages/MainPage/MainPage";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
