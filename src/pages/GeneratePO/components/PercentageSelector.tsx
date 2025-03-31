import { ChangeEvent, FC, useState } from 'react';
import { CgMathPlus, CgMathMinus } from 'react-icons/cg';

const PercentageSelector: FC = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    if (quantity < 100) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = Math.max(0, Math.min(100, parseInt(value, 10) || 0));
    setQuantity(numericValue);
  };

  return (
    <div className="relative flex items-center">
      <button
        className="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:ring-2 focus:ring-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        onClick={handleDecrement}
      >
        <CgMathMinus className="h-5 w-5 text-gray-900 dark:text-white" />
      </button>
      <input
        type="text"
        value={quantity}
        onChange={handleChange}
        className="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      <button
        className="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:ring-2 focus:ring-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        onClick={handleIncrement}
      >
        <CgMathPlus className="h-5 w-5 text-gray-900 dark:text-white" />
      </button>
    </div>
  );
};

export default PercentageSelector;
