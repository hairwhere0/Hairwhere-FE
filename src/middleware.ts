import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
    // 토큰 검증
    const accessToken = request.cookies.get('accessToken')?.value;
    
    // 토큰이 없으면 로그인 페이지로 리다이렉트
    if (!accessToken) {
      console.log('No active session for protected route');
      return NextResponse.redirect(new URL('/login', request.url));
    }
    
    return NextResponse.next();
}

export const config = {
  matcher: ['/post', '/likes', '/notice', '/myPage'],
}
