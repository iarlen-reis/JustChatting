import axios from 'axios'
import NextAuth from 'next-auth/next'
import { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
        email: user.email,
        name: user.name,
        image: user.image,
      })
      return true
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  pages: {
    signIn: '/login',
    signOut: '/login',
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
