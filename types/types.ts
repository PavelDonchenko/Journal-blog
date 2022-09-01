export interface IComment {
  id: number;
  user: {
    id: number;
    fullName: string;
    avatarUrl: string;
  };
  post: {
    id: number;
    title: string;
  };
  createdAt: string;
  text: string;
}
