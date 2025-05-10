interface UpdateBooks {
  userId: string;
  files: File[];
}

export class UpdateBooksAdapter {
  formDataGenerator(updateBooksRequest: UpdateBooks): FormData {
    const formData = new FormData();
    formData.append('user_id', updateBooksRequest.userId);

    // Solo se sube un archivo, el primero
    if (updateBooksRequest.files.length > 0) {
      formData.append('file', updateBooksRequest.files[0]);
    }

    return formData;
  }

  mapToUpdateBooks(userId: string, files: File[]): UpdateBooks {
    return {
      userId,
      files,
    };
  }
}
