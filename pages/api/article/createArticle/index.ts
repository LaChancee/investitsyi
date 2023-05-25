// api/createArticle.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function createArticle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        // Extract the form data
        const { title,subTitle,coverPicture, description, category, content } = req.body;

        // Create the article
        const article = await prisma.articles.create({
            data: {
                title,
                subTitle,
                description,
                category,
                coverPicture,
                content,
            },
        });

        console.log('Article created:', article);

        res.status(201).json({ message: 'Article created successfully' });
    } catch (error) {
        console.error('Error creating article:', error);
        res.status(500).json({ message: 'Error creating article' });
    }
}
