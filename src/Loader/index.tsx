import React, { useEffect } from "react";
import { LoaderArgs } from "./types";
import { Typewriter } from "../Typewriter";

export function Loader({ url }: LoaderArgs): JSX.Element {
  const [text, setText] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
      .then((response) => response.text())
      .then((text) => {
        setLoading(false);
        setText(text);
      })
      .catch(() => {
        setLoading(false);
        setText(null);
      });

    return () => controller.abort();
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!text) {
    return <div>Error loading text</div>;
  }

  return <Typewriter text={text} speed={1000} />;
}
