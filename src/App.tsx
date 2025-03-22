import './styles/App.css';
import Header from './components/Header.tsx';
import AsideNav from './components/AsideNav.tsx';
import DropZone from './components/DropZone.tsx';
import Formulario from './components/Formulario.tsx';

function App() {
  return (
    <div className="principalContainer">
      <aside>
        <AsideNav />
      </aside>
      <main>
        <Header />
        <DropZone />
        <Formulario />
      </main>
    </div>
  );
}

export default App;
