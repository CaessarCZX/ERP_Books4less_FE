import { HiOutlineCloudUpload } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const DropZoneCleanStage = () => {
  const { t } = useTranslation();

  return (
    <span className="flex items-center space-x-2">
      <HiOutlineCloudUpload className="h-6 w-6 text-gray-600" />
      <span className="font-medium text-gray-600">
        {t('POG.dropZone-part1')}
        <span className="ml-[4px] text-blue-600 underline">
          {t('POG.dropZone-part2')}
        </span>
      </span>
    </span>
  );
};
export default DropZoneCleanStage;
