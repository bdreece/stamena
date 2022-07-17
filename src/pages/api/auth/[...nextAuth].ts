import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from 'utils/db.server';

import {
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_ISSUER_BASE_URL,
} from 'utils/env.server';

export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    Auth0Provider({
      clientId: AUTH0_CLIENT_ID,
      clientSecret: AUTH0_CLIENT_SECRET,
      issuer: AUTH0_ISSUER_BASE_URL,
    }),
  ],
});
