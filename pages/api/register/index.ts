import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function createUser(req: NextApiRequest, res: NextApiResponse) {
    try {
        var bcrypt = require('bcryptjs');
        const { email, first_name, name, password, pseudo_name, address, town, zipcode, subtype, usertype } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email,
                first_name,
                name,
                password: hashedPassword,
                subtype,
                usertype

            },
        });
        // Générer un token JWT
        const token = jwt.sign({ userId: user.id }, "secretKey", { expiresIn: '1h' });

        // Envoyer la réponse avec le token JWT
        return res.status(200).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to create user." });
    } finally {
        await prisma.$disconnect();
    }
}
