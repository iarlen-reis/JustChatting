import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (request: NextRequest) => {
  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  if (request.nextUrl.pathname.startsWith('/login')) {
    if (session) {
      const url = new URL(`/chats`, request.url)
      return NextResponse.redirect(url)
    }
  }

  if (request.nextUrl.pathname.startsWith('/chats')) {
    if (!session) {
      const url = new URL(`/login`, request.url)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/login:path', '/chats/:path*'],
}
