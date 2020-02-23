import React from 'react';
import MusicButton from './MusicButton.js';
import '../css/instrument.css';
import axios from 'axios';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class Instrument extends React.Component {
    constructor(props) {
        super(props);
        this.state = {instruments: [], instrumentList: [], indexSound: 0};
    }

    componentDidMount() {
        this.FetchSounds();
    }

    FetchSounds() {
        axios.get('http://localhost:5000/api/sounds/all').then(
            result => {
                var instrumentList = [];
                for (var i = 0; i < result.data.sounds.length; i++) {
                    instrumentList.push(result.data.sounds[i].name)
                }
                this.setState({
                    instruments: result.data,
                    instrumentList: instrumentList,
                    indexSound: 0
                });
            },
            error => {
                console.log(error)
            }
        );
    }

    setIndexSound = (selected) => {
        //console.log(this.state.instrumentList)
        var instrumentList = [];
        for (var i = 0; i < this.state.instruments.sounds.length; i++) {
            instrumentList.push(this.state.instruments.sounds[i].name)
        }
        this.setState({
            indexSound: instrumentList.indexOf(selected.value)
        });
        this.forceUpdate();
    }
    render() {
        var colors = ['brown','red', 'darkSalmon', 'pink', 'orange','yellow', 'yellowgreen','green','lightblue','blue','purple', 'indigo'];
        var sounds = []
        if (this.state.instruments.sounds !== undefined){
            var instrumentName = this.state.instruments.sounds[this.state.indexSound].name
            sounds = this.state.instruments.sounds[this.state.indexSound].sounds
        }

        return (
            <div>
            <Dropdown onChange={this.setIndexSound} options={this.state.instrumentList} value={this.state.instrumentList[this.state.indexSound]} placeholder="Select an soundbank" />
            <h1>{instrumentName}</h1>
            <div className="loop">
            {sounds.map((sound, i) => {
                return <MusicButton key={sound.soundName+i} name={sound.soundName} color={colors[i]} textColor={colors[i]} url={'http://localhost:5000/'+sound.src}></MusicButton>
            })}
            </div>
            </div>
        );
    }
}
export default Instrument;
