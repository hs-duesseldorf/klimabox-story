import { useEffect } from "react";
import { useHistory } from "react-router-dom";

/**
 * This utility scrolls to the top of the window
 * whenever the user clicks on a React Router link.
 */

export const ScrollToTop: React.FC = () => {
  const history = useHistory();

  useEffect(
    () =>
      history.listen(() => {
        window.scrollTo(0, 0);
      }),
    []
  );

  return null;
};
