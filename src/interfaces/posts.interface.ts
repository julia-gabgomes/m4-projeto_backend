export interface IPost {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    likes: number;
    type: string;
    }
export interface IPostRequest {
    id: string;
    title: string;
    content: string;
    likes: number;
    type: string;
      }