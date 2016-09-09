import { connect } from 'react-redux';
import Synth from './synth';
import * as Actions from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  notes: state.notes
});

const mapDispatchToProps = dispatch => ({
  keyPressed: key => dispatch(Actions.keyPressed(key)),
  keyReleased: key => dispatch(Actions.keyReleased(key))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Synth);
