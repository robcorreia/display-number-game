import { useContext, useState } from "react";
import { AppContext } from "../../context/app-context";
import { getValue } from "../../service/service";

import Button from "../Button";
import "./index.css";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const {
    setDisplayText,
    setDisplayValue,
    setErrorBadGateway,
    errorBadGateway,
    setRandomValueApi,
  } = useContext(AppContext);

  const [inputError, setInputError] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const randomValue = await getValue();
    setRandomValueApi(randomValue);
    console.log("valor da api: ", randomValue);
    if (!inputValue) {
      setInputError(true);
    } else {
      setDisplayValue(inputValue);
      setInputError(false);

      if (inputValue === randomValue) {
        setDisplayText("Você acertou!!!!");
        setErrorBadGateway(false);
      } else {
        setErrorBadGateway(false);
        if (inputValue < randomValue) {
          setDisplayText("É menor");
        } else if (inputValue > randomValue) {
          setDisplayText("É maior");
        }
      }
      if (!randomValue) {
        setErrorBadGateway(true);
      }
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite o palpite"
          disabled={errorBadGateway}
        ></input>
        <Button text="Enviar" type="submit" />
        {inputError && (
          <p className="input-error-message">O número é obrigatório.</p>
        )}
      </form>
    </>
  );
};

export default Form;
