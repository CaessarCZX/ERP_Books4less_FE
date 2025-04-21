import { useFormContext } from 'react-hook-form';
import InputField from '../../../components/UI/Input/InputField';
import { FC, ReactNode } from 'react';

interface Props {
  label?: string;
  type: string;
  name: string;
  id: string;
  step?: string;
  placeholder?: string;
  icon?: ReactNode;
  autoComplete?: string;
}

const ErrorMsg = ({ msg }: { msg: string }) => (
  <p className="mb-2 text-xs font-light tracking-wide text-red-500">{msg}</p>
);

const InputForm: FC<Props> = ({
  label = '',
  type,
  id,
  name,
  step = '',
  placeholder = '',
  icon = '',
  autoComplete = '',
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={`flex flex-col ${errors && errors[name] ? 'mb-0' : 'mb-6'}`}
    >
      <InputField
        id={id}
        label={label}
        type={type}
        step={step}
        icon={icon}
        placeholder={placeholder}
        autoComplete={autoComplete}
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
