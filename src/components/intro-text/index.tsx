import { IntroTextData } from "./interfaces/interface";

export const IntroText: React.FC<{ introTextData: IntroTextData }> = ({
                                                                        introTextData
                                                                      }) => {
  return (
    <div className={`${introTextData.containerStyle}`}>
      <div className={`${introTextData.titleStyle}`}>
        {introTextData.title}
      </div>
      <div className={` ${introTextData.textStyle}`}>
        {introTextData.text}
      </div>
    </div>
  );
};
