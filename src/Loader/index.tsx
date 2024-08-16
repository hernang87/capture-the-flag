import React, { useEffect } from "react";
import { LoaderArgs } from "./types";

export function Loader({ url }: LoaderArgs): JSX.Element {
  const [text, setText] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  // UseMount
  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
      .then((response) => response.text())
      .then((text) => {
        setText(text);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{text}</div>;
}
