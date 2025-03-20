import BotonMenu from "./components/BotonMenu";
import Buscador from "./components/Buscador";
import Tarjeta from "./components/Tarjeta";
import TablaCuentas from "./components/TablaCuentas";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Alert from "./components/Alert";
import Button from "./components/Button"
import Dropdown from "./components/Dropdown";
import Upload from "./components/Upload";
import Choices from "./components/Choices";
import ReadyAlert from "./components/ReadyAlert";

function App() {
  return (
    <div>
      <BotonMenu />
      <Buscador />
      <Tarjeta />
      <TablaCuentas />
      <Header/>
      <Nav/>
      <Alert/>
      <Upload/>
      <Button/>
      <Dropdown/>
      <Choices/>
      <ReadyAlert/>
    </div>
  );
}

export default App;
