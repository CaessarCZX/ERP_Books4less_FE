import React, { useState } from 'react';

interface ToggleSliderProps {
  onChange: (isChecked: boolean) => void;
  initialChecked?: boolean;
  size?: 'small' | 'medium' | 'large';
  colorOn?: string;
  colorOff?: string;
  thumbColor?: string;
}

const ToggleSlider: React.FC<ToggleSliderProps> = ({
  onChange,
  initialChecked = false,
  size = 'medium',
  colorOn = 'bg-indigo-600',
  colorOff = 'bg-gray-300',
  thumbColor = 'bg-white',
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-10 h-5 rounded-full';
      case 'large':
        return 'w-16 h-8 rounded-full';
      default:
        return 'w-12 h-6 rounded-full'; // medium
    }
  };

  const getThumbPositionClasses = () => {
    return isChecked
      ? 'translate-x-full rtl:-translate-x-full'
      : 'translate-x-0';
  };

  const getThumbSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-5 h-5';
      case 'large':
        return 'w-8 h-8';
      default:
        return 'w-6 h-6'; // medium
    }
  };

  return (
    <button
      role="switch"
      aria-checked={isChecked}
      onClick={handleToggle}
      className={`relative inline-flex flex-shrink-0 cursor-pointer transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-indigo-500 focus:outline-none ${getSizeClasses()} ${
        isChecked ? colorOn : colorOff
      }`}
    >
      <span className="sr-only">Toggle Button</span>
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block transform rounded-full shadow transition-transform duration-200 ease-in-out ${getThumbSizeClasses()} ${thumbColor} ${getThumbPositionClasses()}`}
      />
    </button>
  );
};

export default ToggleSlider;
