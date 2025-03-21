import '../styles/Formulario.css';
import Input from './Input';

const sections = [
  {
    title: 'Información del Reporte',
    inputs: [
      'Información de la orden de compra',
      'Fecha de la orden de compra',
    ],
  },
  {
    title: 'Información del Vendedor',
    inputs: [
      'Nombre del vendedor',
      'P.O del vendedor',
      'Dirección del vendedor',
    ],
  },
  {
    title: 'Información del Envío',
    inputs: [
      'Nombre de la empresa',
      'Dirección de la empresa',
      'Datos de la empresa',
    ],
  },
  {
    title: 'Información Empresarial',
    inputs: ['Metodo del envio', 'Terminos de pago'],
  },
];

const Formulario = () => {
  return (
    <>
      <div className="formularioContainer">
        <form action="">
          {sections.map((section, index) => (
            <fieldset key={index} className="">
              <legend className="font-semibold text-lg">{section.title}</legend>
              <div className="flex gap-4">
                {section.inputs.map((label, i) => (
                  <Input key={i} label={label} />
                ))}
              </div>
            </fieldset>
          ))}
        </form>
      </div>
    </>
  );
};

export default Formulario;
