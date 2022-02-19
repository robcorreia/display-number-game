/* eslint-disable react/jsx-no-comment-textnodes */
import { useContext } from "react";
import { AppContext } from "../../context/app-context";
import LedDisplayError from "../LedDisplayError";
import LedDisplay from "../LedDisplay";

import "./index.css";

const Display = () => {
  // uso todos valores do contexto necessário para esse componente.
  const {
    setInputValue,
    displayText,
    setDisplayText,
    displayValue,
    setDisplayValue,
    errorBadGateway,
    setErrorBadGateway,
    randomValueApi,
    correctValue,
    setCorrectValue,
  } = useContext(AppContext);

  // pego o valor displayValue e quebro ele em um array de caracteres chamado currentValue.
  const currentValue = displayValue.split("");

  // função criada para resetar a "partida" com o "botão nova partida".
  const handleNewMatch = () => {
    setInputValue("");
    setCorrectValue(false);
    setErrorBadGateway(false);
    setDisplayValue("0");
    setDisplayText("");
  };
  return (
    <div className="display">
      {/* condição para renderizar ou não o component LedDisplayError*/}
      {errorBadGateway && (
        <div className="error-content">
          <p className="text-error">Erro</p> <LedDisplayError />
          <button onClick={handleNewMatch} className="new-match">
            Nova partida
          </button>
        </div>
      )}
      <p
        style={{
          color: `${
            displayValue !== randomValueApi.value ? "#FF6600" : "#32BF00" //condição para alterar a cor do texto
          }`,
        }}
      >
        {displayText && !errorBadGateway && displayText}
      </p>
      {/* condição para renderizar ou não o component LedDisplay*/}
      {/*percorro todo array de currentValue, item por item para renderizar o component LedDisplay*/}
      {!errorBadGateway &&
        currentValue.map((char, key) => {
          return (
            <LedDisplay
              key={key}
              displayValue={char}
              width="60"
              ledSize="11"
              foregroundCol="#DDDDDD"
              backgroundCol={`${
                displayValue !== randomValueApi.value ? "#262A34" : "#32BF00"
              }`}
              skew="-1"
            />
          );
        })}
      <div>
        {/*condição para renderizar o botão de nova partida quando o usuário
        tiver acertado o valor do palpite.*/}
        {correctValue && (
          <button onClick={handleNewMatch} className="new-match">
            Nova partida
          </button>
        )}
      </div>
    </div>
  );
};

export default Display;
