import './styles/App.css';
import { Outlet } from 'react-router-dom';

// import AsideNav from './components/AsideNav.tsx';

function App() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
