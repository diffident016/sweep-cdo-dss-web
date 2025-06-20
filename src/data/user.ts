import { prisma } from "@/../prisma/prisma";
import { User } from "@/types/user";

export const getUserById = async (id: string): Promise<User | null> => {
  try {
    const user = (await prisma.user.findUnique({
      where: { id },
    })) as User;

    return user;
  } catch (error: any) {
    return null;
  }
};
