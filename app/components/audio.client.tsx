import React, { useRef, useState, useMemo, useEffect } from 'react';

const AudioPlayer = () => {
    const [playing, setPlaying] = useState(false);

    const audioElement = useMemo(() => {
        return new Audio('/titans_music_scary.mp3');
    }, []);

    useEffect(() => {
        audioElement.addEventListener('play', () => {
            setPlaying(true);
        });

        audioElement.addEventListener('pause', () => {
            setPlaying(false);
        });

        audioElement.addEventListener('canplaythrough', async () => {
            try {
                await audioElement.play();
                setPlaying(true);
            } catch(err) {
                console.warn(err);
            }

        });
    }, [audioElement])

    const toggleMusic = async () => {
        if(audioElement.paused) {
            await audioElement.play().catch(err => console.warn(err));
        } else {
            audioElement.pause();
        }
        setPlaying(!audioElement.paused);
    }

    return <div>
        <button onClick={toggleMusic} className="opacity-25 hover:opacity-100">
            <img className="w-4" src={ playing ? "/pause.png" : "/play.png"} alt="unmute or mute music"/>
        </button>
    </div>
}

export default AudioPlayer;