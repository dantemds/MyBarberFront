import { ServicoProvider } from "./Contexts/ServicoContext";
import Rotas from "./Routes/routes";

function App() {
  return (
    <ServicoProvider>
      <Rotas />
    </ServicoProvider>
  );
}

export default App;
