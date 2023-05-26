import { Session } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        token: string;
        userId: number;
        expires: string; // Ajoutez cette ligne pour inclure la propriété expires
    }
}
