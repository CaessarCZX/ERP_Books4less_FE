// import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { FormEventHandler } from 'react';
import { Button } from '../../../components/UI/Button';
import InputField from '../../../components/UI/Input/InputField';
import { FormContent } from '../content';
import PercentageSelector from './PercentageSelector';

const Form = () => {
  const handleSubmit: FormEventHandler = (e) => e.preventDefault();

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6.5">
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
          <div className="flex flex-col">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Discount Percentage
            </label>
            <PercentageSelector />
          </div>
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
