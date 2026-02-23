import { NextResponse } from 'next/server';

const ADMIN_COOKIE_NAME = 'dm_admin';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Only apply to non-admin routes (user routes)
  if (pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  const isAdmin = request.cookies.get(ADMIN_COOKIE_NAME)?.value === '1';
  if (isAdmin) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
