import React from "react";
import {Link} from "react-router-dom"

type sideNavProps = {
    chapter: number,
    hasDarkBackground?: boolean,
}
export class SideNav extends React.Component<sideNavProps>{
    
    render() {
        var color = this.props.hasDarkBackground? "#FFF": "#555";
        return (
            <div className="fixed top-8 right-0 hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 300 600">
                    <g className="right-0 hover:opacity-90" id="nav" data-name="nav" opacity="0.7">
                    <g id="graph" data-name="graph">
                        <line id="Linie_1-2" data-name="Linie 1-2" x1="300" y1="75"  x2="300" y2="145" stroke={this.props.chapter < 2? color : "#197eb7"} strokeWidth="6"/>
                        <line id="Linie_2-3" data-name="Linie 2-3" x1="300" y1="145" x2="300" y2="215" stroke={this.props.chapter < 3? color : "#197eb7"} strokeWidth="6"/>
                        <line id="Linie_3-4" data-name="Linie 3-4" x1="300" y1="215" x2="300" y2="285" stroke={this.props.chapter < 4? color : "#197eb7"} strokeWidth="6"/>
                        <line id="Linie_4-5" data-name="Linie 4-5" x1="300" y1="285" x2="300" y2="355" stroke={this.props.chapter < 5? color : "#197eb7"} strokeWidth="6"/>
                        <g id="chapter_1" data-name="chapter_1" className="group"> 
                            <Link to="/vom-esstisch-in-die-arktis">
                                <circle id="circle_1" data-name="circle_1" cx="300" cy="75" r="15" fill={this.props.chapter < 1? color : "#197eb7"}/>
                                <text id="text_1" data-name="text_1" className="transform group-hover:-translate-x-90% transition duration-500 ease-in-out" dx="270" dy="82.5" fill={color} fontSize="20" fontFamily="ArialMT, Arial" textAnchor="end">1</text>
                                <text className="transform group-hover:-translate-x-2/3 group-hover:opacity-100 transition duration-500 ease-in-out" dx="460" dy="82.5" opacity="0" fill={color} fontSize="20" fontFamily="ArialMT, Arial" textAnchor="end">Vom Esstisch in die Arktis</text>
                            </Link>
                        </g>
                        <g id="chapter_2" data-name="chapter_2" className="group"> 
                            <Link to="/mobilitaet">
                                <circle id="circle_2" data-name="circle_2" cx="300" cy="145" r="15" fill={this.props.chapter < 2? color : "#197eb7"}/>
                                <text id="text_2" data-name="text_2" className="transform group-hover:-translate-x-40% transition duration-500 ease-in-out" dx="270" dy="152.5" fill={color} fontSize="20" fontFamily="ArialMT, Arial" textAnchor="end">2</text>
                                <text className="transform group-hover:-translate-x-2/3 group-hover:opacity-100 transition duration-500 ease-in-out" dx="460" dy="152.5" opacity="0" fill={color} fontSize="20" fontFamily="ArialMT, Arial" textAnchor="end">Mobilität</text>
                            </Link>
                        </g> 
                        <g id="chapter_3" data-name="chapter_3" className="group"> 
                                <circle id="circle_3" data-name="circle_3" cx="300" cy="215" r="15" fill={this.props.chapter < 3? color : "#197eb7"}/>
                                <text id="text_3" data-name="text_3" className="transform group-hover:-translate-x-95% transition duration-500 ease-in-out" dx="270" dy="222.5" fill={color} fontSize="20" fontFamily="ArialMT, Arial" textAnchor="end">3</text>
                                <text className="transform group-hover:-translate-x-2/3 group-hover:opacity-100 transition duration-500 ease-in-out" dx="460" dy="222.5" opacity="0" fill={color} fontSize="20" fontFamily="ArialMT, Arial" textAnchor="end">Big Tech ohne Fußabdruck</text>
                        </g> 
                        <g id="chapter_4" data-name="chapter_4" className="group"> 
                                <circle id="circle_4" data-name="circle_4" cx="300" cy="285" r="15" fill={this.props.chapter < 4? color : "#197eb7"}/>
                                <text id="text_4" data-name="text_4" className="transform group-hover:-translate-x-3/4 transition duration-500 ease-in-out" dx="270" dy="292.5" fill={color} fontSize="20" fontFamily="ArialMT, Arial" textAnchor="end">4</text>
                                <text className="transform group-hover:-translate-x-2/3 group-hover:opacity-100 transition duration-500 ease-in-out" dx="460" dy="292.5" opacity="0" fill={color} fontSize="20" fontFamily="ArialMT, Arial" textAnchor="end">Nachhaltig shoppen</text>
                        </g> 
                        <g id="chapter_5" data-name="chapter_5" className="group"> 
                                <circle id="circle_5" data-name="circle_5" cx="300" cy="355" r="15" fill={this.props.chapter < 5? color : "#197eb7"}/>
                                <text id="text_5" data-name="text_5" className="transform group-hover:-translate-x-full transition duration-500 ease-in-out" dx="270" dy="362.5" fill={color} fontSize="20" fontFamily="ArialMT, Arial" textAnchor="end">5</text>
                                <text className="transform group-hover:-translate-x-2/3 group-hover:opacity-100 transition duration-500 ease-in-out" dx="460" dy="362.5" opacity="0" fill={color} fontSize="19" fontFamily="ArialMT, Arial" textAnchor="end">Wie Heizen das Klima erwärmt</text>
                        </g> 
                    </g>

                    </g>
                    <g id="icons" data-name="icons">
                    <path className="hover:opacity-100" id="Icon_material-subtitles" data-name="Icon material-subtitles" d="M30,6H6A3.009,3.009,0,0,0,3,9V27a3.009,3.009,0,0,0,3,3H30a3.009,3.009,0,0,0,3-3V9A3.009,3.009,0,0,0,30,6ZM6,18h6v3H6Zm15,9H6V24H21Zm9,0H24V24h6Zm0-6H15V18H30Z" transform="translate(282.5, 390)" fill={color} opacity="0.7"/>
                    <path className="hover:opacity-100" id="Icon_ionic-md-volume-high" data-name="Icon ionic-md-volume-high" d="M4.5,13.5v9h6L18,30.343V5.657L10.5,13.5ZM24.75,18A7.009,7.009,0,0,0,21,11.752v12.42A6.8,6.8,0,0,0,24.75,18ZM21,4.5V7.663A10.75,10.75,0,0,1,28.5,18,10.749,10.749,0,0,1,21,28.337V31.5A13.807,13.807,0,0,0,31.5,18,13.807,13.807,0,0,0,21,4.5Z" transform="translate(282.8, 440)" fill={color} opacity="0.7"/>
                    <path className="hover:opacity-100" id="Icon_awesome-music" data-name="Icon awesome-music" d="M32,2A2,2,0,0,0,29.4.094L9.4,6A2,2,0,0,0,8,7.906V24.245A8.646,8.646,0,0,0,6,24c-3.314,0-6,1.791-6,4s2.686,4,6,4,6-1.791,6-4V13.394L28,8.706V20.245A8.646,8.646,0,0,0,26,20c-3.314,0-6,1.791-6,4s2.686,4,6,4,6-1.791,6-4V2Z" transform="translate(284.2, 490)" fill={color} opacity="0.7"/>
                    </g>
                </svg>

            </div>
        );
    }
}