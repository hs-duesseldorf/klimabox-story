export interface TopicSelection {
  topicTitle?: string;
  containerStyle?: {};
  containerClassName?: string;
  selection: Selection[];
}

export interface Selection {
  imagePath: string;
  link?: string;
  style?: {};
  mouseEnterEventHandler?: () => void;
  mouseLeaveEventHandler?: () => void;
  mouseClickEventHandler?: () => void;
}