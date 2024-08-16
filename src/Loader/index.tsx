import React from "react";
import { LoaderArgs } from "./types";

export function Loader({ url }: LoaderArgs): JSX.Element {
  console.log({ url });
  return <div>Loading...</div>;
}
