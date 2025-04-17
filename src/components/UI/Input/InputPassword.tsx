import { useFormContext } from 'react-hook-form';
import InputField from '../../../components/UI/Input/InputField';
import { FC, ReactNode, useState } from 'react';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';

interface Props {
  label?: string;
  name: string;
  id: string;
  step?: string;
  placeholder?: string;
  icon?: ReactNode;
}

const ErrorMsg = ({ msg }: { msg: string }) => (
  <p className="m-0 text-xs font-light tracking-wide text-red-500">{msg}</p>
);

const InputPasswordForm: FC<Props> = ({
  label = '',
  id,
  name,
  step = '',
  placeholder = '',
  icon = '',
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div
        className={`relative flex flex-col ${errors && errors[name] ? 'mb-0' : 'mb-6'}`}
      >
        <InputField
          id={id}
          label={label}
          type={showPassword ? 'text' : 'password'}
          step={step}
          icon={icon}
          placeholder={placeholder}
          validationState={errors && !!errors[name] ? 'error' : 'default'}
          {...register(name)}
        />
        <div
          className="absolute inset-y-0 right-3 flex cursor-pointer items-center"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <RiEyeLine className="text-gray-600 dark:text-gray-300" />
          ) : (
            <RiEyeCloseLine className="text-gray-600 dark:text-gray-300" />
          )}
        </div>
      </div>
      {errors && errors[name] && (
        <ErrorMsg msg={errors[name].message as string} />
      )}
    </>
  );
};
export default InputPasswordForm;
