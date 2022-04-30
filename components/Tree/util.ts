import { useState } from "react";

export const useUpdate = () => {
  const [s, SetS] = useState(false);
  return () => SetS((s) => !s);
};
