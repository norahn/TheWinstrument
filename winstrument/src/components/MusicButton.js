import React, { useState, useEffect } from "react";
import Button from './Button.js';
import '../css/musicButton.css';

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing,audio]);

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audio]);
    return [playing, toggle];
};

const MusicButton = ({ url, color, name, textColor}) => {
    var [playing, toggle] = useAudio(url);
    return (
        <div>
        <p style={{color:textColor}}>{name}</p>
        <Button color={color} onClick={toggle}></Button>
        </div>
    );
};

export default MusicButton;
