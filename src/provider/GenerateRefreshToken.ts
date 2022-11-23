import dayjs from "dayjs";
import { client } from "../prisma/client";

class GenerateRefreshToken {
  async execute(userId: string) {
    const expiresIn = dayjs().add(2, "s").unix();

    console.log(userId);

    const generateRefreshToken = await client.refreshToken.create({
      data: {
        userId,
        expiresIn,
      },
    });

    //console.log(generateRefreshToken);

    return generateRefreshToken;
  }
}

export { GenerateRefreshToken };
