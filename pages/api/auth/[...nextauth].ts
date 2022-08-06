import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Auth0Provider({
      clientId: "nq697PXsDaJE8sIq4Hwq7G0FcgbOd8kX",
      clientSecret:
        "D1Fo-Ddn5zvkDV0lBBGVvQIKFxKGFM4RPVjxEfb6ZDtNnZ8oxzs_m4c1MDyfZIYY",
      issuer: "https://authloginpercyavaur.auth0.com",
      authorization:
        "https://authloginpercyavaur.auth0.com/authorize?response_type=code&prompt=login",
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      /* Just if you want to show accessToken in frontend */
      if (account) token.accessToken = account.access_token;
      return token;
    },
    async session({ session, user, token }) {
      /* Just if you want to show accessToken in frontend */
      session.accessToken = token.accessToken;
      return session;
    },
  },
  /* disabled it on production evironment */
  debug: false,
});
