import { MdCloudUpload } from 'react-icons/md';
import AppConfig from '../../../config';
import { useStateModal, useUser } from '../../../hooks';
import { Button } from '../../UI/Button';
import { useUploadFiles } from '../hooks/useUploadFiles';
import { useFiles } from '../hooks/useFiles';
import { FilesValidatorService } from '../../../services/files-validator-service';
import Modal from '../../UI/Modal';

const SendFiles = () => {
  const { maxSizeOfFile } = AppConfig.uploadFiles.onUpdateBooksPage;
  const { openModal, closeModal, modalRef } = useStateModal();
  const { mutation, uploadFiles } = useUploadFiles();
  const { files } = useFiles();
  const { id } = useUser();

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

    openModal();
    const res = await uploadFiles({ userId: id, files });
    if (!res) return;
  };

  return (
    <>
      <Button fullWidth noMargin onClick={onSubmit} variant="black">
        <MdCloudUpload className="h-4 w-4 text-white" />
        Upload
      </Button>
      <Modal
        isLoading={mutation.isPending}
        showModal={modalRef}
        closeModal={closeModal}
        isSuccess={mutation.isSuccess}
        title="Files uploaded successfully"
      />
    </>
  );
};
export default SendFiles;
