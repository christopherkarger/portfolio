import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { ITextReveal } from "./models";

const TextReveal: React.FC<ITextReveal> = ({
  children,
  revealInView,
  revealNow,
}) => {
  const mountedRef = useRef(false);
  const revealRef = useRef(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (!mountedRef.current && revealInView) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !reveal) {
              setReveal(true);
            }
          });
        },
        {
          threshold: 1.0,
        }
      );

      if (revealRef.current) {
        observer.observe(revealRef.current);
      }
    }
    mountedRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={revealRef}
      className={classNames("reveal", {
        "reveal-now": reveal || revealNow,
        "reveal-now-delayed": revealNow,
      })}
    >
      {children}
    </div>
  );
};

export default TextReveal;
