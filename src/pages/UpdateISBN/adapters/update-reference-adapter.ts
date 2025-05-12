interface UpdateBooks {
  userId: string;
  files: File[];
}

export class UpdateBooksAdapter {
  formDataGenerator(updateBooksRequest: UpdateBooks): FormData {
    const formData = new FormData();
    formData.append('user_id', updateBooksRequest.userId);

    updateBooksRequest.files.forEach((file) => {
      formData.append('files', file);
    });

    return formData;
  }

  mapToUpdateBooks(userId: string, files: File[]): UpdateBooks {
    return {
      userId,
      files,
    };
  }
}
