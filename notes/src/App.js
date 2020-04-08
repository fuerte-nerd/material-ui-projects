import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadNotes, deleteNote } from "./redux/actions";
import "./App.css";
import Header from "./comps/Header";
import Main from "./comps/Main";
import Footer from "./comps/Footer";
import AddNote from "./comps/AddNote";

function App(props) {
  useEffect(() => {
    if (localStorage.getItem("daves_notes_app")) {
      props.dispatch(
        loadNotes(JSON.parse(localStorage.getItem("daves_notes_app")))
      );
      console.log(props.notes);
      props.notes.map((i) => {
        console.log(i.title.length);
        console.log(i.body.length);
        if (i.title.length === 0 && i.body.length === 0) {
          props.dispatch(deleteNote(i.id));
        }
        return;
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("daves_notes_app", JSON.stringify(props.notes));
  }, [props.notes]);

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
