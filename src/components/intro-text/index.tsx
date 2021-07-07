import { IntroTextData } from "./interfaces/interface";

export const IntroText: React.FC<{ introTextData: IntroTextData }> = ({
  introTextData,
}) => {
  return (
    <div className="container" style={introTextData.containerStyle}>
      <div className="title" style={introTextData.titleStyle}>
        {introTextData.title}
      </div>
      <div className="text" style={introTextData.textStyle}>
        {introTextData.text}
      </div>
    </div>
  );
};
