import React from "react";
import { Link } from "react-router-dom";

import carrotsImage from "./carrots.png";
import trainImage from "./train.png";
import codeImage from "./code.png";
import clothsImage from "./cloths.png";
import stoveImage from "./stove.png";

const roundedClass = "rounded-3xl";

type ChapterProps = {
  id: number;
  title: string;
  imageSrc: string | null;
  unavailable?: boolean;
};

const Chapter: React.FC<ChapterProps> = ({ id, title, imageSrc }) => (
  <>
    <div
      className={`pointer-events-none select-none mb-4 relative pt-1/2 xs:pt-2/3 bg-gray-200 shadow-lg ${roundedClass}`}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={`Chapter ${id}`}
          className={`responsive-inset object-cover ${roundedClass}`}
        />
      )}
      <div
        className="responsive-inset flex justify-center items-center text-7xl text-white font-bold transform transition group-hover:scale-125"
        style={{ textShadow: "0 3px 5px rgba(0, 0, 0, 0.5)" }}
      >
        {id}
      </div>
    </div>
    <div className="pointer-events-none lg:text-lg text-center leading-snug group-hover:underline">
      {title}
    </div>
  </>
);

const chapterProps: Omit<ChapterProps, "id">[] = [
  { title: "Vom Esstisch in die Arktis", imageSrc: carrotsImage },
  { title: "Mobilität", imageSrc: trainImage },
  {
    title: "Big Tech ohne großen Fußabdruck",
    imageSrc: codeImage,
    unavailable: true,
  },
  { title: "Nachhaltig shoppen", imageSrc: clothsImage, unavailable: true },
  {
    title: "Wie unsere Heizkörper das Klima erwärmen",
    imageSrc: stoveImage,
    unavailable: true,
  },
];

export const ChapterOverview: React.FC = () => (
  <div className="center-box 2xl:max-w-layout-max my-20 2xl:my-24">
    <h2 className="text-3xl mb-8 lg:mb-10">Kapitelübersicht</h2>
    <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 sm:grid-cols-3 2xl:grid-cols-5 xs:gap-x-6 md:gap-x-8 md:gap-y-12 lg:gap-12">
      {chapterProps.map((props, i) => {
        const id = i + 1;

        return props.unavailable ? (
          <div className="opacity-50" key={i}>
            <Chapter {...props} id={id} />
          </div>
        ) : (
          <Link to={`/chapters/${id}`} className="group block" key={i}>
            <Chapter {...props} id={id} />
          </Link>
        );
      })}
    </div>
  </div>
);
