import React from "react";

import { useMediaURLs } from "../wp";

export const Media: React.FC<{
  id: number;
  className?: string;
  alt?: string;
}> = ({ id, className, alt }) => {
  const { isLoading, error, data } = useMediaURLs(id);

  if (isLoading || error || !data) return null;

  return (
    <img src={data.lg} draggable={false} className={className} alt={alt} />
  );
};
