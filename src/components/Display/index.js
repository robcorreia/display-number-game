import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/app-context";
import LedDisplayError from "../LedDisplayError";

import "./index.css";

const Display = () => {
  const {
    displayText,
    setDisplayText,
    displayValue,
    setDisplayValue,
    errorBadGateway,
    setErrorBadGateway,
    randomValueApi,
  } = useContext(AppContext);

  const handleNewMatch = () => {
    console.log("nova partida");
    setErrorBadGateway(false);
    setDisplayValue(0);
    setDisplayText("");
  };
  return (
    <div className="display">
      {errorBadGateway && (
        <div className="error-content">
          <p className="text-error">Erro</p> <LedDisplayError />
          <button onClick={handleNewMatch} className="new-match">
            Nova partida
          </button>
        </div>
      )}

      {/* <ReactLEDDisplay
        displayValue="4"
        width="32"
        ledSize="2"
        foregroundCol="lightgreen"
        backgroundCol="darkgreen"
        skew="-7"
      /> */}
      <p
        style={{
          color: `${displayValue !== randomValueApi ? "#FF6600" : "#32BF00"}`,
        }}
      >
        {displayText && !errorBadGateway && displayText}
      </p>
      {!errorBadGateway && displayValue}
    </div>
  );
};

export default Display;
