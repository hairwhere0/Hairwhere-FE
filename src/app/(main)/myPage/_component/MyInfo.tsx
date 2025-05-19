"use client"

import MyPosts from './MyPosts';
import style from './myInfo.module.css';
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState, useRef} from "react";
import { useStore } from "@/store/store";

export default function MyInfo() {
  const { name, setName, image, setImage } = useStore((state) => ({
    name: state.name,
    setName: state.setName,
    image: state.image,
    setImage: state.setImage
  }));
  const myName = localStorage.getItem("nickName");
  const myProfile = localStorage.getItem("profileImagePath");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editName, setEditName] = useState<string>('');
  const [editImage, setEditImage] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const editModeToggle = () => {
    setEditName('');
    setEditImage(null);
    setEditMode(!editMode);
  }

  const handlePlusClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 파일 입력 클릭
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setEditImage(file);
    }
  };

  const updateProfile = async () => {
    try {
      let updatedImageUrl: string = myProfile || ""; // 기본값은 현재 프로필 이미지
      
      if(editName !== "" && editImage !== null) {
        const formData = new FormData();
        formData.append('profile', editImage);
        formData.append('name', editName);
        const res = await fetch(`/update/user`, {
          method: 'PATCH',
          credentials: 'include',
          body: formData
        });
        if (!res.ok) {
          const errorData = await res.json();
          console.error("서버 오류 메시지:", errorData.message || errorData);
          alert("프로필 변경에 실패했습니다.");
        } else {
          const data = await res.json(); // 서버 응답에서 이미지 URL 가져오기
          setImage(editImage);
          setName(editName);
          
          // localStorage 업데이트
          localStorage.setItem("nickName", editName);
          
          // 서버 응답에 이미지 URL이 포함되어 있다고 가정
          if (data && data.profileImageUrl) {
            updatedImageUrl = data.profileImageUrl;
            localStorage.setItem("profileImageUrl", updatedImageUrl);
          }
        }
      }
      else if(editImage !== null) {
        const formData = new FormData();
        formData.append('profile', editImage);
        const res = await fetch(`/update/user`, {
          method: 'PATCH',
          credentials: 'include',
          body: formData
        });
        if (!res.ok) {
          const errorData = await res.json();
          console.error("서버 오류 메시지:", errorData.message || errorData);
          alert("프로필 사진 변경에 실패했습니다.");
        } else {
          const data = await res.json(); // 서버 응답에서 이미지 URL 가져오기
          setImage(editImage);
          
          // 서버 응답에 이미지 URL이 포함되어 있다고 가정
          if (data && data.profileImageUrl) {
            updatedImageUrl = data.profileImageUrl;
            localStorage.setItem("profileImageUrl", updatedImageUrl);
          }
        }
      }
      else if(editName !== "") {
        const formData = new FormData();
        formData.append('name', editName);
        const res = await fetch(`/update/user`, {
          method: 'PATCH',
          credentials: 'include',
          body: formData
        });
        if (!res.ok) {
          const errorData = await res.json();
          console.error("서버 오류 메시지:", errorData.message || errorData);
          alert("닉네임 변경에 실패했습니다.");
        } else {
          setName(editName);
          localStorage.setItem("nickName", editName);
        }
      }
      editModeToggle();
    } catch (error) {
      console.error("요청 오류:", error);
    }
  };

  const editImageSrc = editImage ? URL.createObjectURL(editImage) : myProfile; //editMode에서 보여줄 사진
  const changedImageSrc = image ? URL.createObjectURL(image) : myProfile; //프로필 변경 후 보여줄 사진
  const isCompleteDisabled = !editName && !editImage;

  if(!myName) {
    return (
      <>
        <div className={style.header}>
          <span>프로필</span>
        </div>
        <div className={style.body}>
          <div className={style.container}>
            <div className={style.profileDiv}>
              <div className={style.profile}></div>
            </div>
          </div>
          <div style={{
            height: 100,
            alignItems: 'center',
            fontSize: 31,
            fontWeight: 'bold',
            justifyContent: 'center',
            display: 'flex'
          }}>
            계정이 존재하지 않음
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className={style.header}>
        {editMode
        ? <div className={style.editCancle} onClick={editModeToggle}>
            취소
          </div>
        : <></>}
        <span>프로필</span>
        {editMode 
        ? <div className={isCompleteDisabled ? style.disabledButton : style.editComplete} onClick={isCompleteDisabled ? undefined : updateProfile}>
            완료
          </div>
        : <></>}
      </div>
      <div className={style.body}>
        <div className={style.container}>
          <div className={style.profileDiv}>
            <div className={style.avatarWrapper}>
              <Avatar 
                src={editMode ? (editImage ? editImageSrc : myProfile) : (image ? changedImageSrc : myProfile)}
                className={style.profile} 
                icon={!(myProfile || editImage) && <UserOutlined />}
              />
              {editMode && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={style.fileInput}
                  ref={fileInputRef}
                />
              )}
              {editMode && (
                <div className={style.plusIcon} onClick={handlePlusClick}>+</div> // + 버튼
              )}

            </div>
            {editMode?
              <input className={style.editName} placeholder={myName || ''} maxLength={10} value={editName} onChange={(e) => setEditName(e.target.value)}/>
              :<div className={style.nickname}>{name||myName}</div>}
            {myName
              ? editMode 
                ? <></>
                : <div className={style.editProfile} onClick={editModeToggle}>
                    프로필 수정
                  </div> 
              : <></>
            }
          </div>
        </div>
        <div className={style.postsWrapper}>
          <MyPosts/>
        </div>
      </div>
    </>
  )
}