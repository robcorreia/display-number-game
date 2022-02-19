/* eslint-disable react/jsx-no-comment-textnodes */
import "./App.css";
import Display from "./components/Display";
import Form from "./components/Form";
import { AppContextProvider } from "./context/app-context";

// App Componente principal da aplicação
// AppContextProvider é o contexto que contém todos estados compartilhados na aplicação
// Display contém a "tela" com o resultado do palpite
//Form contém o campo de texto e botão para o palpite
function App() {
  return (
    <div className="app">
      <AppContextProvider>
        <div className="app-content">
          <h1>Qual é o número?</h1>
          <Display />
          <Form />
        </div>
      </AppContextProvider>
    </div>
  );
}

export default App;
