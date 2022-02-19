/* eslint-disable react/jsx-no-comment-textnodes */
import { createContext, useState, memo } from "react";

// contexto criado para facilitar a passagem e alteração de estados do aplicação
export const AppContext = createContext(null);
AppContext.displayName = "AppContext";

export const AppContextProvider = memo(({ children }) => {
  const [inputValue, setInputValue] = useState(""); //recebe o valor do input
  const [displayText, setDisplayText] = useState(""); //recebe o texto que será exibido no display
  const [displayValue, setDisplayValue] = useState("0"); //recebe o valor que será exibido no display
  const [errorBadGateway, setErrorBadGateway] = useState(false); // recebe true ou false caso tenha erro na request
  const [randomValueApi, setRandomValueApi] = useState(""); // recebe o valor da request
  const [statusCodeError, setStatusCodeError] = useState(""); // recebe o codigo de erro caso tenha erro na request.
  const [correctValue, setCorrectValue] = useState(false); // recebe true caso o usuário acerte o palpite.

  return (
    //valores compartilhados no contexto
    <AppContext.Provider
      value={{
        inputValue,
        setInputValue,
        displayText,
        setDisplayText,
        displayValue,
        setDisplayValue,
        errorBadGateway,
        setErrorBadGateway,
        randomValueApi,
        setRandomValueApi,
        statusCodeError,
        setStatusCodeError,
        correctValue,
        setCorrectValue,
      }}
    >
      {children}
      {/*prop para renderizar todos components filhos envolvidos no
      contexto*/}
    </AppContext.Provider>
  );
});
