import React from 'react';
import { NOTE_NAMES, TONES, NOTE_FREQ } from '../../util/tones';
import  Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor (props) {
    super(props);
    this.notes = NOTE_NAMES.map(note => new Note(TONES[note]));
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.playNotes = this.playNotes.bind(this);

  }

  componentDidMount () {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  onKeyDown(e) {
    e.preventDefault();
    this.props.keyPressed(String.fromCharCode(e.keyCode));
  }

  onKeyUp(e) {
    e.preventDefault();
    this.props.keyReleased(String.fromCharCode(e.keyCode));
  }

  playNotes () {
    NOTE_FREQ.forEach((note, idx) => {
      if (this.props.notes.indexOf(note) !== -1) {
        this.notes[idx].start();
      } else {
        this.notes[idx].stop();
      }
    });
  }

  render () {
    this.playNotes();
    const notes = NOTE_NAMES.map((note, i) => {
      return <NoteKey key={i} name={note} />;
    });
    return (
      <div>
        {notes}
      </div>
    );
  }
}

export default Synth;
