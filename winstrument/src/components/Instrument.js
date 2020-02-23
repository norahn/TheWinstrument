import React from 'react';
import MusicButton from './MusicButton.js';
import '../css/instrument.css';
import $ from 'jquery';
import axios from 'axios';

class Instrument extends React.Component {
  constructor(props) {
      super(props);
      this.state = {instruments: []};
  }

  componentDidMount() {
    this.FetchSounds();
  }

  FetchSounds() {
          axios.get('http://localhost:5000/api/sounds/all').then(
            result => {
              this.setState({
                instruments: result.data
              });
            },
            error => {
              console.log(error)
            }
            );
  }

  render() {
    var colors = ['brown','red', 'darkSalmon', 'pink', 'orange','yellow', 'yellowgreen','green','lightblue','blue','purple', 'indigo'];
    var instrumentName = 'None Picked';
    var sounds = [];
    if (this.state.instruments.sounds !== undefined) {
      instrumentName = this.state.instruments.sounds[1].name;
      sounds = this.state.instruments.sounds[1].sounds;
    }

    return (
      <div>
        <h1>{instrumentName}</h1>
        <div className="loop">
        {sounds.map((sound, i) => {
          return <MusicButton name={sound.soundName} color={colors[i]} textColor={colors[i]} url={'http://localhost:5000/'+sound.src}></MusicButton>
        })}
        </div>
      </div>
    );
  }
}
export default Instrument;
