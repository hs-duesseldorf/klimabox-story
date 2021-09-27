import React from "react";

import imageURL from "./newspaper.png";
import croppedImg from "./newspaper_cropped.png"
import Plx from "react-plx";
import AudioIndex from "../../audio-player";

const Newspaper = () => {
    const disableScrolling = () => {
        var x=window.scrollX;
        var y=window.scrollY;
        window.onscroll=function(){window.scrollTo(x, y);};
    }

    const parallaxData = [
        {
            start:3000,
            end:3500,
            properties: [
                {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity"
                }
            ]
        },
      
        {
            start:3900,
            end:4800,
            properties: [
        
          {
            startValue: 1,
            endValue: 4,
            ease: "easeIn",
            property: "scale"
          },
          {
            startValue: 0,
            endValue: 45,
            property: "rotate"
          },
          {
            startValue: 0,
            endValue: 200,
            property: "translateX"
          },
          {
            startValue: -200,
            endValue: -500,
            property: "translateY"
          }
        ]
      },
      
        {
            start:4500,
            end:5000,
            properties: [
                {
                    startValue: 0,
                    endValue: 600,
                    property: "translateY"
                },
                {
                    startValue: 1,
                    endValue: 0,
                    property: "opacity"
                }
            ]
        }
    ];

    const parallaxDataPlayer = [
        {
            start:4000,
            end:4800,
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

            <Plx parallaxData={parallaxData} style={{opacity: 0, z: 1, backgroundImage: `url(${croppedImg})`, backgroundColor: "#DED6CC" }}>
                <div style={{height: "100vh"}} >
                    <img src={imageURL} alt="Zeitung" className="fixed z-12 top-0 overflow-x-hidden" />
                    
                </div>
                
            </Plx>
            <Plx parallaxData={parallaxDataPlayer} style={{opacity: 0, z:0}}>
                <div className="relative">
                    <img src={croppedImg} alt="Zeitung" className="fixed z-2 top-0 overflow-x-hidden object-cover w-100% h-100%"/>
                    <div className="absolute top-20% z-12">
                        <AudioIndex/>
                    </div>
                </div>
            </Plx>
            
            
        </div>
    );
  };
export { Newspaper };
  