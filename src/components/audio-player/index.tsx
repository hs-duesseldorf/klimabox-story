import React, { useState, useEffect, useRef } from "react";
import AudioPlayer from "./AudioPlayer";
import { interviews } from "./interviews";

const Audio = () => {

    return(
        <div>
            <AudioPlayer interviews={interviews}></AudioPlayer>
        </div>
    )
}

export default Audio;
