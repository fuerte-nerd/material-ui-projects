import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadNotes } from "./redux/actions";
import "./App.css";
import Header from "./comps/Header";
import Main from "./comps/Main";
import Footer from "./comps/Footer";
import AddNote from "./comps/AddNote";
import LoadScreen from "./comps/LoadScreen";

function App(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("daves_notes_app")) {
      const notes = JSON.parse(localStorage.getItem("daves_notes_app"));
      const notesToLoad = notes.filter((i) => {
        return i.title.length > 0 && i.body.length > 0 ? i : null;
      });
      props.dispatch(loadNotes(notesToLoad));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("daves_notes_app", JSON.stringify(props.notes));
  }, [props.notes]);

  //useEffect(()=>{

  //}, [isLoading])

  return (
    <>
      {isLoading ? <LoadScreen /> : null}
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
