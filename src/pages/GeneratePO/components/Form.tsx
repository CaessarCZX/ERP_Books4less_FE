// import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { Button } from '../../../components/UI/Button';
import InputField from '../../../components/UI/Input/InputField';
import { FormContent } from '../content';

const Form = () => {
  return (
    <>
      <form className="flex flex-col gap-6.5">
        {FormContent.map((formSection) => {
          const sectionName = formSection.sectionName;
          const sectionContent = formSection.content;

          return (
            <fieldset key={formSection.key}>
              <legend className="mb-2 text-xl font-bold text-slate-700 dark:text-white">
                {sectionName}
              </legend>
              <div className="flex w-full flex-col gap-8 sm:flex-row">
                {sectionContent.map((field) => (
                  <div key={field.key} className="flex-1">
                    <InputField
                      label={field.label}
                      type={field.type}
                      id={field.id}
                      name={field.name}
                    />
                  </div>
                ))}
              </div>
            </fieldset>
          );
        })}
        <fieldset className="flex items-center justify-between md:flex-wrap">
          <InputField
            label="Porcentaje de descuento"
            type="number"
            id="por-desc"
            name="por-d"
          />
          <div className="flex gap-5">
            <Button variant="black">Download PDF</Button>
            <Button variant="outlineBlack">Download CSV</Button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default Form;
