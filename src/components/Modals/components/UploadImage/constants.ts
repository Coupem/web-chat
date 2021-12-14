type UploadStatuses = {
  [key: string]: string;
};

type DescriptionTexts = {
  [key: string]: string;
};

type HeaderTexts = {
  [key: string]: string;
};

export const uploadStatuses: UploadStatuses = {
  pending: 'pending',
  processing: 'processing',
  finished: 'finished',
};

export const descriptionTexts: DescriptionTexts = {
  [uploadStatuses.pending]: 'Upload your image file, up to 5MB in size',
  [uploadStatuses.processing]: "Don't close this window while the image uploading",
  [uploadStatuses.finished]: 'Image uploaded successfully',
};

export const headerTexts: HeaderTexts = {
  [uploadStatuses.pending]: 'Upload image',
  [uploadStatuses.processing]: 'Upload image',
  [uploadStatuses.finished]: 'Success',
};
