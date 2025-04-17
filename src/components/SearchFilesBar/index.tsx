import { useForm, SubmitHandler } from 'react-hook-form';
import InputBase from '../../components/UI/Input/Input';
import { IoSearch } from 'react-icons/io5';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schemas/search-bar-model';
import options from './content/form-option-values';
import FormDefaultValues from './content/form-fields-default';
import { FC, useRef } from 'react';
import useFocusOutline from '../../hooks/useFocusOutline';
import { ISearchFiles } from './models/search-files-model';
import { IGetFiles } from '../../models/get-files-model';

interface Props {
  // Recieve attributes for search files
  setInput: (input: IGetFiles) => void;
}

const SearchBar: FC<Props> = ({ setInput }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isFocused = useFocusOutline<HTMLDivElement>(ref);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: FormDefaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const onFocusStyle =
    'outline outline-fuchsia-300 shadow-soft-primary-outline dark:border-fuchsia-300';

  const onSubmit: SubmitHandler<ISearchFiles> = async (data) => {
    // For update reference in every new input
    setInput({ ...data } as IGetFiles);
  };

  return (
    <div
      ref={ref}
      className={`shadow-soft-xl rounded-2xl transition-shadow ${errors && errors['fileName'] ? 'shadow-soft-error-outline border-red-500' : ''} ${isFocused ? onFocusStyle : ''} `}
    >
      <form className="flex" onSubmit={handleSubmit(onSubmit)}>
        {/* --- Selector --- */}
        <select
          className="rounded-l-2xl border border-r-0 border-gray-300 pr-2 pl-4 font-medium focus-visible:outline-none"
          id="file-types"
          {...register('typeFile')}
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
