import '../styles/Formulario.css';
import Input from './Input';

import ComboBox from './ComboBox';

const Formulario = () => {
  return (
    <>
      <div className="formularioContainer">
        <form action="" className="flex   gap-6.5 flex-col">
          <fieldset className="flex   gap-40 m-3">
            <legend>Información del Reporte</legend>
            <Input />
            <Input />
          </fieldset>
          <fieldset className="flex gap-40">
            <legend>Información del vendedor</legend>
            <ComboBox />
            <Input />
            <Input />
          </fieldset>
          <fieldset className="flex gap-40">
            <legend>Información del envio</legend>
            <ComboBox />
            <Input />
            <Input />
          </fieldset>
          <fieldset className="flex gap-40">
            <legend>Información Empresarial</legend>
            <Input />
            <Input />
          </fieldset>
          <fieldset className="botonesContainer  flex justify-between items-center ">
            <Input />
            <div className="flex gap-10">
              <button className="botonPdf">Exportar PDF</button>
              <button className="botonCsv">Exportar CSV</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Formulario;
