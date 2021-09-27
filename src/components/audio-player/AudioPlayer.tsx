import React, { useState } from "react";
import AudioFileInfo from "./AudioFileInfo";
import { Interview } from "./interview"

const AudioPlayer = (props: {interviews: Interview[]}) => {
    const [tabOpened, setTabOpened] = useState(0);

    const handleClick = (id: number) => {
        setTabOpened(id); 
    };

    return(
        <div className="container mx-auto px-auto lg:px-32">
            {props.interviews.map((i, id) => {

                return (
                    <div className="rounded-xl overflow-hidden bg-white m-2" key={id}>
                        <div id="title-bar" className="flex flex-row flex-auto p-1" onClick={() => handleClick(id)}>
                            <div className="px-6 p-1 font-bold text-xs sm:text-sm md:text-base"> {i.title} </div>
                            <div className="p-1 text-xs sm:text-sm md:text-base"> {i.description} </div>
                        </div>
                        
                        {id === tabOpened &&
                            <AudioFileInfo interview={i}></AudioFileInfo>
                        }
                    </div>
                    
                );
            })}
            
        </div>
    );
}

export default AudioPlayer;