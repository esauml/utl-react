import { Header } from "./components";
import { Contactos } from "./pages";

export interface AppInterface { }

const App = ({ }: AppInterface) => {
  return (
    <div>
      <Header />
      <Contactos />
    </div>
  )
};

export default App;
