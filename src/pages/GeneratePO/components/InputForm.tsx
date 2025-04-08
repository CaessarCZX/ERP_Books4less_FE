import { useFormContext } from 'react-hook-form';
import InputField from '../../../components/UI/Input/InputField';
import { FC } from 'react';

interface Props {
  label: string;
  type: string;
  name: string;
  id: string;
  step?: string;
}

const ErrorMsg = ({ msg }: { msg: string }) => (
  <p className="font-light tracking-wide text-red-500">{msg}</p>
);

const InputForm: FC<Props> = ({ label, type, id, name, step = '' }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col">
      <InputField
        id={id}
        label={label}
        type={type}
        step={step}
        validationState={errors && !!errors[name] ? 'error' : 'default'}
        {...register(name)}
      />
      {errors && errors[name] && (
        <ErrorMsg msg={errors[name].message as string} />
      )}
    </div>
  );
};
export default InputForm;
