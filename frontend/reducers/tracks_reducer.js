import { TracksConstants } from '../actions/tracks_actions';
import { merge } from 'lodash/merge';

let currTrackId = 0;

const track  = ( state, action ) => {
  switch (action.type) {
    case TracksConstants.START_RECORDING:
      return {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeStart
      };
    case TracksConstants.STOP_RECORDING:
      return {
        roll: [...state.roll,
          {note: [], timeSlice: action.timeNow - state.timeStart}]
      };
    case TracksConstants.ADD_NOTES:
      return {
        roll: [...state.roll,
          {note: action.notes, timeSlice: action.timeNow - state.timeStart}]
      };
    default:
      return state;
  }
};

const tracks = ( state = {}, action ) =>{
  switch (action.type) {
    case TracksConstants.START_RECORDING:
        currTrackId ++;
        return merge({},
          state,
          {[currTrackId]: track(undefined, action)});

    case TracksConstants.STOP_RECORDING:
        return merge({},
          state,
          {[currTrackId]: track(state[currTrackId], action)});

    case TracksConstants.ADD_NOTES:
        return merge({},
          state,
          {[currTrackId]: track(state[currTrackId], action)});
          
    default:
      return state;
  }
};
export default tracks;
