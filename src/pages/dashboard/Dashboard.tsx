import Header from '../../components/Header';
import DropZone from '../../components/DropZone';
import Formulario from './components/Formulario';

const Dashboard = () => {
  return (
    <>
      <Header />
      <div>
        <DropZone />
      </div>
      <Formulario />
    </>
  );
};

export default Dashboard;
