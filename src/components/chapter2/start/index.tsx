import React from "react";

import { Background } from "./background";
import { Sunrise } from "./sunrise";
import { Continue } from "./continue";
import { Scene } from "./scene/scene";
import { Text } from './text';
import { ScrollData } from './interface/Chapter2ScrollData';

export const StartChapter2: React.FC = () => {
    const [scrollData, SetScrolldata] = React.useState<ScrollData>({ 
        streetHeight : 1024,
        clientHeight : 0,
        clientWidth: 0,
        diffClientAndStreetHeight : 0,
    });
    const [offset, setOffset] = React.useState(0);

    const update = () => {
        window.onscroll = () => setOffset(document.documentElement.scrollTop)
        const streetHeight = document.getElementById("Street")?.getBoundingClientRect().height as number;
        const clientHeight = document.documentElement.clientHeight;
        SetScrolldata({
            streetHeight: streetHeight,
            clientHeight: clientHeight,
            clientWidth: document.documentElement.clientWidth,
            diffClientAndStreetHeight: (streetHeight - clientHeight) / clientHeight,
        })
    }

    React.useEffect(update, [offset]);

    return (
        <div>
            <div className="text-white relative" style={{ height: "300vh" }}>
                <Background />
                <Sunrise />
                <div className="sticky" style={{ top: `-${scrollData.diffClientAndStreetHeight * 100}%` }}>
                    <Scene scrollData={scrollData} />
                </div>
                <Text />
                <Continue />
            </div>
            <div id="chapter2Choice" className="text-white relative font-bold text-2xl xs:text-4xl xs:leading-snug 2xl:leading-snug 2xl:text-5xl">
                <p>Wähle das Verkehrsmittel mit dem du am meisten unterwegs bist</p>
            </div>
        </div>
    )
}



