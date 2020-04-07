import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import Header from "./comps/Header";
import Main from "./comps/Main";
import Footer from "./comps/Footer";
import AddNote from "./comps/AddNote";

function App(props) {
  useEffect(() => {
    if (localStorage.getItem("daves_notes_app")) {
      props.dispatch(loadNotes());
    }
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <AddNote />
    </>
  );
}

const mapStateToProps = (state) => ({
  notes: state.notes,
});
export default connect(mapStateToProps)(App);
