import { NotesConstants } from '../actions/note_actions';
import { NOTE_NAMES, TONES } from '../util/tones';

const validKeys =['A', 'S', 'D', 'F', 'G'];
const keyMap = {};

validKeys.forEach( (key, idx) => {
  keyMap[key] = TONES[validKeys[idx]];
});

const notes = ( state = [], action ) => {
  switch (action.type) {
    case NotesConstants.KEY_PRESSED:
      if (validKeys.includes(action.key)) {
        return [
          ...state,
          keyMap[action.key]
        ];
      } else {
        return state;
      }

    case NotesConstants.KEY_RELEASED:
      const idx = state.indexOf(TONES[action.key]);
      if (idx !== -1 && validKeys.includes(action.key)) {
        return [
          ...state.slice(0, idx),
          ...state.slice(idx + 1)
          ];
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default notes;
