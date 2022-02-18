import { createContext, useState, memo } from "react";

export const AppContext = createContext(null);
AppContext.displayName = "AppContext";

export const AppContextProvider = memo(({ children }) => {
  const [displayText, setDisplayText] = useState("");
  const [displayValue, setDisplayValue] = useState(0);
  const [errorBadGateway, setErrorBadGateway] = useState(false);
  const [randomValueApi, setRandomValueApi] = useState();

  return (
    <AppContext.Provider
      value={{
        displayText,
        setDisplayText,
        displayValue,
        setDisplayValue,
        errorBadGateway,
        setErrorBadGateway,
        randomValueApi,
        setRandomValueApi,
      }}
    >
      {children}
    </AppContext.Provider>
  );
});
