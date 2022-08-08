import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { IReveal } from "./models";

const Reveal: React.FC<IReveal> = ({ children, delay }) => {
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

    if (revealRef.current) {
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
      className={classNames("fade-in", {
        "fade-in-now": reveal,
      })}
      style={{
        animationDelay: delay ? `${delay / 1000}s` : "0s",
      }}
    >
      {children}
    </div>
  );
};
export default Reveal;
