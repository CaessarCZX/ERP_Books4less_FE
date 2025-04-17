import { FC } from 'react';
import { Button } from '../../../components/UI/Button';
import { PurchaseOrderGenerated } from '../Models/generate-po-model';

interface Props {
  purchaseOrderInfo: PurchaseOrderGenerated | undefined;
}

const DownloadFilesZone: FC<Props> = ({ purchaseOrderInfo }) => {
  return (
    <div className="w-full">
      <div className="mt-7 flex justify-center gap-5">
        <a href={purchaseOrderInfo?.pdf} target="_blank">
          <Button noMargin variant="black">
            Download PDF
          </Button>
        </a>
        <a href={purchaseOrderInfo?.csv} target="_blank">
          <Button noMargin variant="outlineBlack">
            Download CSV
          </Button>
        </a>
      </div>
    </div>
  );
};
export default DownloadFilesZone;
