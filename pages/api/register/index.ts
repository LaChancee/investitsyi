import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

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
                pseudo_name,
                address,
                town,
                zipcode,
                subtype,
                usertype

            },
        });
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to create user." });
    } finally {
        await prisma.$disconnect();
    }
}
