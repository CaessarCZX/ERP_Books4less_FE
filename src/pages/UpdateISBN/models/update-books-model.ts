export interface IUpdateReference {
  userId: string;
  files: File[];
}

export interface IUpdateReferenceResponse {
  message: string;
  total_items: number;
  errors?: string[];
}
