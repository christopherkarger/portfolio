import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { ITextReveal } from "./models";

const TextReveal: React.FC<ITextReveal> = ({
  children,
  revealInView,
  revealNow,
  className,
}) => {
  const revealRef = useRef(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !reveal) {
            setReveal(true);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 1.0,
      }
    );

    if (revealInView && revealRef.current) {
      observer.observe(revealRef.current);
    }

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={revealRef}
      className={classNames(`reveal inline-block ${className ?? ""}`, {
        "reveal-now": reveal || revealNow,
        "reveal-now-delayed": revealNow,
      })}
    >
      {children}
    </div>
  );
};

export default TextReveal;
