"use client";

import buttonHelper from "@/utils/buttonHelper";
import { useState } from "react";

export default function CustomButton() {
  const [buttonValue, setButtonValue] = useState(2);

  return (
    <button
      data-testid="custom-button"
      onClick={() => buttonHelper(buttonValue, setButtonValue)}
    >
      {buttonValue}
    </button>
  );
}
