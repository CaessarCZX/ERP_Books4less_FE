import { FaCheck } from 'react-icons/fa6';
import { useFormContext } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { registerMessages } from '../../../utils/Messages/register-messages';

interface PasswordRequirementProps {
  isValid: boolean;
  requiremetText: string;
}

const PasswordRequirement: React.FC<PasswordRequirementProps> = ({
  isValid,
  requiremetText,
}) => (
  <li className={`flex items-center ${isValid ? 'text-green-600' : ''}`}>
    <FaCheck
      className={`mr-2 h-4 w-4 flex-shrink-0 ${isValid ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`}
    />
    <p className="m-0 text-xs">{requiremetText}</p>
  </li>
);

const PasswordStrengthFeedback = () => {
  const { watch } = useFormContext();
  const password = watch('password');

  const [strength, setStrength] = useState(0);
  const [hasMinLength, setHasMinLength] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);

  useEffect(() => {
    let newStrength = 0;
    let lengthMet = false;
    let lowerCaseMet = false;
    let upperCaseMet = false;
    let numberMet = false;
    let symbolMet = false;

    if (password?.length >= 8) {
      newStrength += 40;
      lengthMet = true;
    }
    if (/[a-z]/.test(password)) {
      newStrength += 10;
      lowerCaseMet = true;
    }
    if (/[A-Z]/.test(password)) {
      newStrength += 15;
      upperCaseMet = true;
    }
    if (/[0-9]/.test(password)) {
      newStrength += 15;
      numberMet = true;
    }
    if (/[^a-zA-Z0-9\s]/.test(password)) {
      newStrength += 20;
      symbolMet = true;
    }

    setStrength(newStrength);
    setHasMinLength(lengthMet);
    setHasLowerCase(lowerCaseMet);
    setHasUpperCase(upperCaseMet);
    setHasNumber(numberMet);
    setHasSymbol(symbolMet);
  }, [password]);

  const criteriaList = [
    {
      key: 'hasMinLength',
      text: registerMessages.password.notMin,
      value: hasMinLength,
    },
    {
      key: 'hasLowercase',
      text: registerMessages.password.notLower,
      value: hasLowerCase,
    },
    {
      key: 'hasUppercase',
      text: registerMessages.password.notUpper,
      value: hasUpperCase,
    },
    {
      key: 'hasNumber',
      text: registerMessages.password.notNumber,
      value: hasNumber,
    },
    {
      key: 'hasSpecialChar',
      text: registerMessages.password.notSpecialChar,
      value: hasSymbol,
    },
  ];

  return (
    <div className="space-y-2">
      <div className="flex flex-col items-center space-x-2">
        <div className="mb-2 flex w-full gap-2">
          <div className="text-sm text-gray-500">Password Strength:</div>
          <span className="text-sm text-gray-500">{strength}%</span>
        </div>
        <div className="relative h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className={`h-2.5 rounded-full bg-yellow-500`}
            style={{ width: `${strength}%` }}
          ></div>
        </div>
      </div>
      <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
        {criteriaList.map((criteria) => (
          <PasswordRequirement
            key={criteria.key}
            isValid={criteria.value}
            requiremetText={criteria.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default PasswordStrengthFeedback;
