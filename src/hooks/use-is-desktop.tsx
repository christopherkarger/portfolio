import { useEffect, useState } from "react";

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth > 1023) {
      setIsDesktop(true);
    }
  }, []);

  return isDesktop;
};
