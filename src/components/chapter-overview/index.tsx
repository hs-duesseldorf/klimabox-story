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
  slug?: string;
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
  {
    title: "Vom Esstisch in die Arktis",
    slug: "vom-esstisch-in-die-arktis",
    imageSrc: carrotsImage,
  },
  { title: "Mobilität", imageSrc: trainImage, slug: "mobilitaet" },
  {
    title: "Big Tech ohne großen Fußabdruck",
    imageSrc: codeImage,
  },
  { title: "Nachhaltig shoppen", imageSrc: clothsImage },
  {
    title: "Wie unsere Heizkörper das Klima erwärmen",
    imageSrc: stoveImage,
  },
];

export const ChapterOverview: React.FC = () => (
  <div className="center-box my-20 2xl:my-24">
    <h2 className="text-3xl mb-8 lg:mb-10">Kapitelübersicht</h2>
    <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 sm:grid-cols-3 2xl:grid-cols-5 xs:gap-x-6 md:gap-x-8 md:gap-y-12 lg:gap-12">
      {chapterProps.map((props, i) => {
        const id = i + 1;

        return props.slug ? (
          <Link to={`/${props.slug}`} className="group block" key={i}>
            <Chapter {...props} id={id} />
          </Link>
        ) : (
          <div className="opacity-50" key={i}>
            <Chapter {...props} id={id} />
          </div>
        );
      })}
    </div>
  </div>
);
