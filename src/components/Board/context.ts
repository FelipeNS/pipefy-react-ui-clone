import { createContext } from "react";

import { IList } from "../List";

export default createContext({
  lists: <IList[]>[],
  move: (fromList: number, toList: number, from: number, to: number) => {},
});
