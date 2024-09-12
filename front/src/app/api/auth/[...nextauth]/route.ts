import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token }) {
			if (token.accessToken) {
				session.accessToken = token.accessToken as string;
			}
			return session;
		},
		async redirect({ url, baseUrl }) {
			// Redirigir al home después de iniciar sesión
			return baseUrl;
		},
	},
});

export { handler as GET, handler as POST };
