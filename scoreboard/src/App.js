import React from "react";
import "./App.css";

import { Header, Main, ScoreboardViewer, EditPlayer } from "./Components";

function App() {
  return (
    <>
      <EditPlayer />
      <ScoreboardViewer />
      <Header />
      <Main />
    </>
  );
}

export default App;
