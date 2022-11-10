import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";

import { prisma } from "../../lib/prisma";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401);
    res.end();
  }
  const email = session?.user?.email!;
  const { username, image, name } = req.body;
  try {
    const response = await prisma.user.update({
      where: {
        email,
      },
      data: {
        username,
        name,
        image,
      },
    });
    // console.log("test " + response);
    res.status(200);
    res.end();
  } catch (e) {
    res.status(400);
    res.end();
  }
}
