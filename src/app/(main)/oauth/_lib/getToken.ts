import axios from "axios";

export const getToken = async (
  authCode: string
): Promise<{ success: boolean; }> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/kakao/getAccessToken?code=${authCode}`
    );

    if (response.status === 200 && response.data) {
      const accessToken = response.data;
      
      // 응답 데이터 구조 디버깅
      console.log("Response data structure:", JSON.stringify(response.data, null, 2));
      
      if(accessToken) {
        localStorage.setItem('accessToken', accessToken);
        document.cookie = `accessToken=${accessToken}; path=/; max-age=86400`;
        return { success: true };
      }
    }

    console.error("Response unsuccessful or missing data", response);
    return { success: false };
  } catch (error) {
    console.error("Error in getToken:", error);
    return { success: false  };
  }
};