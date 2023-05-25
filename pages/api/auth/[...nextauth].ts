import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, {NextAuthOptions, User} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


const options: NextAuthOptions = {

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',

            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),

    ],
    secret: process.env.JWT_SECRET,

};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
