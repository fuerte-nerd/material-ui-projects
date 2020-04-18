import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getGames } from "./redux/actions";
import "./App.css";

import { Header, Main, ScoreboardViewer } from "./Components";

function App(props) {
  useEffect(() => {
    const ls = localStorage.getItem("daves_scorecard_app");
    if (ls) {
      props.dispatch(getGames(JSON.parse(ls)));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("daves_scorecard_app", JSON.stringify(props.games));
  }, [props.games]);

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
