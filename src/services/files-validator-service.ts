import FileValidator from '../utils/Validators/FileValidator';
import Notification from '../utils/Notification';

export class FilesValidatorService {
  private files: File[];
  private validator: FileValidator;

  constructor(
    files: File[],
    maxSizeOnService: number,
    allowedTypesOnService: string[] = ['csv', 'xls', 'xlsx']
  ) {
    this.files = files;
    this.validator = new FileValidator(maxSizeOnService, allowedTypesOnService);
  }

  renderNotifications(messages: string[]) {
    messages.forEach((msg) => Notification.error(msg));
  }

  validateFiles() {
    const { valid, errors } = this.validator.validate(this.files);
    if (errors) this.renderNotifications(errors);
    return valid;
  }
}
