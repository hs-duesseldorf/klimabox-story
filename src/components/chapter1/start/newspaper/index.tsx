import React, { useState, useEffect } from "react";

import imageURL from "./newspaper.png";
import croppedImg from "./newspaper_cropped.png"
import Plx from "react-plx";
import AudioIndex from "../../../audio-player";

const Newspaper = () => {

    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPos(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const parallaxData = [
        {
            start:4200,
            end:4400,
            properties: [
                {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity"
                }
            ]
        },
  
        {
            start:4600,
            end:5400,
            properties: [
                {
                    startValue: 1,
                    endValue: 0,
                    property: "opacity"
                },
            ]
        }
    ];

    const playerParallaxData = [
        {
            start:4800,
            end:5500,
            easing: [0, 0, 0.05, 1],
            properties: [
                {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity"
                }
            ]
        },
    ];

    return (
        <div >
            {
                scrollPos > 4400 && 
                <div className="absolute z-0 bottom-0" >
                    <img src={croppedImg} alt="Zeitung reingezoomt" className="fixed z-0 top-0 bottom-0 overflow-x-hidden object-cover w-100% h-100%"/>
                    <div className="sticky bottom-20% z-20 inset-0 mt-100%">
                        <Plx parallaxData={playerParallaxData}>
                            <AudioIndex/>
                        </Plx>
                    </div>
                </div>
            }
            <Plx parallaxData={parallaxData} style={{opacity: 0, height:"200vh" , zIndex:10 }}>
                <div className="h-screen z-10" >
                    <img src={imageURL} alt="Zeitung" className="fixed z-5 top-0 bottom-0 object-cover inset-0 w-100% h-100%" />
                    
                </div>
                
            </Plx>
            


        </div>
    );
  };
export { Newspaper };
  