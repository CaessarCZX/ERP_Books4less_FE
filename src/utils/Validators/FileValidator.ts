const DEFAULT_MAXSIZE = 5 * 1024 * 1024;

export interface FilesValidatorResult {
  valid: boolean;
  errors?: string[];
}

/**
 * File validator
 * Only can set an Lower Case string array of extension files
 * @param allowedTypes string[]
 */

class FileValidator {
  private maxSize: number;
  private allowedTypes: string[];

  constructor(maxSize: number = DEFAULT_MAXSIZE, allowedTypes: string[] = []) {
    this.maxSize = maxSize;
    this.allowedTypes = allowedTypes;
  }

  getExtension(filename: string): string {
    return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
  }

  isEmpty(files: File[]) {
    return files.length === 0;
  }

  isExceedMaxSize(totalSize: number) {
    return totalSize > this.maxSize;
  }

  validateSize(file: File): boolean {
    return file.size <= this.maxSize;
  }

  validateType(file: File): boolean {
    if (this.allowedTypes.length === 0) {
      return true;
    }
    const fileExtension = this.getExtension(file.name).toLowerCase();
    return this.allowedTypes.includes(fileExtension);
  }

  validate(files: File[]): { valid: boolean; errors: string[] } {
    if (this.isEmpty(files)) {
      return { valid: false, errors: ['No files available.'] };
    }

    const errors = files.reduce((acc: string[], file) => {
      if (!this.validateSize(file)) {
        acc.push(`The file "${file.name}" exceeds the maximum size.`);
      }
      if (!this.validateType(file)) {
        acc.push(`The file type "${file.name}" is not allowed.`);
      }
      return acc;
    }, []);

    if (errors.length > 0) {
      return { valid: false, errors };
    }

    const totalSize = files.reduce((acc, file) => acc + file.size, 0);

    if (this.isExceedMaxSize(totalSize)) {
      return {
        valid: false,
        errors: ['The total size of the files exceeds the maximum allowed.'],
      };
    }

    return { valid: true, errors: [] };
  }
}

export default FileValidator;
