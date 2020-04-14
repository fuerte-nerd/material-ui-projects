import { TOGGLE_DIALOG, CREATE_NEW_GAME, UPDATE_GAME } from "./types";

const initialState = {
  games: [],
  gameLoadedInViewer: null,
  viewerDialog: false,
  newGameDialog: false,
  addPlayerDialog: false,
  editPlayerDialog: false
};

export default  (state=initialState, action)=>{
  switch(action.type){
    case TOGGLE_DIALOG:
      return {
        ...state,
        [action.payload]: !state[action.payload]
  }

}
