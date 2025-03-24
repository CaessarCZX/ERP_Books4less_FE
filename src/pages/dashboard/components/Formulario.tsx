import '/src/styles/Formulario.css';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
// import ComboBox from './ComboBox';

const Formulario = () => {
  return (
    <>
      <div className="formularioContainer">
        <form action="" className="flex flex-col gap-6.5">
          <fieldset className="md:flex md:flex-wrap gap-x-35">
            <legend>Informacion del Reporte</legend>
            <Input />
            <Input />
          </fieldset>
          <fieldset className="md:flex md:flex-wrap gap-x-35">
            <legend>Informacion del Reporte</legend>
            <Input />
            <Input />
            <Input />
          </fieldset>
          <fieldset className="md:flex md:flex-wrap gap-x-35">
            <legend>Informacion del Reporte</legend>
            <Input />
            <Input />
            <Input />
          </fieldset>
          <fieldset className="md:flex md:flex-wrap gap-x-35">
            <legend>Informacion del Reporte</legend>
            <Input />
            <Input />
          </fieldset>
          <fieldset className="md:flex md:flex-wrap items-center gap-x-35">
            <div>
              <label htmlFor="porcent">Porcentaje de descuento: </label>
              <input
                id="porcent"
                type="text"
                className=" rounded-3 px-2 py-2 mx-2 my-2"
                placeholder="Input"
              />
            </div>
            <div className="flex gap-5">
              <Button className="bg-black">Exportar </Button>
              <Button className="bg-black">Exportar </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Formulario;
