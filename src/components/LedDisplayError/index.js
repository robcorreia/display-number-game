import { useContext } from "react";
import { AppContext } from "../../context/app-context";
import LedDisplay from "../LedDisplay";

// LedDisplayError componente para renderizar o resultado de erro da request no display
const LedDisplayError = () => {
  const { statusCodeError } = useContext(AppContext);

  // pego o valor de statusCodeError e quebro ele em um array de caracteres chamado error.
  const error = statusCodeError.split("");
  return (
    <>
      {/*percorro todo array de error, item por item para renderizar o component LedDisplay*/}
      {error.map((char, key) => {
        return (
          <LedDisplay
            key={key}
            displayValue={char}
            width="60"
            ledSize="11"
            foregroundCol="#DDDDDD"
            backgroundCol="#CC3300"
            skew="-1"
          />
        );
      })}
    </>
  );
};

export default LedDisplayError;
