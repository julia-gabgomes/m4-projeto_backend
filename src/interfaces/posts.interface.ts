export interface IPost {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  type: string;
}

export interface IPostRequest {
  title: string;
  content: string;
  type: string;
}
