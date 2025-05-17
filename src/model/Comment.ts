import { User } from "./User";

export interface Comment {
  id: number,
  content: string,
  createdAt: Date
  user: User,
  photoId: number,
  parentId?: number,
  replies: Comment[],
}