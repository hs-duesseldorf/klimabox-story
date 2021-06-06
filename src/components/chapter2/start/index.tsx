import React from "react";

import { Background } from "./background";
import { Sunrise } from "./sunrise";
import { Continue } from "./continue";
import { Scene } from "./scene/scene";
import { Text } from './text';

export const StartChapter2: React.FC = () => {
    const [streetHeight, setStreetHeight] = React.useState(1024);
    const [offset, setOffset] = React.useState(0);
    const [clientHeight, setClientHeight] = React.useState(0);
    const [diff, setDiff] = React.useState(0);

    const update = () => {
        window.onscroll = () => setOffset(document.documentElement.scrollTop)
        const height = document.getElementById("Street")?.getBoundingClientRect().height;
        setStreetHeight(height !== undefined ? height : 1024);
        setClientHeight(document.documentElement.clientHeight);
        setDiff((streetHeight - clientHeight) / clientHeight);
    }

    React.useEffect(update, [offset, streetHeight, clientHeight, diff]);

    console.log(offset);

    return (
        <div>
            <div className="text-white relative" style={{ height: "400vh" }}>
                <Background />
                <Sunrise />
                <div className="sticky" style={{ top: `-${diff * 100}%` }}>
                    <Scene scrollStart={streetHeight} />
                </div>
                <Text />
                <Continue />
            </div>
            <div className="text-white relative font-bold text-2xl xs:text-4xl xs:leading-snug 2xl:leading-snug 2xl:text-5xl">
                <p>Wähle das Verkehrsmittel mit dem du am meisten unterwegs bist</p>
            </div>
        </div>
    )
}



