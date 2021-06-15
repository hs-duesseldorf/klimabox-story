export interface TopicSelection{
    topicTitle?: string;
    containerStyle?: {};
    selection: Selection[];
}

export interface Selection{
    imagePath: string;
    link: string; 
    style?: {};
    mouseEnterEventHandler?: () => void;
    mouseLeaveEventHandler?: () => void;
    mouseClickEventHandler?: () => void;
}