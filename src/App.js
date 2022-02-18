import "./App.css";
import Display from "./components/Display";
import Form from "./components/Form";
import { AppContextProvider } from "./context/app-context";

function App() {
  return (
    <div className="App">
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
