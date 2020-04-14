import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";

import { Header, Main, ScoreboardViewer } from "./Components";

function App(props) {
  console.log(props.games);
  return (
    <>
      <ScoreboardViewer />
      <Header />
      <Main />
    </>
  );
}

const mapStateToProps = (state) => ({
  games: state.games,
});

export default connect(mapStateToProps)(App);
