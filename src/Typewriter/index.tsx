import React from "react";
import { TypewriterArgs } from "./types";

export function Typewriter({ speed, text }: TypewriterArgs): JSX.Element {
  const [placeholder, setPlaceholder] = React.useState([text[0]]);

  const index = React.useRef(0);

  const tick = React.useCallback(() => {
    index.current++;
    setPlaceholder((prev) => [...prev, text[index.current]]);
  }, [text]);

  React.useEffect(() => {
    if (index.current < text.length - 1) {
      let addChar = setInterval(tick, speed);
      return () => clearInterval(addChar);
    }
  }, [speed, text, tick]);

  return (
    <ul>
      {placeholder.map((l, i) => (
        <li key={`${l}-${i}`}>{l}</li>
      ))}
    </ul>
  );
}
