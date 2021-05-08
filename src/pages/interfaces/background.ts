export interface BackgroundProps{
    backgroundFunction: (style: BackgroundStyle) => void;
  }
  
export interface BackgroundStyle{
    backgroundImage: string;
    height: string,
    Zindex: string,
    backgroundPosition: string,
    backgroundClip: string,
  }