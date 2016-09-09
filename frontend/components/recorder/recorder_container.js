import { connect } from 'react-redux';
import  Recorder  from './recorder';
import * as Actions from '../../actions/tracks_actions';




const mapStateToProps = ({ isRecording }) => ({
  isRecording
});

const mapDispatchToProps = dispatch => ({
  startRecording: ()=> dispatch(Actions.startRecording()),
  stopRecording: () => dispatch(Actions.stopRecording())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);
