<<<<<<< HEAD
import BotonMenu from "./components/BotonMenu";
import Buscador from "./components/Buscador";
import Tarjeta from "./components/Tarjeta";
import TablaCuentas from "./components/TablaCuentas";
import Header from "./components/Header";
import Nav from "./pages/login/components/Navbar";
import Alert from "./components/Alert";
import Button from "./components/Button"
import Dropdown from "./components/Dropdown";
import Upload from "./components/Upload";
import Choices from "./components/Choices";
import ReadyAlert from "./components/ReadyAlert";
import Card from "./components/Card";


function App() {
  return (
    <div>
      /* <BotonMenu />
      <Buscador />
      <Tarjeta />
      <TablaCuentas />
      <Header />
      <Nav/>
      <Alert/>
      <Upload/>
      <Button/>
      <Dropdown/>
      <Choices/>
      <ReadyAlert/>
      <Card/>
=======
import './styles/App.css';
import { Outlet } from 'react-router-dom';

import AsideNav from './components/AsideNav.tsx';

function App() {
  return (
    <div className="principalContainer">
      <aside>
        <AsideNav />
      </aside>
      <main>
        <Outlet />
      </main>
>>>>>>> 459061a4e9ac4333c26a39afc5f18bb5dd7c1a39
    </div>
  );
}

export default App;
