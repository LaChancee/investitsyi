import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from "@prisma/client";
import {session} from "next-auth/core/routes";

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Vérifier si l'utilisateur existe
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return res.status(401).json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
        }

        // Vérifier si le mot de passe est correct
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
        }

        // Générer un token JWT
        const token = jwt.sign({ userId: user.id }, "secretKey", { expiresIn: '1h' });


        // Envoyer la réponse avec le token JWT
        return res.status(200).json({ token });
    }

    return res.status(400).json({ message: "Mauvaise méthode HTTP utilisée pour cet endpoint" });
}
