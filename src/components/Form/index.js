import { useContext, useState } from "react";
import { AppContext } from "../../context/app-context";
import { getValue } from "../../service/service";

import Button from "../Button";
import "./index.css";

const Form = () => {
  //valores recuperados do contexto AppContext
  const {
    inputValue,
    setInputValue,
    setDisplayText,
    setDisplayValue,
    setErrorBadGateway,
    errorBadGateway,
    setRandomValueApi,
    setStatusCodeError,
    correctValue,
    setCorrectValue,
  } = useContext(AppContext);

  //estado para validar se renderiza ou não a mensagem de erro
  const [inputError, setInputError] = useState(false);

  // função para guardar no estado InputValue o valor digitado pelo usuário do campo de texto
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // função para submeter os valores do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // previne o comportamento padrão do botão type submit
    let randomValue = await getValue(); // recebe o valor gerado pela request na api.
    setRandomValueApi(randomValue); // seta esse valor recebido da api no estado randomValueApi
    // condição para mostrar ou não a mensagem de erro abaixo do campo de texto, caso o usuário
    // tente enviar sem digitar um palpite.
    if (!inputValue) {
      setInputError(true);
      return null;
    }
    setDisplayValue(inputValue); // guarda o valor digitado no estado displayValue para ser exibido no display.
    setInputError(false);

    // verifica se o estado randomValue é verdadeiro, se for verdadeiro mas não tem valor de retorno,
    // renderiza o componente de LedDisplayError
    if (randomValue && !randomValue.value) {
      setStatusCodeError(randomValue.message);
      console.log(randomValue.message);
      setErrorBadGateway(true);
      setInputValue("");
      return null;
    }
    // verifica se o valor digitado pelo usuário é igual o valor randomico gerado pela api, caso seja verdadeiro
    // renderiza o componente de LedDisplay com a mensagem de sucesso.
    if (inputValue === randomValue.value) {
      setDisplayText("Você acertou!!!!");
      setCorrectValue(true);
      setErrorBadGateway(false);
      return null;
    }
    // verifica se o valor digitado pelo usuário é maior que o valor randomico gerado pela api, caso seja verdadeiro
    // renderiza o componente de LedDisplay com a mensagem que o valor da api  é Menor.
    if (inputValue > randomValue.value) {
      setErrorBadGateway(false);
      setDisplayText("É menor");
      setInputValue("");
      return null;
    }
    // verifica se o valor digitado pelo usuário é menor que o valor randomico gerado pela api, caso seja verdadeiro
    // renderiza o componente de LedDisplay com a mensagem que o valor da api  é maior.
    if (inputValue < randomValue.value) {
      setErrorBadGateway(false);
      setDisplayText("É maior");
      setInputValue("");
      return null;
    }
  };

  //renderiza o formulário
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite o palpite"
          disabled={errorBadGateway || correctValue}
        />
        <Button text="Enviar" type="submit" />
        {/* caso o inputError seja verdadeiro, renderiza a mensagem de erro */}
        {inputError && (
          <p className="input-error-message">O número é obrigatório.</p>
        )}
      </form>
    </>
  );
};

export default Form;
