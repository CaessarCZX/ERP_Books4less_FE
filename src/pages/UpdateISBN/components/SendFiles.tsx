import { useFiles } from '../../../components/DropZone/hooks/useFiles';
import { Button } from '../../../components/UI/Button';
import { useUploadReferences } from '../hooks/useUploadReferences';
import { useStateModal } from '../../../hooks/useStateModal';
import { FilesValidatorService } from '../../../services/files-validator-service';
import Modal from '../../../components/UI/Modal';
import AppConfig from '../../../config';
import { useTranslation } from 'react-i18next';
import { useUser } from '../../../hooks';

const SendFiles = () => {
  const { maxSizeOfFile } = AppConfig.uploadFiles.onUpdateBooksPage;
  const { openModal, closeModal, modalRef } = useStateModal();
  const { files, clearFiles } = useFiles();
  const { uploadReferences, mutation } = useUploadReferences();
  const { id } = useUser();
  const { t } = useTranslation();

  const onSubmit = async () => {
    const validator = new FilesValidatorService(files, maxSizeOfFile);
    const isValidFile = validator.validateFiles();

    // Only one file
    if (files.length > 1) {
      validator.renderNotifications([
        "You can't upload more than one file per time",
      ]);
      return;
    }

    // If valid file
    if (!isValidFile) return;

    //Open Ui
    openModal();
    const res = await uploadReferences({ userId: id, files });
    if (!res) return;
    clearFiles();
  };

  return (
    <div className="text-right">
      <Button disabled={files.length === 0} onClick={onSubmit} variant="black">
        {t('updateISBN.btnUpload')}
      </Button>
      <Modal
        isLoading={mutation.isPending}
        showModal={modalRef}
        closeModal={closeModal}
        isSuccess={mutation.isSuccess}
        title="Update ISBN Successfully"
      />
    </div>
  );
};
export default SendFiles;
