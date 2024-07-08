import React from "react";
export default function numberExponential(
  v: number,
  func: React.Dispatch<number>
) {
  return { call: func(Math.pow(v, v + 1)) };
}
