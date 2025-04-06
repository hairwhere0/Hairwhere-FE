import axios from "axios";

export const getToken = async (
  authCode: string
): Promise<{ success: boolean; }> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/login/kakao?code=${authCode}`
    );

    if (response.status === 200 && response.data && response.data.result) {
      const userData = response.data.result;
      
      // 응답 데이터 구조 디버깅
      console.log("Response data structure:", JSON.stringify(response.data, null, 2));
      
      if(userData) {
        localStorage.setItem('access_token', userData.access_token);
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