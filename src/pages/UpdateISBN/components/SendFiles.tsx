import { useSelector } from 'react-redux';
import { useFiles } from '../../../components/DropZone/hooks/useFiles';
import { Button } from '../../../components/UI/Button';
import { useUploadReferences } from '../hooks/useUploadReferences';
import { RootState } from '../../../context/store';
import { useStateModal } from '../../../hooks/useStateModal';
import { FilesValidatorService } from '../../../services/files-validator-service';
import Modal from '../../../components/UI/Modal';

const SendFiles = () => {
  const { openModal, closeModal, modalRef } = useStateModal();
  const { files, clearFiles } = useFiles();
  const { uploadReferences, mutation } = useUploadReferences();
  const userId = useSelector((state: RootState) => state.user.id);

  const onSubmit = async () => {
    const validator = new FilesValidatorService(files);
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
    const res = await uploadReferences({ userId, files });
    if (!res) return;
    clearFiles();
  };

  return (
    <div className="text-right">
      <Button disabled={files.length === 0} onClick={onSubmit} variant="black">
        Upload Files
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
