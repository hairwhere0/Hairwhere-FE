import { http, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';

const generateId = () => Date.now() + Math.floor(Math.random() * 1000);

export const handlers = [
  http.get(`/photo/find/all`, async ({ }) => {
    return new HttpResponse(
      JSON.stringify({
        code: "SUCCESS",
        message: "성공",
        result: {
          number: 0,
          last: false,
          content: [
            {
              id: generateId(),
              nickname: "kim8888",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "뽀로로",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "허쉬컷",
              text: "너무 예뻐요",
              gender: "female",
              created: new Date(),
              hairSalon: "청담 꼰띠고",
              hairSalonAddress: "서울 강남구 선릉로146길 58 B1층",
              hairLength: "롱",
              hairColor: "블랙",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "강한남자",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "포마드",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "쌤시크 블랙",
              hairSalonAddress: "서서울 강남구 선릉로146길 27-5 1층",
              hairLength: "쇼트",
              hairColor: "브라운",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "예쁜여자",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "처피뱅",
              text: "너무 예뻐요",
              gender: "female",
              created: new Date(),
              hairSalon: "머리 잘하는 집",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "탈색",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "컴공",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "단발",
              text: "너무 예뻐요",
              gender: "female",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "랄랄라",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "female",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "kim8888",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "kim8888",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "kim8888",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "kim8888",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
          ]
        }
      })
    )
  }),
  http.get(`/photo/findByGender/male`, async ({ }) => {
    return new HttpResponse(
      JSON.stringify({
        code: "SUCCESS",
        message: "성공",
        result: {
          content: [
            {
              id: generateId(),
              nickname: "kim8888",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "kim8888",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "kim8888",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "kim8888",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "kim8888",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "kim8888",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "kim8888",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "kim8888",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "kim8888",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "kim8888",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "투블럭",
              text: "너무 예뻐요",
              gender: "male",
              created: new Date(),
              hairSalon: "블루클럽",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "레드와인",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
          ]
        }
      })
    )
  }),
  http.get(`/photo/findByGender/female`, async ({ }) => {
    return new HttpResponse(
      JSON.stringify({
        code: "SUCCESS",
        message: "성공",
        result: {
          content: [
            {
              id: generateId(),
              nickname: "예쁜여자",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "처피뱅",
              text: "너무 예뻐요",
              gender: "female",
              created: new Date(),
              hairSalon: "머리 잘하는 집",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "탈색",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "예쁜여자",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "처피뱅",
              text: "너무 예뻐요",
              gender: "female",
              created: new Date(),
              hairSalon: "머리 잘하는 집",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "탈색",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "예쁜여자",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "처피뱅",
              text: "너무 예뻐요",
              gender: "female",
              created: new Date(),
              hairSalon: "머리 잘하는 집",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "탈색",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "예쁜여자",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "처피뱅",
              text: "너무 예뻐요",
              gender: "female",
              created: new Date(),
              hairSalon: "머리 잘하는 집",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "탈색",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "예쁜여자",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "처피뱅",
              text: "너무 예뻐요",
              gender: "female",
              created: new Date(),
              hairSalon: "머리 잘하는 집",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "탈색",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "예쁜여자",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "처피뱅",
              text: "너무 예뻐요",
              gender: "female",
              created: new Date(),
              hairSalon: "머리 잘하는 집",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "탈색",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "예쁜여자",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "처피뱅",
              text: "너무 예뻐요",
              gender: "female",
              created: new Date(),
              hairSalon: "머리 잘하는 집",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "탈색",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "예쁜여자",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "처피뱅",
              text: "너무 예뻐요",
              gender: "female",
              created: new Date(),
              hairSalon: "머리 잘하는 집",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "탈색",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "예쁜여자",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "처피뱅",
              text: "너무 예뻐요",
              gender: "female",
              created: new Date(),
              hairSalon: "머리 잘하는 집",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "탈색",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
            {
              id: generateId(),
              nickname: "예쁜여자",
              photoImagePath: [
                faker.image.avatar(),
                faker.image.avatar(),
                faker.image.avatar(),
              ],
              likeCount: 10,
              hairName: "처피뱅",
              text: "너무 예뻐요",
              gender: "female",
              created: new Date(),
              hairSalon: "머리 잘하는 집",
              hairSalonAddress: "서울 양천구 목동남로4길 10",
              hairLength: "쇼트",
              hairColor: "탈색",
              kakaoId: generateId()+1,
              userProfilePath: faker.image.avatar(),
              likedNickNames: [],
            },
          ]
        }
      })
    )
  }),
  http.get(`/photo/find/:photoId`, async ({ }) => {
    return new HttpResponse(
      JSON.stringify({
        code: "SUCCESS",
        message: "성공",
        result: {
          id: generateId(),
          nickname: "예쁜여자",
          photoImagePath: [
            faker.image.avatar(),
            faker.image.avatar(),
            faker.image.avatar(),
          ],
          likeCount: 10,
          hairName: "처피뱅",
          text: "너무 예뻐요",
          gender: "female",
          created: new Date(),
          hairSalon: "머리 잘하는 집",
          hairSalonAddress: "서울 양천구 목동남로4길 10",
          hairLength: "쇼트",
          hairColor: "탈색",
          kakaoId: generateId()+1,
          userProfilePath: faker.image.avatar(),
          likedNickNames: [],
        },
      })
    )
  })
]