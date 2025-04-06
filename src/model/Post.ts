export interface Post {
  id: number;
  nickname: string;
  photoImagePath: string[];
  likeCount:number;
  hairName: string;
  text: string;
  gender: string;
  created: Date;  
  hairSalon: string;
  hairSalonAddress: string;
  hairLength: string;
  hairColor:string;
  kakaoId: number;
  userProfilePath: string;
  likedNickNames: string[];
}