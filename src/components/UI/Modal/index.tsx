import { FC, ReactNode } from 'react';
import CircleLoader from '../../../components/Loader/Circle/CircleLoader';
import failDownload from '../../../assets/common/forbidden-cancel.svg';
import successDownload from '../../../assets/common/download-svg.svg';

interface Props {
  title: string;
  content: ReactNode;
  closeModal: () => void;
  showModal: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

const Modal: FC<Partial<Props>> = ({
  title,
  content,
  closeModal,
  showModal,
  isLoading,
  isSuccess,
}) => {
  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 w-full text-center">
                    <h3
                      className="text-2xl leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      {isLoading
                        ? 'Waiting for process'
                        : isSuccess
                          ? title
                          : 'Failed process'}
                    </h3>
                    <div className="mx-auto inline-block pt-8">
                      {isLoading ? (
                        <CircleLoader className="" />
                      ) : isSuccess ? (
                        <img
                          src={successDownload}
                          className="h-28 w-28"
                          alt="Successful download"
                        />
                      ) : (
                        <img
                          src={failDownload}
                          className="h-28 w-28"
                          alt="Failed download"
                        />
                      )}
                    </div>
                    <div className="mt-2">{content}</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={closeModal}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
