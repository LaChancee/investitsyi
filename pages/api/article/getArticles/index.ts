
import { PrismaClient} from '@prisma/client';
import {NextApiRequest, NextApiResponse} from "next";

const prisma = new PrismaClient();

export default async function getArticles(req: NextApiRequest, res: NextApiResponse) {
    try {
        const articles = await prisma.articles.findMany();
        if (articles.length > 0) {
            res.status(201).json( articles); // Convertir en type Articles[]
        } else {
            return res.status(404);
        }
    } catch (err) {
        console.log(err);
        return res.status(500);
    }
}