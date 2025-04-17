interface UpdateBooks {
  userId: string;
  file: File;
}

export class UpdateBooksAdapter {
  formDataGenerator(updateBooksRequest: UpdateBooks): FormData {
    console.log(updateBooksRequest);
    const formData = new FormData();
    formData.append('user_id', updateBooksRequest.userId);
    formData.append('file', updateBooksRequest.file);
    // updateBooksRequest.files.forEach((file) => { <------ For several files
    //   formData.append('files', file);
    // });
    return formData;
  }

  mapToUpdateBooks(userId: string, file: File): UpdateBooks {
    return {
      userId,
      file,
    };
  }
}
