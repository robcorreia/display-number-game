import { useContext } from "react";
import { AppContext } from "../../context/app-context";
import "./index.css";

const Button = ({ text, disabled }) => {
  const { inputEmpty, errorBadGateway } = useContext(AppContext);

  return <button disabled={errorBadGateway}>{text}</button>;
};

export default Button;
