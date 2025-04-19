import { useForm, SubmitHandler } from 'react-hook-form';
import InputBase from '../../components/UI/Input/Input';
import { IoSearch } from 'react-icons/io5';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schemas/search-bar-model';
import options from './content/form-option-values';
import FormDefaultValues from './content/form-fields-default';
import { FC, useRef, useEffect, useCallback } from 'react'; // 👈 aquí está el import que te faltaba
import useFocusOutline from '../../hooks/useFocusOutline';
import { ISearchFiles } from './models/search-files-model';
import { IGetFiles } from '../../models/get-files-model';

interface Props {
  setInput: (input: IGetFiles) => void;
}

const SearchBar: FC<Props> = ({ setInput }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isFocused = useFocusOutline<HTMLDivElement>(ref);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // 👈 necesario para observar los cambios
  } = useForm({
    defaultValues: FormDefaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onFocusStyle =
    'outline outline-fuchsia-300 shadow-soft-primary-outline dark:border-fuchsia-300';

  const onSubmit = useCallback<SubmitHandler<ISearchFiles>>(
    async (data) => {
      setInput({ ...data } as IGetFiles);
    },
    [setInput] // depende solo de setInput
  );

  const fileNameValue = watch('fileName'); // 👈 observa el campo fileName

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleSubmit(onSubmit)(); // dispara el submit con debounce
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [fileNameValue, handleSubmit, onSubmit]); // 👈 se actualiza al cambiar fileName

  return (
    <div
      ref={ref}
      className={`shadow-soft-xl rounded-2xl transition-shadow ${
        errors && errors['fileName']
          ? 'shadow-soft-error-outline border-red-500'
          : ''
      } ${isFocused ? onFocusStyle : ''}`}
    >
      <form className="flex" onSubmit={handleSubmit(onSubmit)}>
        {/* --- Selector --- */}
        <select
          className="rounded-l-2xl border border-r-0 border-gray-300 pr-2 pl-4 font-medium focus-visible:outline-none"
          id="file-types"
          {...register('typeFile')}
          onChange={(e) => {
            const event = {
              ...e,
              target: {
                ...e.target,
                name: 'typeFile',
                value: e.target.value,
              },
            };
            register('typeFile').onChange(event);
            handleSubmit(onSubmit)(); // dispara el submit inmediato al cambiar tipo
          }}
        >
          {options.map((option) => (
            <option key={option.key} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        {/* --- Selector --- */}

        {/* --- Input section --- */}
        <InputBase
          className="rounded-none border-gray-300 px-4"
          {...register('fileName')}
        />
        {/* --- Input section --- */}

        {/* --- Submit button --- */}
        <button
          type="submit"
          className="cursor-pointer rounded-r-2xl border border-l-0 border-gray-300 px-3"
        >
          <IoSearch />
        </button>
        {/* --- Submit button --- */}
      </form>
    </div>
  );
};

export default SearchBar;
