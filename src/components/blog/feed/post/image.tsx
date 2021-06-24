import React from "react";
import { Link } from "react-router-dom";

import { ParsedPostData } from ".";

export function PostImage({ data }: { data?: ParsedPostData }): JSX.Element {
  const element = (
    <div className="relative pt-2/3 xs:pt-1/2 bg-bg-alt rounded-t-3xl">
      {data && data.featuredImage ? (
        <img
          src={data.featuredImage.url}
          className="responsive-inset object-cover rounded-t-3xl select-none"
          alt={data.featuredImage.alt}
        />
      ) : null}
    </div>
  );

  return data ? (
    <Link to={data.path} className="block">
      {element}
    </Link>
  ) : (
    element
  );
}
