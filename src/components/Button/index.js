import { useContext } from "react";
import { AppContext } from "../../context/app-context";
import "./index.css";

//componente dos botões da aplicação
const Button = ({ text, disabled }) => {
  //valores recuperados do contexto AppContext para condição de desabilizar ou não o botão
  const { correctValue, errorBadGateway } = useContext(AppContext);

  return <button disabled={errorBadGateway || correctValue}>{text}</button>;
};

export default Button;
