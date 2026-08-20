
"use client";

import { useState, useRef } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function TextScramble({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const frame = useRef<number | null>(null);

  const start = () => {
    let iteration = 0;

    if (frame.current) cancelAnimationFrame(frame.current);

    const update = () => {
      const output = text
        .split("")
        .map((letter, index) => {
          if (index < iteration) return text[index];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(output);

      if (iteration >= text.length) {
        setDisplay(text);
        return;
      }

      iteration += 1 / 3;
      frame.current = requestAnimationFrame(update);
    };

    update();
  };

  return (
    <h3
      onMouseEnter={start}
      className={className}
      style={{ fontFamily: "inherit" }}
    >
      {display}
    </h3>
  );
}