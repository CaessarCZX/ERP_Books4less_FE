import {
  FormContent,
  FormContentPercentage,
  FormFieldsDefaultValues,
} from '../content';
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../schemas/POG-form-schema';
import InputForm from './InputForm';
import { useGeneratePO } from '../hooks/useGeneratePO';
import { Button } from '../../../components/UI/Button';
import { useFiles } from '../../../components/DropZone/hooks/useFiles';
import {
  PurchaseOrderFormFields,
  PurchaseOrderGenerated,
} from '../Models/generate-po-model';
import { FilesValidatorService } from '../services/files-validator-service';
import { useState } from 'react';
import SuccessModal from './SuccessModal';
import { useStateModal } from '../../../hooks/useStateModal';
import DownloadFilesZone from './DownloadFilesZone';

const Form = () => {
  const [purchaseOrder, setPurchaseOrder] = useState<PurchaseOrderGenerated>();
  const { modalRef, openModal, closeModal } = useStateModal();
  const { generatePO } = useGeneratePO();
  const { files } = useFiles();
  const methods = useForm({
    defaultValues: FormFieldsDefaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<PurchaseOrderFormFields> = async (data) => {
    const isValidFile = new FilesValidatorService(files).validateFiles();
    if (!isValidFile) return;
    const result = await generatePO({ data, files, userId: '12' });
    if (!result) return;
    setPurchaseOrder(result);
    console.log(purchaseOrder); // debug
    openModal();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-6.5"
        method="post"
      >
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
                    <InputForm
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
          {(() => {
            const { label, type, step, id, name } = FormContentPercentage;
            return (
              <InputForm
                label={label}
                type={type}
                step={step}
                id={id}
                name={name}
              />
            );
          })()}
          <Button type="submit" variant="black">
            Generate Purchase Order
          </Button>
        </fieldset>
      </form>
      <SuccessModal
        showModal={modalRef}
        closeModal={closeModal}
        title="Purchase Order Generated Successfully"
        content={<DownloadFilesZone purchaseOrderInfo={purchaseOrder} />}
      />
    </FormProvider>
  );
};

export default Form;
