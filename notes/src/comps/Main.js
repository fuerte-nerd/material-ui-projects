import React from "react";

import NoteListings from "./NoteListings";
import NoteViewer from "./NoteViewer";

const Main = () => {
  return (
    <main style={{ margin: "2rem 0" }}>
      <NoteListings />
      <NoteViewer />
    </main>
  );
};

export default Main;
