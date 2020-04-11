import React from "react";
import "./App.css";

import { Header, Main, ScoreboardViewer } from "./Components";

function App() {
  return (
    <>
      <ScoreboardViewer />
      <Header />
      <Main />
    </>
  );
}

export default App;
