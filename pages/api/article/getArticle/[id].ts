import { PrismaClient } from '@prisma/client';
import {NextApiRequest, NextApiResponse} from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    try {
        const article = await prisma.articles.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (article) {
            res.status(200).json(article);
        } else {
            res.status(404).json({ message: 'Article non trouvé' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
