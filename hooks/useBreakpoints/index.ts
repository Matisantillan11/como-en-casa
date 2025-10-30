import { useMediaQuery } from "usehooks-ts";
import { MEDIA_QUERIES } from "./constants";

export const useBreakpoints = () => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.MOBILE);
  const isTablet = useMediaQuery(MEDIA_QUERIES.TABLET);
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};
