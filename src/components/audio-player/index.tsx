import React from "react";
import womanPortrait from "./kapitel1_testimonial-1.png";
type AudioProps = {
    id: number,
    title: string,
    description: string,
    text: string,
    imgSrc: string | null,
    audioSrc: string,
    isOpen: boolean
}
const audioProps: Omit<AudioProps, "id">[] = [
    {
        title: "Erika Musterfrau",
        description: "Benötigen wir mehr Sicherheit auf Düsseldorfs Straßen?",
        text: "Hier könnte ein kurzer Einleitungstext stehen, der erklärt, worum es geht und Lust macht, sich das Interview anzuhören.",
        imgSrc: womanPortrait,
        audioSrc: "", 
        isOpen: true
    },
    {
        title: "Vorname Nachname",
        description: "Thema, Artikeltitel",
        text: "Hier könnte ein kurzer Einleitungstext stehen, der erklärt, worum es geht und Lust macht, sich das Interview anzuhören.",
        imgSrc: womanPortrait,
        audioSrc: "",
        isOpen: false
    },
    {
        title: "Vorname Nachname",
        description: "Thema, Artikeltitel",
        text: "Hier könnte ein kurzer Einleitungstext stehen, der erklärt, worum es geht und Lust macht, sich das Interview anzuhören.",
        imgSrc: womanPortrait,
        audioSrc: "",
        isOpen: false
    }
];
export class AudioPlayer extends React.Component<AudioProps, any> {
    constructor(props){
        super(props);
        this.state = {tabOpened: 0};

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(newState: number) {
        this.setState(()=> ({
          tabOpened: newState
        }));
      }
    render() {
        const tab = this.state.tabOpened;
        return(
            <div className="container mx-auto px-32 bg-gray-400">
                {audioProps.map((i, id) => {

                    return (
                        <div className="rounded-xl overflow-hidden bg-white m-2" key={id}>
                            <div id="title-bar" className="flex flex-row flex-auto p-1" onClick={() => this.handleClick(id)}>
                                <div className="px-6 p-1 font-bold"> {i.title} </div>
                                <div className="p-1"> {i.description} </div>
                            </div>
                            
                            {id === tab &&
                                <AudioFileInfo {...i} id={id} ></AudioFileInfo>
                            }
                        </div>
                        
                    );
                })}
                
            </div>
         )
    }
}

class AudioFileInfo extends React.Component<AudioProps> {

    render() {
        return(
            <div className=" bg-em1-extralight h-17 relative ">
                <div className="flex">
                    {this.props.imgSrc && 
                        <img className="w-1/2 object-cover" id="audio-player-image" src={this.props.imgSrc} alt={womanPortrait} /> 
                    }
                    <div className="flex items-center w-1/2 container mx-auto px-12 -mt-12">{this.props.text}</div>
                    <div className="flex items-center absolute justify-between bottom-0 mx-auto py-2 bg-white bg-opacity-60 right-0 left-0">
                        
                        <svg className="mx-4" id="audio-button" width="40" height="40" viewBox="0 0 40 40">
                            <circle id="play-button" cx="20" cy="20" r="20" fill="#fff"/>
                            <path id="Icon_awesome-play" data-name="Icon awesome-play" d="M20.051,9.921,3.421.306A2.256,2.256,0,0,0,0,2.214V21.44a2.267,2.267,0,0,0,3.421,1.908l16.631-9.611A2.191,2.191,0,0,0,20.051,9.921Z" transform="translate(14.5 12.5) scale(0.65 0.65)" fill="#197eb7"/>
                        </svg>
                        <div className="mx-2 -t-2">
                            <svg width="660" height="32" viewBox="0 0 660 32">
                                <path d="M 10 15 L 625 15" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="5"/>
                                <circle cx="15" cy="15" r="10" fill="#e78182"/>
                                <circle cx="625" cy="15" r="10" fill="#fff"/>
                            </svg>
                            <div className="flex justify-between">
                                <p className="text-xs">
                                    00:00
                                </p>
                                <p className="text-xs ml-4 mr-5">
                                    15:03
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        )
    }
}