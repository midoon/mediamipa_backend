export type MessageResponse = {
  status: boolean;
  message: string;
};

export type DataResponse<T> = {
  status: boolean;
  message: string;
  data: T;
};

export type PageMetadata = {
  page: number;
  size: number;
  totalItems: number;
  totalPages: number;
};

export type PageResponse<T> = {
  status: boolean;
  message: string;
  data: T[];
  metadata: PageMetadata;
};
