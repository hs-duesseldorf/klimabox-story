import React, { useState, useEffect, useRef }  from "react";
import altImg from "./kapitel1_testimonial-1.png"
import './range.css';

const AudioFileInfo = ({ interview } ) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const { title, description, text, imgSrc, audioSrc, isOpen} = interview;
    
    const audioRef = useRef(new Audio(audioSrc));
    const progressBar = useRef<HTMLInputElement>(null);
    const animationRef = useRef(0);

    useEffect(() => {
        const seconds = Math.floor(audioRef.current.duration);
        setDuration(seconds);
        const node = progressBar.current;
        if(progressBar.current != null){
    }
        if(node != null){

            node.max = seconds.toString();
        }
    }, [audioRef?.current?.readyState]); 

    audioRef.current.onloadedmetadata = function () {
        const seconds = Math.floor(audioRef.current.duration);
        setDuration(seconds);
        const node = progressBar.current;
        if(node != null){
            node.max = seconds.toString();
        }
    }

    const calcTime = (secs: number) => {
        const minutes = Math.floor(secs / 60);
        const retMinutes = minutes < 10 ? `0${minutes}`:`${minutes}`;
        const seconds = Math.floor(secs % 60);
        const retSeconds = seconds < 10? `0${seconds}`:`${seconds}`
        return `${retMinutes}:${retSeconds}`;
    }

    const handlePlayClick = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue); 
        if(prevValue){
            audioRef.current.pause();
            cancelAnimationFrame(animationRef.current);
        } else {
            audioRef.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        }
    };

    const whilePlaying = () => {
        console.log('progress bar value: ', progressBar.current?.value);
        console.log('progress bar max value: ', progressBar.current?.max);
        console.log('current time value: ', audioRef.current.currentTime);
        console.log('current time value floored: ', Math.floor(audioRef.current.currentTime));
        if (progressBar.current != null && audioRef.current.currentTime != (null || undefined)){
            progressBar.current.valueAsNumber = Math.floor(audioRef.current.currentTime);
        }
        progressBar.current?.style.setProperty('--seek-before-width', `${Number(progressBar.current?.value) / duration * 100}%`);
        setCurrentTime(Number(progressBar.current?.value));
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioRef.current.currentTime = Number(progressBar.current?.value);
        progressBar.current?.style.setProperty('--seek-before-width', `${Number(progressBar.current?.value) / duration * 100}%`);
        setCurrentTime(Number(progressBar.current?.value));
    }

    return (
        <div className=" bg-em1-extralight h-240 relative ">
            <div className="flex flex-auto">
                {interview.imgSrc ? 
                    <img className="w-1/2 object-cover" id="audio-player-image" src={imgSrc}/> :
                    <img className="w-1/2 object-cover" id="audio-player-image" src={altImg}/>
                }
                <div className="flex items-center w-1/2 container mx-auto px-4 md:px-12 -mt-12 text-xxs sm:text-sm md:text-base overflow-hidden">{text}</div>
                <div className="flex items-center absolute justify-between bottom-0 mx-auto py-2 bg-white bg-opacity-60 right-0 left-0">
                    
                    <svg className="mx-4" id="audio-button" width="40" height="40" viewBox="0 0 40 40" onClick={() => handlePlayClick()}>
                        <circle id="play-button" cx="20" cy="20" r="20" fill="#fff"/>
                        {
                            !isPlaying ? 
                            <path id="Icon_awesome-play" data-name="Icon awesome-play" d="M20.051,9.921,3.421.306A2.256,2.256,0,0,0,0,2.214V21.44a2.267,2.267,0,0,0,3.421,1.908l16.631-9.611A2.191,2.191,0,0,0,20.051,9.921Z" transform="translate(14.5 12.5) scale(0.65 0.65)" fill="#197eb7"/> 
                            :
                            <g transform="translate(12.5 12.5) scale(0.055 0.055)" fill="#197eb7">
                                <path d="M14.22,45.665v186.013c0,25.223,16.711,45.66,37.327,45.66c20.618,0,37.339-20.438,37.339-45.66V45.665
                                    c0-25.211-16.721-45.657-37.339-45.657C30.931,0,14.22,20.454,14.22,45.665z"/>
                                <path d="M225.78,0c-20.614,0-37.325,20.446-37.325,45.657V231.67c0,25.223,16.711,45.652,37.325,45.652s37.338-20.43,37.338-45.652
                                    V45.665C263.109,20.454,246.394,0,225.78,0z"/>
                            </g>
                        }
                    </svg>
                     <div className="flex-grow mx-4 -t-2">
                        <input type="range" className="range" step="1" min="0" defaultValue="0" ref={progressBar} onChange={changeRange}></input>
                        <div className="flex justify-between">
                            <p className="text-xs">
                                { calcTime(currentTime) }
                            </p>
                            <p className="text-xs">
                                { (duration && !isNaN(duration)) && calcTime(duration) }
                            </p>
                        </div>
                    </div> 
                </div>
            </div>
                
        </div>
    );
}

export default AudioFileInfo;
