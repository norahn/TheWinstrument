import React from 'react';
import MusicButton from './MusicButton.js';
import '../css/instrument.css';
import $ from 'jquery'; 

class Instrument extends React.Component {
  constructor(props) {
      super(props);

      this.state = {sounds: {}};
  }

  componentDidMount() {
    this.FetchSounds();
  }

  FetchSounds() {
    $.getJSON('http://10.152.21.190:5000/api/sounds/all')
          .then(({ results }) => this.setState({ sounds: results }));
  }

  render() {
    var notes = ['A','B','C','D','E','F','G','H'];
    var colors = ['red','pink','orange','yellow','green','lightblue','blue','purple'];
    return (
      <div className="loop">
      {notes.map((note, i) => {
        return <MusicButton name={note} color={colors[i]} textColor={colors[i]} url={'http://shing.mobile9.com/download/media/702/angrybirds_oaw366ij.mp3'}></MusicButton>
      })}
    </div>
    );
  }
}
export default Instrument;
